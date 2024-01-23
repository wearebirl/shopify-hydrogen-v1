import {Suspense} from 'react';
import {
    CacheNone,
    flattenConnection,
    gql,
    Seo,
    useSession,
    useLocalization,
    useShopQuery,
    useServerAnalytics, fetchSync, Link,
} from '@shopify/hydrogen';

import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {getApiErrorMessage} from '~/lib/utils';
import {
    AccountAddressBook,
    AccountDetails,
    AccountOrderHistory,
    FeaturedCollections,
    LogoutButton,
    PageHeader,
} from '~/components';
import {Layout, ProductSwimlane} from '~/components/index.server';
import {BirlBanner, BirlHeading, TradeInCategorySelector, TradeInProgressBar} from "../../../components/birl";

export default function Account({response}) {
    response.cache(CacheNone());

    const {
        language: {isoCode: languageCode},
        country: {isoCode: countryCode},
    } = useLocalization();
    const {customerAccessToken} = useSession();

    if (!customerAccessToken) return response.redirect('/account/login');

    const {data} = useShopQuery({
        query: CUSTOMER_QUERY,
        variables: {
            customerAccessToken,
            language: languageCode,
            country: countryCode,
        },
        cache: CacheNone(),
    });

    const {customer, featuredCollections, featuredProducts} = data;

    if (!customer) return response.redirect('/account/login');

    // The logged-in analytics state.
    useServerAnalytics({
        shopify: {
            customerId: customer.id,
        },
    });

    const addresses = flattenConnection(customer.addresses).map((address) => ({
        ...address,
        id: address.id.substring(0, address.id.lastIndexOf('?')),
        originalId: address.id,
    }));

    const defaultAddress = customer?.defaultAddress?.id?.substring(
        0,
        customer.defaultAddress.id.lastIndexOf('?'),
    );




    const cats = fetchSync('http://localhost:3000/api/birl/categories', {
        preload: true,
    }).json();

    customer.blocked = true
    if (customer) {
        try {
            const response = fetchSync(`http://localhost:3001/api/StoreFronts/shopify/blockedUsers`, {
                method: 'POST',
                preload: true,

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "merchantId": 5,
                    "merchantApiKey": "TestKey",
                    "email": customer.email
                })
            }).json()
            customer.blocked = response.blocked
            console.log(JSON.stringify(response))


        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <AuthenticatedAccount
                customer={customer}
                addresses={addresses}
                defaultAddress={defaultAddress}
                featuredCollections={flattenConnection(featuredCollections)}
                featuredProducts={flattenConnection(featuredProducts)}

                cats={cats}

            />
        </>
    );
}

function AuthenticatedAccount({
                                  customer,
                                  addresses,
                                  defaultAddress,
                                  featuredCollections,
                                  featuredProducts,
                                    cats

                              }) {
    const orders = flattenConnection(customer?.orders) || [];

    const heading = customer
        ? customer.firstName
            ? `Welcome, ${customer.firstName}.`
            : `Welcome to your account.`
        : 'Account Details';

    return (
        <Layout>
            <Suspense>
                <Seo type="noindex" data={{title: 'Account details'}} />
            </Suspense>
            <BirlBanner></BirlBanner>
            <BirlHeading headingText={"Select a category"}></BirlHeading>
            {customer.blocked ? <div className="text-center text-2xl text-red-500">
                Sorry, something is wrong with your account. Please contact Birl at hello@wearebirl.co.uk </div> : <>
            <   TradeInProgressBar currentStep={1}></TradeInProgressBar>
                <TradeInCategorySelector cats={cats}></TradeInCategorySelector>
            </>
            }


        </Layout>
    );
}

export async function api(request, {session, queryShop}) {
    if (request.method !== 'PATCH' && request.method !== 'DELETE') {
        return new Response(null, {
            status: 405,
            headers: {
                Allow: 'PATCH,DELETE',
            },
        });
    }

    if (!session) {
        return new Response('Session storage not available.', {
            status: 400,
        });
    }

    const {customerAccessToken} = await session.get();

    if (!customerAccessToken) return new Response(null, {status: 401});

    const {email, phone, firstName, lastName, newPassword} = await request.json();

    const customer = {};

    if (email) customer.email = email;
    if (phone) customer.phone = phone;
    if (firstName) customer.firstName = firstName;
    if (lastName) customer.lastName = lastName;
    if (newPassword) customer.password = newPassword;

    const {data, errors} = await queryShop({
        query: CUSTOMER_UPDATE_MUTATION,
        variables: {
            customer,
            customerAccessToken,
        },
        // @ts-expect-error `queryShop.cache` is not yet supported but soon will be.
        cache: CacheNone(),
    });

    const error = getApiErrorMessage('customerUpdate', data, errors);

    if (error) return new Response(JSON.stringify({error}), {status: 400});

    return new Response(null);
}

const CUSTOMER_QUERY = gql`
    ${PRODUCT_CARD_FRAGMENT}
    query CustomerDetails(
        $customerAccessToken: String!
        $country: CountryCode
        $language: LanguageCode
    ) @inContext(country: $country, language: $language) {
        customer(customerAccessToken: $customerAccessToken) {
            id
            firstName
            lastName
            phone
            email
            defaultAddress {
                id
                formatted
            }
            addresses(first: 6) {
                edges {
                    node {
                        id
                        formatted
                        firstName
                        lastName
                        company
                        address1
                        address2
                        country
                        province
                        city
                        zip
                        phone
                    }
                }
            }
            orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {
                edges {
                    node {
                        id
                        orderNumber
                        processedAt
                        financialStatus
                        fulfillmentStatus
                        currentTotalPrice {
                            amount
                            currencyCode
                        }
                        lineItems(first: 2) {
                            edges {
                                node {
                                    variant {
                                        image {
                                            url
                                            altText
                                            height
                                            width
                                        }
                                    }
                                    title
                                }
                            }
                        }
                    }
                }
            }
        }
        featuredProducts: products(first: 12) {
            nodes {
                ...ProductCard
            }
        }
        featuredCollections: collections(first: 3, sortKey: UPDATED_AT) {
            nodes {
                id
                title
                handle
                image {
                    altText
                    width
                    height
                    url
                }
            }
        }
    }
`;

const CUSTOMER_UPDATE_MUTATION = gql`
    mutation customerUpdate(
        $customer: CustomerUpdateInput!
        $customerAccessToken: String!
    ) {
        customerUpdate(
            customer: $customer
            customerAccessToken: $customerAccessToken
        ) {
            customerUserErrors {
                code
                field
                message
            }
        }
    }
`;

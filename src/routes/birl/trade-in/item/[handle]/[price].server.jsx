
import {Suspense, useState} from 'react';
import {
    CacheNone,
    flattenConnection,
    gql,
    Seo,
    useSession,
    useLocalization,
    useShopQuery,
    useServerAnalytics, useRouteParams, fetchSync,
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
import {
    BirlBanner,
    BirlHeading,
    ConditionSelection,

    TradeInProgressBar
} from "../../../../../components/birl";
import {MEDIA_FRAGMENT} from "../../../../../lib";
import {NotFound} from "../../../../../components/global/NotFound.server";


export default function ItemDetails({response}) {
    const {handle, price} = useRouteParams();
    response.cache(CacheNone());

    const {
        language: {isoCode: languageCode},
        country: {isoCode: countryCode},
    } = useLocalization();
    const {customerAccessToken} = useSession();

    if (!customerAccessToken) return response.redirect('/birl');

    const {data} = useShopQuery({
        query: CUSTOMER_QUERY,
        variables: {
            customerAccessToken,
            language: languageCode,
            country: countryCode,
        },
        cache: CacheNone(),
    });

    const {
        data: {product, shop},
    } = useShopQuery({
        query: PRODUCT_QUERY,
        variables: {
            country: countryCode,
            language: languageCode,
            handle,
        },
        preload: true,
    });

    let Price = parseInt(price);
    if (Price < 0) {
        return response.redirect('/birl');
    } else {
        Price = Price / 10; //fix alteration
    }


    const {customer, featuredCollections, featuredProducts} = data;

    if (!customer) return response.redirect('/birl');

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

    let item = null;
    let birlProduct = fetchSync(`http://localhost:3001/api/StoreFronts/shopify/getProductById`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productId: parseInt(handle),
            merchantId: 5,
            merchantApiKey: "TestKey"
        })
    })
    if(birlProduct.ok){

         item =  birlProduct.json();

    } else {
        //item has been altered by user or something else has gone wrong
        return response.redirect('/birl');
    }



    return (
        <>
            <AuthenticatedAccount
                customer={customer}
                addresses={addresses}
                defaultAddress={defaultAddress}
                item={item}
                price={Price}
            />
        </>
    );
}

function AuthenticatedAccount({
                                  customer,
                                  addresses,
                                  defaultAddress,
                                  item,
                                 price
                              }) {
    const orders = flattenConnection(customer?.orders) || [];


    return (
        <Layout>
            <Suspense>
                <Seo type="noindex" data={{title: 'Account details'}} />
            </Suspense>
            <BirlBanner></BirlBanner>
            <BirlHeading headingText={"Item Condition"}></BirlHeading>
            <TradeInProgressBar currentStep={2}></TradeInProgressBar>

            <ConditionSelection item={item} category={null} price={price}></ConditionSelection>




        </Layout>
    );
}

export async function api(request, {session, queryShop}){
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

const PRODUCT_QUERY = gql`
    ${MEDIA_FRAGMENT}
    query Product(
        $country: CountryCode
        $language: LanguageCode
        $handle: String!
    ) @inContext(country: $country, language: $language) {
        product(handle: $handle) {
            id
            title
            vendor
            descriptionHtml
            media(first: 7) {
                nodes {
                    ...Media
                }
            }
            productType
            variants(first: 100) {
                nodes {
                    id
                    availableForSale
                    selectedOptions {
                        name
                        value
                    }
                    image {
                        id
                        url
                        altText
                        width
                        height
                    }
                    priceV2 {
                        amount
                        currencyCode
                    }
                    compareAtPriceV2 {
                        amount
                        currencyCode
                    }
                    sku
                    title
                    unitPrice {
                        amount
                        currencyCode
                    }
                }
            }
            seo {
                description
                title
            }
        }
        shop {
            shippingPolicy {
                body
                handle
            }
            refundPolicy {
                body
                handle
            }
        }
    }
`;

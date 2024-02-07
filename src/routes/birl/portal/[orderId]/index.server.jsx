import {Suspense} from 'react';
import {
    CacheLong,
    gql,
    Seo,
    ShopifyAnalyticsConstants,
    useServerAnalytics,
    useLocalization,
    useShopQuery,
    useSession,
    CacheNone,
    flattenConnection,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {FeaturedCollections, Hero} from '~/components';
import {Layout, ProductSwimlane} from '~/components/index.server';
import BirlBanner from "../../../../components/birl/BirlBanner";
import {BirlStart, CustomerPortal} from "../../../../components/birl";
import { CustomerPortalOrder } from '../../../../components/birl/CustomerPortalOrder.client';

export default function BirlWelcome({response, params}) {
    response.cache(CacheNone());
    useServerAnalytics({
        shopify: {
            canonicalPath: '/birl',
            pageType: ShopifyAnalyticsConstants.pageType.home,
        },
    });

    console.log('params: ', params);


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

    return (
        <Layout>
            <Suspense>
                <SeoForHomepage />
            </Suspense>
            <Suspense>
                <HomepageContent customer={customer}/>
            </Suspense>
        </Layout>
    );
}

function HomepageContent({customer}) {
    const {
        language: {isoCode: languageCode},
        country: {isoCode: countryCode},
    } = useLocalization();

    const {data} = useShopQuery({
        query: HOMEPAGE_CONTENT_QUERY,
        variables: {
            language: languageCode,
            country: countryCode,
        },
        preload: true,
    });

    const {heroBanners, featuredCollections, featuredProducts} = data;

    // fill in the hero banners with placeholders if they're missing
    const [primaryHero, secondaryHero, tertiaryHero] = getHeroPlaceholder(
        heroBanners.nodes,
    );

    return (
        <>
           <div>
               <CustomerPortalOrder customer={customer} />
           </div>
        </>
    );
}

function SeoForHomepage() {
    const {
        data: {
            shop: {name, description},
        },
    } = useShopQuery({
        query: HOMEPAGE_SEO_QUERY,
        cache: CacheLong(),
        preload: true,
    });

    return (
        <Seo
            type="homepage"
            data={{
                title: name,
                description,
                titleTemplate: '%s · Powered by Hydrogen',
            }}
        />
    );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary  File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

const HOMEPAGE_CONTENT_QUERY = gql`
    ${MEDIA_FRAGMENT}
    ${PRODUCT_CARD_FRAGMENT}
    query homepage($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
        heroBanners: collections(
            first: 3
            query: "collection_type:custom"
            sortKey: UPDATED_AT
        ) {
            nodes {
                id
                handle
                title
                descriptionHtml
                heading: metafield(namespace: "hero", key: "title") {
                    value
                }
                byline: metafield(namespace: "hero", key: "byline") {
                    value
                }
                cta: metafield(namespace: "hero", key: "cta") {
                    value
                }
                spread: metafield(namespace: "hero", key: "spread") {
                    reference {
                        ...Media
                    }
                }
                spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
                    reference {
                        ...Media
                    }
                }
            }
        }
        featuredCollections: collections(
            first: 3
            query: "collection_type:smart"
            sortKey: UPDATED_AT
        ) {
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
        featuredProducts: products(first: 12) {
            nodes {
                ...ProductCard
            }
        }
    }
`;

const HOMEPAGE_SEO_QUERY = gql`
    query shopInfo {
        shop {
            name
            description
        }
    }
`;






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
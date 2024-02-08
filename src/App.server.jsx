import {Suspense} from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  FileRoutes,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  Route,
  Router,
  ShopifyAnalytics,
  ShopifyProvider,
  CartProvider,
  useSession,
  useServerAnalytics,
  Seo,
} from '@shopify/hydrogen';
import {HeaderFallback, EventsListener} from '~/components';
import {NotFound} from '~/components/index.server';
import {AddToCartModal} from './components/birl/addToCartModal/AddToCartModal.client';
import {DrawerProvider} from './components/global/Drawer.client';

function App({request}) {
  const pathname = new URL(request.normalizedUrl).pathname;
  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  const {customerAccessToken} = useSession();

  useServerAnalytics({
    shopify: {
      isLoggedIn: !!customerAccessToken,
    },
  });

  return (
    <Suspense fallback={<HeaderFallback isHome={isHome} />}>
      <EventsListener />
        <DrawerProvider>
      <ShopifyProvider countryCode={countryCode}>
        <Seo
          type="defaultSeo"
          data={{
            title: 'Hydrogen',
            description:
              "A custom storefront powered by Hydrogen, Shopify's React-based framework for building headless.",
            titleTemplate: `%s · Hydrogen`,
          }}
        />
        <CartProvider
          // onLineAdd={() => console.log("onLineAdd : ")}
          countryCode={countryCode}
          customerAccessToken={customerAccessToken}
        >
            <Router>
            <AddToCartModal />
              <FileRoutes
                basePath={countryCode ? `/${countryCode}/` : undefined}
              />
              <Route path="*" page={<NotFound />} />
            </Router>
        </CartProvider>
        <PerformanceMetrics />
        {import.meta.env.DEV && <PerformanceMetricsDebug />}
        <ShopifyAnalytics cookieDomain="hydrogen.shop" />
      </ShopifyProvider>
          </DrawerProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);

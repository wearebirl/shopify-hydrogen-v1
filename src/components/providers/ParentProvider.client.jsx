import { CartProvider, Router, Seo, ShopifyProvider, useSession } from "@shopify/hydrogen";
import { AddToCartModal } from "../birl/addToCartModal/AddToCartModal.client";







export function ParentProvider({countryCode, customerAccessToken, children}){
  
  if(countryCode && customerAccessToken && children){

      return(
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

          <AddToCartModal/>
          <Router>
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
    )
}
}
import {Link, useLoaderData} from '@remix-run/react';
import {Money, Pagination, getPaginationVariables} from '@shopify/hydrogen';
import {json, redirect} from '@shopify/remix-oxygen';
import {BirlWelcomeGuest} from "~/components/Birl/BirlWelcomeGuest";

export const meta = () => {
  return [{title: 'Birl Welcome'}];
};

export async function loader({request, context}) {
  const {session, storefront} = context


  const customerAccessToken = await session.get('customerAccessToken');
  if (!customerAccessToken?.accessToken) {
    return json({
      session: session,
      storefront: storefront,
      context: context,
      customer: false
    })
  }



    return json({
      session: session,
      storefront: storefront,
      context: context,
      customer: customerAccessToken
    })


}



export default function Wecome() {
  const data = useLoaderData();
  //const StoreName = data.context.env.PUBLIC_STORE_DOMAIN
  let customer = data.customer

  return (
    <div>
      <BirlWelcomeGuest Customer={customer} StoreName={data.context.env.PUBLIC_STORE_NAME} />
    </div>
  );
}
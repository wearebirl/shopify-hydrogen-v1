import {Link, useLoaderData} from '@remix-run/react';
import {Money, Pagination, getPaginationVariables} from '@shopify/hydrogen';
import {json, redirect} from '@shopify/remix-oxygen';
import {BirlWelcomeGuest} from "~/components/Birl/BirlWelcomeGuest";
import {TradeInCategorySelector} from "~/components/Birl/TradeInCategorySelector";
import {BirlTradeinProgress} from "~/components/Birl/BirlTradeinProgress";
import TradeInProgressBar from "~/components/Birl/TradeInProgressBar";
import BirlBanner from "~/components/Birl/BirlBanner";
import {BirlHeading} from "~/components/Birl/BirlHeading";

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

  let customer = data.customer

  return (
    <div>
        <BirlBanner></BirlBanner>
        <BirlHeading headingText={"What are you trading in?"}></BirlHeading>
      <TradeInProgressBar currentStep={0} />
      <TradeInCategorySelector  />
    </div>
  );
}
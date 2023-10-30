import {Link, useLoaderData} from '@remix-run/react';
import {Money, Pagination, getPaginationVariables} from '@shopify/hydrogen';
import {json, redirect} from '@shopify/remix-oxygen';
import {BirlWelcomeGuest} from "~/components/Birl/BirlWelcomeGuest";
import {TradeInCategorySelector} from "~/components/Birl/TradeInCategorySelector";
import {BirlTradeinProgress} from "~/components/Birl/BirlTradeinProgress";
import TradeInProgressBar from "~/components/Birl/TradeInProgressBar";
import BirlBanner from "~/components/Birl/BirlBanner";
import {BirlHeading} from "~/components/Birl/BirlHeading";
import {ConditionModal} from "~/components/Birl/ConditionModal";
import YourItemDetails from "~/components/Birl/YourItemDetails";
import {useState} from "react";

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
    const [itemCondition, setItemCondition] = useState(1)
    const [item, setItem] = useState(1)
    
    const conditions = [
            {
                id: 0,
                name: "New",
                description: "Little to no signs of wear. The item looks and feels almost new",
            },
            {
                id: 1,
                name: "Good",
                description: "Minor signs of wear, but no major flaws like stains or holes.",
            },
            {
                id: 2,
                name: "Poor",
                description: "Visible signs of wear and flaws, minor stains, light pilling, or small holes.",
            },
        ]

    const [selectedCondition, setSelectedCondition] = useState(0);

    function setCustomerChosenCondition(condition) {
        alert(condition)
        setSelectedCondition(condition);
    }

    let customer = data.customer

  return (
    <div>
      <BirlBanner></BirlBanner>
      <BirlHeading headingText={"Item Condition"}></BirlHeading>
      <BirlTradeinProgress step={1}></BirlTradeinProgress>


      <div className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className={"col-span-1"}>
            <div className="w-full text-black text-base font-normal font-['Inter']">Please choose one of the following options that best matches your item. </div>
            <div className="w-[630px] h-[58px] px-5 py-2.5 bg-stone-50 rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                <div className="w-[577px] text-black text-base font-semibold font-['Inter']">The condition of your item does not effect the price we pay, it is to ensure your item reaches the best location for either re-selling or recycling</div>
            </div>
            <ConditionModal></ConditionModal>
            <div className={"mt-[20px] mr-[20px]"}>

                {conditions.map((condition, index) => (
                    <div className={`w-full group flex flex-row mt-[10px] justify-between items-center border border-gray-300 rounded-[10px] hover:border-lime-500 ${selectedCondition === index && ("bg-lime-300 bg-opacity-5") }`}
                         onClick={()=>setCustomerChosenCondition(index)}>
                        <div className={"w-[630px] h-[58px] px-5 py-2.5  rounded-[10px] justify-start items-start gap-2.5 inline-flex"}>
                            <div className={"w-[577px] text-black text-base font-semibold font-['Inter']"}>
                                {condition.name}
                            </div>
                            <div className={"w-[577px] text-black text-base font-semibold font-['Inter']"}>
                                {condition.description}
                            </div>
                        </div>
                    </div>
                    ))}

            </div>

        </div>
        <div className={"col-span-1"}>
            <YourItemDetails item={item} condition={itemCondition}></YourItemDetails>
        </div>


      </div>
    </div>
  );
}
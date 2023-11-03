import {Link, useLoaderData} from '@remix-run/react';
import {json, redirect} from '@shopify/remix-oxygen';
import {BirlTradeinProgress} from "~/components/Birl/BirlTradeinProgress";
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
                name: "Like New",
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

    let customer = data?.customer

    function nextStep() {
        if (selectedCondition !== null) {
            // Contact API to get net step

            return redirect('/birl/trade-in/your-credit', {
                headers: {
                    'Set-Cookie': `itemCondition=${selectedCondition}; item=${item}; Path=/; HttpOnly; SameSite=Lax`,
                },
            })
        }
    }

    return (
    <div>
      <BirlBanner></BirlBanner>
      <BirlHeading headingText={"Item Condition"}></BirlHeading>
      <BirlTradeinProgress step={1}></BirlTradeinProgress>
   <div className={"max-w-7xl mx-auto text-center"}>
      <div className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className={"col-span-1"}>
            <div className="w-full text-black text-base font-normal font-['Inter']">Please choose one of the following options that best matches your item. </div>
            <div className="w-[630px] h-[58px] px-5 py-2.5 bg-stone-50 rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                <div className="w-[577px] text-black text-base font-semibold font-['Inter']">The condition of your item does not effect the price we pay, it is to ensure your item reaches the best location for either re-selling or recycling</div>
            </div>
            <ConditionModal></ConditionModal>
            <div className={"mt-[20px] mr-[20px]"}>

                {conditions.map((condition, index) => (
                    
                        <div className={`w-full group mb-[20px] h-20 p-4  rounded-lg border border-black border-opacity-20 justify-start items-start inline-flex hover:border-lime-500 ${selectedCondition === index && (" bg-lime-300 bg-opacity-5")} `}
                             onClick={()=>setCustomerChosenCondition(index)}>
                            <div className="grow shrink basis-0 h-10 justify-start items-start gap-2 flex">
                                <div className="pt-0.5 justify-start items-start flex">
                                    <div className=" flex">
                                        <div className={`w-4 h-4  pt-[1px] pl-[1px] flex rounded border ${selectedCondition === index ? ("bg-lime-300 border-lime-500 bg-opacity-5") : ("bg-white")}`} >
                                            {selectedCondition === index && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="#2EA141" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                    )}
                                        </div>
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 flex-col justify-start text-left items-start inline-flex">
                                    <div className="self-stretch text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">{condition.name}</div>
                                    <div className="self-stretch text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-snug"> {condition.description}</div>
                                </div>
                            </div>

                        </div>

                    ))}
                <div className={"float-left"} onClick={()=>nextStep()}>
                    <div className={`px-10 h-10  py-2 ${selectedCondition !== null ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                        <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Confirm condition</div>
                    </div>
                </div>
            </div>

        </div>
        <div className={"col-span-1"}>
            <YourItemDetails item={item} condition={itemCondition}></YourItemDetails>
        </div>


      </div>
    </div>
    </div>
  );
}
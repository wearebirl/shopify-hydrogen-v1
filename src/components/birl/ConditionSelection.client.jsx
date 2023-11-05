import {ConditionModal} from "./ConditionModal.client";
import {YourItemDetails} from "./YourItemDetails.client";
import {useState} from "react";



export function ConditionSelection({item, category}){

    if(item) {
        // THis is an item


    } else if (category) {
        // This is a category




    }

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

    function nextStep({response}) {
        if (selectedCondition !== null) {
            // Contact API to get net step


            //Save Return, Details and forward user to the next step

            return window.location.replace('/birl/trade-in/value/123')

        }
    }

    return(
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
                    <button className={"float-left"} onClick={({response})=>nextStep({response})}>
                        <div className={`px-10 h-10  py-2 ${selectedCondition !== null ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                            <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Confirm condition</div>
                        </div>
                    </button>
                </div>

            </div>
            <div className={"col-span-1"}>
                <YourItemDetails item={"item"} condition={selectedCondition}></YourItemDetails>
            </div>

        </div>
    </div>
    )
}
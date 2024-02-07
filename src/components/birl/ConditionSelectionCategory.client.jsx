import {ConditionModal} from "./ConditionModal.client";
import {YourItemDetails} from "./YourItemDetails.client";
import {useEffect, useState} from "react";



export function ConditionSelectionCategory({item, category}){


    const conditions = [
        {
            id: 0,
            grade: "A",
            name: "Like New",
            description: "Little to no signs of wear. The item looks and feels almost new",


        },
        {
            id: 1,
            grade: "B",
            name: "Used - Good",
            description: "Minor signs of wear, but no major flaws like stains or holes.",

        },
        {
            id: 2,
            grade: "C",
            name: "Used - Fair",
            description: "Visible signs of wear and flaws, minor stains, light pilling, or small holes.",

        },
    ]

    const [selectedCondition, setSelectedCondition] = useState(0);
    const [currentOrder, setCurrentOrder] = useState(null);

    function setCustomerChosenCondition(condition) {

        setSelectedCondition(condition);
    }

    function nextStep({response}) {
        if (selectedCondition !== null) {

            let order = JSON.parse(localStorage.getItem('birlOrder'))

            //add to birlBasket in local storage
            localStorage.setItem('birlOrder', JSON.stringify({
                ...order,
                condition: conditions[selectedCondition],
            }));




            return window.location.replace(`/birl/trade-in/value`)

        }
    }

    useEffect(() => {
        setCurrentOrder(JSON.parse(localStorage.getItem('birlOrder')))
    }, [])

    return(
    <div className={"max-w-[1280px] px-[20px] w-full mx-auto text-center text-black"}>
        <div className={"flex sm-max:flex-col"}>
            <div>
                <div className="w-full text-black text-base font-normal font-Inter text-left">Select the item condition below that best describes your item.</div>

                <p className="flex items-center mt-[15px] cursor-pointer">How to choose the right condition &nbsp;
                                    
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="2" />
                    <text x="50" y="70" textAnchor="middle" fontSize="60" fill="black">?</text>
                </svg>

                </p>

                <div className={"mt-[20px] mr-[20px]"}>

                    {conditions.map((condition, index) => (

                        <div key={index} className={`w-full group mb-[20px] h-20 p-4 cursor-pointer rounded-lg border border-black border-opacity-20 justify-start items-start inline-flex hover:border-lime-500 ${selectedCondition === index && (" bg-lime-300 bg-opacity-5")} `}
                             onClick={()=>setCustomerChosenCondition(index)}>
                            <div className="grow shrink basis-0 h-10 justify-start items-start gap-2 flex">
                                <div className="pt-0.5 justify-start items-start flex">
                                    <div className=" flex">
                                        <div className={`w-4 h-4  pt-[1px] pl-[1px] flex rounded border ${selectedCondition === index ? ("bg-lime-300 border-lime-500 bg-opacity-5") : ("bg-white")}`} >
                                            {selectedCondition === index && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="#2EA141" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>

                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="grow shrink basis-0 flex-col justify-start text-left items-start inline-flex">
                                    <div className="self-stretch text-slate-700 text-sm font-semibold font-Inter leading-tight">{condition.name}</div>
                                    <div className="self-stretch text-gray-500 text-sm font-normal font-Inter leading-snug"> {condition.description}</div>
                                </div>
                            </div>

                        </div>

                    ))}
                    <button className={"float-left"} onClick={({response})=>nextStep({response})}>
                        <div className={`px-10 h-10  py-2 ${selectedCondition !== null ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                            <div className="text-white text-base font-semibold font-Inter leading-normal">Confirm condition</div>
                        </div>
                    </button>
                </div>

            </div>
            <div className="sm-max:mt-[20px]">
                <YourItemDetails item={null} category={currentOrder != null ? currentOrder?.category : null} condition={conditions[selectedCondition]}></YourItemDetails>
            </div>

        </div>
    </div>
    )
}
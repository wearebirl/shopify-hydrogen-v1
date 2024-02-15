import {useState, useEffect} from "react";
import {YourItemDetails} from "./YourItemDetails.client";
import { Voucher } from "./Voucher";


function calculatePrice(type, salePrice, value) {

    if (type === "fixed-amount") {
        return value;
    } else {
        // Need to have sold price
        return   (salePrice * value) / 100;
    }
}


export function VoucherSelection(){

    const [selectdVoucher, setSelectedVoucher] = useState(0);

    const [order, setOrder] = useState(null);

    const vouchers = [
        {
            id: 0,
            name: "Normal",
            Title : `£${ Number(order?.category[`Grade${order?.condition?.grade}`])} Instant Credit`,
            thresholdText: "No minimum spend required",
            Amount: Number(order?.category[`Grade${order?.condition?.grade}`])
        },
        {
            id: 1,
            name: "Upsell",
            Title : `£${ Number(order?.category[`Grade${order?.condition?.grade}Upsell`])} Instant Credit`,
            thresholdText: Number(order?.category[`Grade${order?.condition?.grade}Threshold`]) > 0 &&  `Valid on orders over £${Number(order?.category[`Grade${order?.condition?.grade}Threshold`])}`,
            Amount: Number(order?.category[`Grade${order?.condition?.grade}Upsell`])
        }
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let order = JSON.parse(localStorage.getItem('birlOrder'))
            setOrder(order)
        }
    }, [])

    useEffect(() => {
        
        if(order){

            localStorage.setItem('birlOrder', JSON.stringify({
                ...order,
                voucher: vouchers[selectdVoucher]
            }));

            console.log({
                ...order,
                voucher: vouchers[selectdVoucher]
            })
        }


    }, [selectdVoucher])

    function nextStep() {
        if (selectdVoucher !== null) {
            return window.location.replace(`/birl/trade-in/contact-details/`)
        }
    }
    
    return (
        <div className="max-w-[1280px] w-full mx-auto px-[20px]">
            <div className="flex justify-evenly">
                <div className="w-1/2"> 
                    <p className="text-base font-Inter mb-[55px]">Want to earn more credit? Increase your minimum spend to receive more off your order.</p>
                    <div className="flex">
                        <Voucher order={order} type={"Normal"} />
                        <Voucher order={order} type={"Upsell"} />
                    </div>

                    <div className="flex flex-col mt-[55px]">
                            
                        {vouchers.map((voucher, index) => {
                            return (
                                <div key={index} className={`w-full group mb-[20px] h-20 p-4 cursor-pointer rounded-lg border border-black border-opacity-20 justify-start items-start inline-flex hover:border-lime-500 ${selectdVoucher === index && (" bg-lime-300 bg-opacity-5")} `}
                                onClick={()=>setSelectedVoucher(index)}>
                                <div className="grow shrink basis-0 h-10 justify-start items-start gap-2 flex">
                                    <div className="pt-0.5 justify-start items-start flex">
                                        <div className=" flex">
                                            <div className={`w-4 h-4  pt-[1px] pl-[1px] flex rounded border ${selectdVoucher === index ? ("bg-lime-300 border-lime-500 bg-opacity-5") : ("bg-white")}`} >
                                                {selectdVoucher === index && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M10 3L4.5 8.5L2 6" stroke="#2EA141" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start text-left items-start inline-flex">
                                        <div className="self-stretch text-slate-700 text-sm font-semibold font-Inter leading-tight">{voucher?.Title}</div>
                                        <div className="self-stretch text-gray-500 text-sm font-normal font-Inter leading-snug"> {voucher?.thresholdText}</div>
                                    </div>
                                </div>

                        </div>
                            )
                        })}

                    </div>

                    {selectdVoucher != undefined && 
                        <button className="px-10 h-10 py-2 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex text-white font-bold" onClick={()=>nextStep()}>Accept Credit</button>
                    }

                </div>

                <div className="ml-[30px]">
                    <YourItemDetails category={order?.category} condition={order?.condition} price={vouchers[selectdVoucher]?.Amount}></YourItemDetails>
                </div>
            </div>

        </div>
    )
}
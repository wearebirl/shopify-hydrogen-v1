import {useState, useEffect} from "react";
import {YourItemDetails} from "./YourItemDetails.client";


function calculatePrice(type, salePrice, value) {

    if (type === "fixed-amount") {
        return value;
    } else {
        // Need to have sold price
        return   (salePrice * value) / 100;
    }
}


export function VoucherSelection(){
    const [order, setOrder] = useState(null);
    const [selectdVoucher, setSelectdVoucher] = useState(0);
    const [vouchers, setVouchers] = useState([

    ]);




    function setUserSelectedVoucer(voucherSelection) {
        setSelectdVoucher(voucherSelection);
    }


    useEffect(() => {
        // Update the document title using the browser API
        const item = JSON.parse( localStorage.getItem('birlOrder'))
        setOrder(item)

    }, []);

    useEffect(() => {
        // Update the document title using the browser API
        if(order !== null) {

            if (order.item !== null) {
                if (order.condition === 0) {
                    setVouchers([
                        {
                            id: 0,
                            credit: calculatePrice(order.item.GradeAType, order.item.salePrice, order.item.GradeANVA),
                            validUntill:  ExpDate(6), // today+ 6 months
                            minSpend: 0,
                            bg:"colour",
                            fromColour: "lime-900",
                            toColour: "slate-600",
                            baseColour: "lime-500"
                        },
                        {
                            id: 0,
                            credit: calculatePrice(order.item.GradeAType, order.item.salePrice, order.item.GradeANVA),
                            validUntill: ExpDate(),
                            minSpend:  ((order.item.salePrice / 100) * GradeANPVC) * 3,
                            bg:"gradient",
                            baseColour: "lime-500"
                        },
                    ])

                } else if (order.condition === 1) {
                    setVouchers([
                        {
                            id: 0,
                            credit: calculatePrice(order.item.GradeBType, order.item.salePrice, order.item.GradeBNVA),
                            validUntill:  ExpDate(6), // today+ 6 months
                            minSpend: 0,
                            bg:"colour",
                            fromColour: "lime-900",
                            toColour: "slate-600",
                            baseColour: "lime-500"
                        },
                        {
                            id: 0,
                            credit: calculatePrice(order.item.GradeBType, order.item.salePrice, order.item.GradeBNVA),
                            validUntill: ExpDate(),
                            minSpend:  ((order.item.salePrice / 100) * GradeBNPVC) * 3,
                            bg:"gradient",
                            baseColour: "lime-500"
                        },
                    ])
                } else {
                    setVouchers([
                        {
                            id: 0,
                            credit: calculatePrice(order.item.GradeCType, order.item.salePrice, order.item.GradeCNVA),
                            validUntill:  ExpDate(6), // today+ 6 months
                            minSpend: 0,
                            bg:"colour",
                            fromColour: "lime-900",
                            toColour: "slate-600",
                            baseColour: "lime-500"
                        },
                        {
                            id: 0,
                            credit: calculatePrice(order.item.GradeAType, order.item.salePrice, order.item.GradeCNVA),
                            validUntill: ExpDate(),
                            minSpend:  ((order.item.salePrice / 100) * GradeCNPVC) * 3,
                            bg:"gradient",
                            baseColour: "lime-500"
                        },
                    ])
                }

            } else {
                if (order.condition === 0) {
                    setVouchers([
                        {
                            id: 0,
                            credit: order.category[0].GradeA,
                            validUntill:  ExpDate(6), // today+ 6 months
                            minSpend: 0,
                            bg:"colour",
                            fromColour: "lime-900",
                            toColour: "slate-600",
                            baseColour: "lime-500"
                        },
                        {
                            id: 0,
                            credit: order.category[0].GradeAUpsell,
                            validUntill: ExpDate(),
                            minSpend: order.category[0].GradeAThreshold,
                            bg:"gradient",
                            baseColour: "lime-500"
                        },
                    ])

                } else if (order.condition === 1) {
                    setVouchers([
                        {
                            id: 0,
                            credit: order.category[0].GradeB,
                            validUntill: ExpDate(),
                            minSpend: 0,
                            bg:"colour",
                            fromColour: "lime-900",
                            toColour: "slate-600",
                            baseColour: "lime-500"
                        },
                        {
                            id: 0,
                            credit: order.category[0].GradeBUpsell,
                            validUntill: ExpDate(),
                            minSpend: order.category[0].GradeBThreshold,
                            bg:"gradient",
                            baseColour: "lime-500"
                        },
                    ])
                } else {
                    setVouchers([
                        {
                            id: 0,
                            credit: order.category[0].GradeC,
                            validUntill: ExpDate(),
                            minSpend: 0,
                            bg:"colour",
                            fromColour: "lime-900",
                            toColour: "slate-600",
                            baseColour: "lime-500"
                        },
                        {
                            id: 0,
                            credit: order.category[0].GradeCUpsell,
                            validUntill: ExpDate(),
                            minSpend: order.category[0].GradeCThreshold,
                            bg:"gradient",
                            baseColour: "lime-500"
                        },
                    ])
                }

            }
        }

    }, [order]);

    /**
     *
     * Allow future changes to the months to be added this
     * @returns {string}
     * @constructor
     */
    function ExpDate(months = 6){

        // Get the current date
        var currentDate = new Date();

        // Add 5 months to the current date
        currentDate.setMonth(currentDate.getMonth() + months);

        return (currentDate.getUTCMonth() + 1) + "/" + currentDate.getUTCFullYear();

    }

    function nextStep() {
        if (selectdVoucher !== null) {

            localStorage.setItem('birlOrder', JSON.stringify({
                ...order,
                voucher: {
                    ...vouchers[selectdVoucher]
                }
            }))

            // Create voucher in Store

            return window.location.replace(`/birl/trade-in/contact-details/`)
        }else {
            alert("Please select a voucher")
        }
    }

    return (
        <div className={"max-w-7xl mx-auto text-center"}>
            <div className={"grid grid-cols-1 md:grid-cols-2"}>
                <div className={"col-span-1"}>
                    <div className={"bg-lime-900 w-[500px] h-fit"}>



                    </div>
                    <div className="w-full text-left text-black text-base font-normal font-['Inter']">Good news! We have two credit options available for your item, please choose the amount you would like to proceed with:</div>
                    <div className={"flex flex-row mt-[20px] mr-[20px] space-x-3 my-auto"}>
                        {vouchers.map((voucher, index) => (
                            <>
                                <div className={` ${selectdVoucher === index ? "block w-80 h-48" : "hidden md:block w-60 h-36"} my-auto  relative mb-[20px]  rounded-2xl`}  onClick={()=>setUserSelectedVoucer(index)}>
                                    <div className={`${selectdVoucher === index ? "block w-80 h-48" : "hidden md:block w-60 h-36"}  left-0 top-0 absolute ${voucher.bg === "gradient" ? " bg-gradient-to-tr from-gray-900 to-slate-600 " : "bg-lime-500"} rounded-2xl shadow border border-white`} />
                                    <div className="left-[15px] top-[15px] absolute text-white text-base font-semibold font-['Inter']">
                                        £{voucher.credit} Credit
                                    </div>
                                    {voucher.minSpend !== 0 ? (
                                        <div className="left-[15px] top-[106px] absolute text-white text-xs font-semibold font-['Manrope'] leading-tight tracking-wide">Valid on orders over £{voucher.minSpend}</div>
                                    ) : (
                                        <div className="left-[15px] top-[106px] absolute text-white text-xs font-semibold font-['Manrope'] leading-tight tracking-wide">No minimum spend required</div>
                                    )}

                                    <div className="left-[15px] top-[85px] absolute text-white text-xs font-semibold font-['Manrope'] uppercase tracking-wide">DAWN</div>
                                    <div className="left-[118px] top-[87px] absolute text-right text-white text-xs font-semibold font-['Manrope'] tracking-wide">EXP {voucher.validUntill}</div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className={"mt-[20px] mr-[20px]"}>
                        {vouchers.map((voucher, index) => (
                            <>
                                <div className={`w-full group mb-[20px] h-20 p-4  rounded-lg border border-black border-opacity-20 justify-start items-start inline-flex hover:border-lime-500 ${selectdVoucher === index && (" bg-lime-300 bg-opacity-5")} `}
                                     onClick={()=>setUserSelectedVoucer(index)}>
                                    <div className="grow shrink basis-0 h-10 justify-start items-start gap-2 flex">
                                        <div className="pt-0.5 justify-start items-start flex">
                                            <div className=" flex">
                                                <div className={`w-4 h-4  pt-[1px] pl-[1px] flex rounded border ${selectdVoucher === index ? ("bg-lime-300 border-lime-500 bg-opacity-5") : ("bg-white")}`} >
                                                    {selectdVoucher === index && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path d="M10 3L4.5 8.5L2 6" stroke="#2EA141" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>

                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grow shrink basis-0 flex-col justify-start text-left items-start inline-flex">
                                            <div className="self-stretch text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">£{voucher.credit} Instant Credit</div>
                                            <div className="self-stretch text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-snug">
                                                {voucher.minSpend > 0 ? (
                                                    <div className={"text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-snug"}>Minimum spend £{voucher.minSpend} required</div>
                                                ) : (
                                                    <div className={"text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-snug"}>No minimum spend required</div>
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>

                        ))}
                        <div className={"float-left"} onClick={()=>nextStep()}>
                            <div className={`px-10 h-10  py-2 ${selectdVoucher !== null ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                                <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Accept Credit</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={"col-span-1 text-black"}>
                    {order !== null && order.length !== 0 && (
                        <YourItemDetails item={order.item}  category={order.category} condition={order.condition} price={2}></YourItemDetails>

                    )}
                </div>


            </div>
        </div>
            )
}
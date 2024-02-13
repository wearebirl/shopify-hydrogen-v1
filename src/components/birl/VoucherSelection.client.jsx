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

            

                </div>

                <div className="ml-[30px]">
                    <YourItemDetails category={order?.category} condition={order?.condition} price={vouchers[selectdVoucher]?.Amount}></YourItemDetails>
                </div>
            </div>

        </div>
    )
}
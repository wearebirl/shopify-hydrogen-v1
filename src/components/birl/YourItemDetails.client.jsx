import {fetchSync, Image} from "@shopify/hydrogen";
import {Link} from "@shopify/hydrogen";

import welcomeArrow from "../../assets/birl/Arrow-Welcome.svg";


function calculatePrice(type, salePrice, value) {

    if (type === "fixed-amount") {
        return value;
    } else {
        // Need to have sold price
        return   (salePrice * value) / 100;
    }
}



export  function YourItemDetails({category, condition, price}){
    if (true) {
        return (
            <>
                <div className={"w-[max-content] rounded-[20px] border border-gray-300 p-10 sm-max:border-0 sm-max:pl-0"}>
                    <h1 className="text-black text-2xl font-semibold font-Inter leading-loose text-left mb-[20px]">Your item</h1>
                    <div className="flex">
                        <img src={category?.thumbnail} alt="Placeholder" className="w-[185px] h-[185px] rounded-lg"/>
                        <div className="flex flex-col justify-between ml-[40px]">
                            
                            <div>
                                <div className="text-black text-base font-bold font-Inter text-left mb-[5px]">CATEGORY</div>
                                <p className="text-sm text-[#667085] text-left">{category?.CategoryTitle?.split("\\n\\n")[0]}</p>
                            </div>
                            
                            <div>
                                <div className="text-black text-base font-bold font-Inter text-left mb-[5px]">BRAND</div>
                                <p className="text-sm text-[#667085] text-left">ShopBrand</p>
                            </div>

                            <div>
                                <div className="text-black text-base font-bold font-Inter text-left mb-[5px]">CONDITION</div>
                                <p className="text-sm text-[#667085] text-left">{condition?.name}</p>
                            </div>


                        </div>
                    </div>

                    <h1 className="text-black text-2xl font-semibold font-Inter leading-loose text-left mt-[30px]">Your Credit</h1>
                    
                    <h3 className="text-black text-base font-semibold font-Inter leading-loose text-left">Amount</h3>

                    <p className="text-[#667085] text-xl font-semibold font-Inter leading-loose text-left mb-[20px]">
                      £{category && Number(price).toFixed(2)} Store Credit
                    </p>
                    
                </div>
            </>
        )
    }

}
import {Link} from "@shopify/hydrogen";

import birlWhiteLogo from "../../assets/birl/birl-logo-white.png";
import arrowRight from "../../assets/birl/arrow-right.png";


export function ProductWidget ({storeName, style}){

    if(storeName === null){
        storeName = process.env.PUBLIC_STORE_NAME
    }

    // Store Name, General Tradein

    if(style === 1){
        return (
            <Link to={'birl/trade-in'} className={"hover:no-underline"}>
                <div className={"rounded-full bg-[#2EA141] flex w-fit py-[8px] px-[19px] items-center gap-16 w-fit text-white min-w-[330px] hover:no-underline no-underline"}>
                    {/* Birl logg*/}
                    <img src={birlWhiteLogo}/>
                    {/* Message */}
                    <div>Have a {storeName} item you’ve bought from elsewhere <span className={"underline text-semibold"}>Click heres</span></div><img src={arrowRight}/>
                </div>
            </Link>
        )

    }

    // General With no Store Name
    if(style === 2){
        return (
        <Link to={'birl/trade-in'} className={"hover:no-underline"}>
            <div className={"rounded-full bg-[#2EA141] flex w-fit py-[8px] px-[19px] items-center gap-16 w-fit text-white min-w-[330px] hover:no-underline no-underline"}>
                {/* Birl logg*/}
                <img src={birlWhiteLogo}/>
                {/* Message */}
                <div>Have an item you’ve bought from elsewhere <span className={"underline text-semibold"}>Click heres</span></div><img src={arrowRight}/>
            </div>
        </Link>
        )
    }


}

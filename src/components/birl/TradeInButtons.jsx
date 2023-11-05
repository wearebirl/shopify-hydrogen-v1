import {Link} from "@shopify/hydrogen";

export function TradeInButtons({item}){

    let tradeInAllowed = true; //assume all trade-ins are allowed
    // Check if customer is banned from trade-in

    // other logic can be placed here to determine if a customer can trade-in an items this could be based on the item itself or the customer
    //From API


    if(tradeInAllowed) {

        return (


            <Link to={`/birl/trade-in/shop-item/${item}`}>
                <div
                    className={"rounded-full bg-[#2EA141] px-[5px] py-[2px] text-sm text-white hover:underline underline-white"}>
                    Trade-in
                </div>
            </Link>
        )
    } else {
        return null
    }
}
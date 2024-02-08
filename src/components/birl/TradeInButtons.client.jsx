import {fetchSync, Link, Money} from "@shopify/hydrogen";
import {Text, PageHeader, Heading} from '~/components';
import {BirlTradeInButton} from "./birlTradeInButton.client";

export function TradeInButtons({item, fulfillmentStatus}){

    let tradeInAllowed = false; //assume all trade-ins are allowed
    // Check if customer is banned from trade-in
    let tradeinItem = null;

    // other logic can be placed here to determine if a customer can trade-in an items this could be based on the item itself or the customer
    //From API

    let birlProduct = fetchSync(`http://localhost:3001/api/StoreFronts/shopify/getProduct`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sku: item.sku,
            handle: "",
            merchantId: 5,
            merchantApiKey: "TestKey"
        })
    })

    if(item.variant.sku !== ""){
        /**
         * trigger endpint to search by sku
         */
        let birlProduct = fetchSync(`http://localhost:3001/api/StoreFronts/shopify/getProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sku: item.sku,
                handle: "",
                merchantId: 5,
                merchantApiKey: "TestKey"
            })
        })
       if(birlProduct.ok){
           tradeInAllowed = true;
       } else {
           tradeInAllowed = false;
       }

    } else if(item.variant.product.handle !== null && item.variant.product.handle !== "") {

        let birlProduct = fetchSync(`https://staging.wearebirl.com/api/StoreFronts/shopify/getProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                handle: item.variant.product.handle ,
                merchantId: 5,
                sku: "",
                merchantApiKey: "TestKey"
            })
        })
        if (birlProduct.ok) {
            tradeInAllowed = true;
            tradeinItem = birlProduct.json();


        } else {
            tradeInAllowed = false;
        }

    }
    //Hide price being pased to trade-in page
    const EncodedPrice = (item.variant.priceV2.amount*10).toString(16);




    if(tradeInAllowed && fulfillmentStatus === "fulfilled"){

        return (
            <>
            <td id={"birl-item-status"} className="px-3 py-4 text-right align-top sm:align-middle sm:table-cell">
                <Text>
                    Trade-in {tradeInAllowed? "eligible " : "Not eligible"}
                </Text>
            </td>
            <td id={"birl-item-button"} className="px-3 py-4 text-right align-top sm:align-middle sm:table-cell">

                <Link to={`/birl/trade-in/item/${tradeinItem.ProductId}/${EncodedPrice}`}  className={"rounded-full bg-[#2EA141] px-[15px] py-[2px] text-sm text-white hover:underline underline-white"} >
                        Trade-in
                </Link>
            </td>
            </>


        )
    } else {
        return (
            <>
            <td className="px-3 py-4 text-right align-top sm:align-middle sm:table-cell" >
                <Text>
                    Trade-in {tradeInAllowed && fulfillmentStatus !=="fulfilled" ? "Not eligible " : ""}
                </Text>
            </td>
            <td className="px-3 py-4 text-right align-top sm:align-middle sm:table-cell">
                {/* No Tradein avalable */}
            </td>
                </>
        )
    }
}
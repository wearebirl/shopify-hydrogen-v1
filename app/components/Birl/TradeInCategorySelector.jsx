import {ConditionModal} from "~/components/Birl/ConditionModal";
import {Image} from "@shopify/hydrogen";
import {Link} from "@remix-run/react";
import {CategoryCard} from "~/components/Birl/CategoryCard";


export function TradeInCategorySelector(){

    // Get Merchant Categories from API

    // List Categories on page with link to select step

    let categoryList = [
        {
            categoryId: 1,
            categoryName: "Jacket",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 25,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 2,
            categoryName: "Pants",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 15,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 3,
            categoryName: "T-Shirt",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 10,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 4,
            categoryName: "Hoodie",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 15,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 5,
            categoryName: "Jumper",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 15,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 6,
            categoryName: "Shorts",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 10,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 7,
            categoryName: "Bag",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 10,
                tradeInPriceCurrency: "GBP"
            },
        },
        {
            categoryId: 8,
            categoryName: "Vest",
            categoryImage: "http://localhost:3000/Arrow-left.svg",
            categoryTradeInPrice: {
                tradeInPrice: 20,
                tradeInPriceCurrency: "GBP"
            },
        },

    ]

    return(
        <div>

            <div className={"max-w-7xl mx-auto h-[100px]"}>
                <div className={"flex flex-row justify-center"}>
                    <div className={"flex flex-col justify-center"}>
                        <h1 className={"text-3xl font-semibold"}>What are you trading in?</h1>
                    </div>
                </div>
                <div className={""}>

                </div>
                <div className={"w-full border border-[#f4f4f4]] rounded-[10px] p-[10px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                    {categoryList.map(( category) => (

                        <CategoryCard category={category}/>

                    ))}



                </div>
            </div>

        </div>
    )
}
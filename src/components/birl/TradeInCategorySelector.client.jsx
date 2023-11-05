"use client"
import {CategoryCard} from "~/components/Birl/CategoryCard";
import {BirlButton} from "~/components/Birl/BirlButton";
import {useState} from "react";

export  function TradeInCategorySelectorClient(){

const [selectedCategory, setSelectedCategory] = useState(null);

// Get Merchant Categories from API

    // List Categories on page with link to select step this it to be accessed from the API when avaliable

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

            <div className={"max-w-7xl mx-auto text-center"}>
                <div className={"w-full border border-[#f4f4f4]] rounded-[10px] p-[10px] "}>
                    <div className="w-[435px] text-center text-gray-900 text-2xl font-semibold font-['Inter'] leading-[30px] mx-auto">Choose a category that best matches your item</div>
                    <div className={"mx-auto"}>
                        <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-20 mx-auto content-center"}>
                            {categoryList.map(( category) => (
                                <div className={`${selectedCategory === category.categoryId && ("border-1 border-black")}`} onClick={()=>setSelectedCategory(category.categoryId)}>
                                    <CategoryCard category={category} selected={false }/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`w-[435px] text-center text-gray-900 text-2xl font-semibold font-['Inter'] leading-[30px] mx-auto `}>
                            <div className={"mb-10 "}>
                                <BirlButton text={"Confirm Selection"} route={`/birl/trade-in/category/${selectedCategory}`} enabled={true}/>
                            </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
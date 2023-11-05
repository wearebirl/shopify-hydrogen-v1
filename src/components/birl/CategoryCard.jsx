"use client"
export function CategoryCard({category, selectedCategory}){

    /** From API */

    if (!category) {
        category = {
            "categoryName": "Shoes",
            "categoryTradeInPrice": {
                "tradeInPrice": 10,
                "tradeInPriceCurrency": "GBP"
            }
        }
    }

    return(
        <div className={"w-[90%] h-[300px]"}>
            <div className={`relative content-center h-[250px] w[250px] ${selectedCategory && "border border-black"}`}>
                <img src={"https://cdn.shopify.com/static/sample-images/shoes.jpeg?width=250&height=250"} alt={category.categoryName} className={"w-full h-full object-cover"}/>
                <div className={"rounded-tr-[20px] rounded-br-[20px] absolute bg-[#96D610] w-fit px-4 left-0 bottom-[5px] text-white"}>
                    £{category.categoryTradeInPrice.tradeInPrice}
                </div>
                <div>
                    <p className={"text-black text-[14px] font-bold"}>{category.categoryName}</p>
                </div>
            </div>
        </div>
    )
}
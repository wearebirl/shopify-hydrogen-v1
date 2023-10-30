


export function CategoryCard({category}){

    return(
        <div className={"w-[90%] h-[300px]"}>
            <div className={"relative content-center h-[250px] w[250px] "}>
                <img src={"https://cdn.shopify.com/static/sample-images/shoes.jpeg?width=250&height=250"} alt={"category"} className={"w-full h-full object-cover"}/>
                <div className={"rounded-tr-[20px] rounded-br-[20px] absolute bg-[#96D610] w-fit px-4 left-0 bottom-[5px] text-white"}>
                   £{category.categoryTradeInPrice.tradeInPrice}
                </div>
                <div>
                    <p className={"text-[#000000] text-[14px] font-bold"}>{category.categoryName}</p>
                </div>
            </div>
        </div>
    )
}
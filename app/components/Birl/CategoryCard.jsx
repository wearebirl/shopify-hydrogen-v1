


export function CategoryCard({category}){

    return(
        <div className={"w-[138px] h-[200px]"}>
            <div className={"relative  w-[138px] h-[175px] bg-[#F2F2F2] m-[20px]"}>
                <img src={"https://picsum.photos/200/300"} alt={"category"} className={"w-full h-full object-cover"}/>
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
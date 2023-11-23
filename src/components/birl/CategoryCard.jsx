
export function CategoryCard({category, selectedCategory}){



    return(
        <div className={"w-[90%] h-[300px] bg-white"}>
            <div className={`relative content-center h-[250px] w[250px] ${selectedCategory && "border border-black"}`}>
                <img src={category.thumbnail} alt={category.categories.CategoryTitle} className={"w-full h-full object-cover"}/>
                <div className={"rounded-tr-[20px] rounded-br-[20px] absolute bg-[#96D610] w-fit px-4 left-0 bottom-[5px] text-white"}>
                    £{category.GradeA}
                </div>
                <div>
                    <p className={"text-black text-[14px] font-bold"}>{category.categories.CategoryTitle}</p>
                </div>

            </div>
        </div>
    )
}

export function CategoryCard({category, selectedCategory}){
    return(
        <button className={"max-w-[135px] min-w-[135px] w-full cursor-pointer outline-none"}>

            <div className={`relative content-center h-[max-content] max-w-[135px] ${selectedCategory && "border border-2  border-black"}`}>
                <img src={category.thumbnail} alt={category.categories?.CategoryTitle }  className={"max-w-[135px] max-h-[128px] rounded-t-[5px] w-full h-full object-cover"}/>
                <div class="bg-[#96D610] w-full rounded-b-[5px] font-Inter font-bold text-white text-sm">
                    <span>GET £{category.GradeA}</span>
                </div>

            </div>

        </button>
    )
}

export function CategoryCard({category, selected}){
    return(
        <button className={"max-w-[135px] min-w-[135px] mt-[15px] w-full cursor-pointer outline-none"}>

            <div className={`relative content-center h-[max-content] max-w-[135px] ${category == selected ? "border-2 rounded-[5px] border-black" : "border-2 rounded-[5px] border-white"}`}>
                <img src={category?.thumbnail} alt={category.categories?.CategoryTitle }  className={`max-w-[135px] max-h-[128px] rounded-t-[5px] w-full h-full object-cover`}/>
                <div className="bg-[#96D610] w-full rounded-b-[5px] font-Inter font-bold text-white text-sm">
                    <span>GET £{category?.GradeA}</span>
                </div>
            </div>

            <p className={`font-Inter text-sm mt-[10px] ${category == selected && "font-bold"}`}>{category?.CategoryTitle.split("\\n\\n")[0]}</p>

        </button>
    )
}
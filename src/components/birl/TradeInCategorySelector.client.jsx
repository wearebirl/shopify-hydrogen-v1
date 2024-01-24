import {CategoryCard} from "~/components/Birl/CategoryCard";
import {BirlButton} from "~/components/Birl/BirlButton";
import {useState} from "react";
import {fetchSync} from "@shopify/hydrogen";

export function TradeInCategorySelector({cats}){

const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedItem, setSelectedItem] = useState(null);
const [error, setError] = useState(null);

    function nextStep(){


      //  let orderId = Math.random().toString(36).substr(2, 9) +Date.now().toString(36).substr(4, 9);

        if(selectedCategory !== null){


            try{


            localStorage.setItem("birlOrder", JSON.stringify(
                {
                    orderid: 0,
                    category: selectedCategory,
                    item: null
                }))
            return window.location.replace(`/birl/trade-in/category/${selectedCategory.MerchantCategoryID}`)

          } catch (e) {

              setError("Something went wrong, please try again later")
          }

          } else {

            setError("Please select a category")
        }
    }


    return(
        <div>

            <div className={"max-w-7xl mx-auto text-center"}>
                <div className={"w-full border border-[#f4f4f4]] rounded-[10px] p-[10px] "}>
                    <div className="w-[435px] text-center text-gray-900 text-2xl font-semibold font-['Inter'] leading-[30px] mx-auto">Choose a category that best matches your item</div>
                    <div className={"mx-auto"}>
                        <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-20 mx-auto content-center"}>
                            {cats.length !== 0 &&
                                <>
                                    {cats.map(( category, index) => (
                                        <div className={`${selectedCategory?.MerchantCategoryID === category.MerchantCategoryID && (" border-1 border-black ")}`} onClick={()=>setSelectedCategory(category)}>
                                            <CategoryCard category={category} selected={false}/>

                                        </div>
                                    ))}
                                </>
                            }

                        </div>
                    </div>
                    <div className={`w-[435px] text-center text-gray-900 text-2xl font-semibold font-['Inter'] leading-[30px] mx-auto `}>

                                <button className="max-w-[400px] h-[94px] px-[25px] min-w-[300px] pt-5 pb-[30px] bg-white rounded-bl-xl rounded-br-xl justify-start items-start gap-2.5 inline-flex"
                                        onClick={()=> nextStep()}
                                >
                                    <div className="grow shrink basis-0 h-11 rounded-lg justify-start items-start flex">
                                        <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-black rounded-lg shadow border border-black justify-center items-center gap-2 flex">
                                            <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Confirm Selection</div>
                                        </div>
                                    </div>
                                </button>
                                                    </div>
                </div>

            </div>

        </div>
    )
}
import {CategoryCard} from "./CategoryCard";
import {BirlButton} from "~/components/Birl/BirlButton";
import {useEffect, useState} from "react";
import {fetchSync} from "@shopify/hydrogen";


export function TradeInCategorySelector({cats, shop}){

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [error, setError] = useState(null);

    function nextStep(){


      //  let orderId = Math.random().toString(36).substr(2, 9) +Date.now().toString(36).substr(4, 9);

        if(selectedCategory !== null){
            try{
                localStorage.setItem("birlOrder", JSON.stringify({orderid: 0, category: selectedCategory, item: null}))

                return window.location.replace(`/birl/trade-in/category/${selectedCategory.CategoryId}`)
            } catch (e) {
                setError("Something went wrong, please try again later")
            }

          } else {

            setError("Please select a category")
        }
    }

    useEffect(() => {
        if(selectedCategory !== null){
            localStorage.setItem("birlOrder", JSON.stringify({orderid: 0, category: selectedCategory, item: null}))
        }
    }, [selectedCategory])

    return(
        <div>

            <div className={"max-w-[1280px] w-full px-[20px] mx-auto text-center"}>
                <div className={"w-full border border-[#f4f4f4]] rounded-[10px] p-[10px] "}>
                    <div className="my-[35px]">
                        <h1 className="w-full text-center text-gray-900 text-2xl font-semibold leading-[30px] mx-auto font-Inter">Choose your Lavenham item category.</h1>
                        <p className="text-sm text-[#b1b1b1] mt-[10px] font-Inter">
                            Please use this portal to trade-in Lavenham items only.
                        </p>
                    </div>

                    <div className={"mx-auto"}>
                        <div className={"flex flex-wrap justify-evenly max-w-[1280px] w-[100%]  bg-white px-[103px] py-[37px]"}>
                        { cats.length !== 0 &&
                        <>
                            {cats.map((category, index) => (
                                <div key={index} onClick={() => setSelectedCategory(category)}>
                                    <CategoryCard category={category} selected={selectedCategory}/>
                                </div>
                            ))}
                        </>
                    }


                        </div>
                    </div>
                    <div className={selectedCategory != null ? `w-[435px] text-center text-gray-900 text-2xl font-semibold font-['Inter'] leading-[30px] mx-auto ` : 'hidden'}>

                        <button className="max-w-[400px] h-[94px] px-[25px] min-w-[300px] pt-5 pb-[30px] bg-white rounded-bl-xl rounded-br-xl justify-start items-start gap-2.5 inline-flex"
                                onClick={()=> nextStep()}
                        >
                            <div className="grow shrink basis-0 h-11 rounded-lg justify-start items-start flex">
                                <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-black rounded-lg shadow border border-black justify-center items-center gap-2 flex">
                                    <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Trade-in item</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

// const SHOP_QUERY = gql`
//   query ShopInfo {
//     shop {
//       name
//       description
//     }
//   }
// `;
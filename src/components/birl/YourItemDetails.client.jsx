import {fetchSync, Image} from "@shopify/hydrogen";
import {Link} from "@shopify/hydrogen";

import welcomeArrow from "../../assets/birl/Arrow-Welcome.svg";


function calculatePrice(type, salePrice, value) {

    if (type === "fixed-amount") {
        return value;
    } else {
        // Need to have sold price
        return   (salePrice * value) / 100;
    }
}



export  function YourItemDetails({item, category, condition, price}){

    // Get Item from Shop by Item ID
    let userItem = null;

    // get data from api projects

    const parhershipData = fetchSync('http://localhost:3000/api/birl/partners/getPartnership', {
        preload: true,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "category": category,
            "item": item
        })
    }).json();

    //alert(JSON.stringify(parhershipData))

    if(item !== null && category === null){

        // Calculate offer prices
        let salePrice = price

         userItem = {
            id: item.ProductId,
            name: item.ProductName,
            description: "",
            catgory: "",
            brand: "ShopBrand",
            priceCondition:
                [
                    {
                        id: 0,
                        condition: "Like New",
                        price: calculatePrice(item.GradeAType, salePrice , item.GradeANVA),
                        upsell: calculatePrice(item.GradeAType, salePrice , item.GradeAUNVA),
                        carbon: 0,
                    },
                    {
                        id: 1,
                        condition: "Good",
                        price: calculatePrice(item.GradeBType, salePrice , item.GradeBNVA),
                        upsell: calculatePrice(item.GradeBType, salePrice , item.GradeBUNVA),
                        carbon: 0,
                    },
                    {
                        id: 2,
                        condition: "Fair",
                        price: calculatePrice(item.GradeCType, salePrice , item.GradeCNVA),
                        upsell: calculatePrice(item.GradeCType, salePrice , item.GradeCUNVA),
                        carbon: 0,
                    },
                ],
            image: "category[0].thumbnail",
            project: "category[0].projectSite",
            statement: "category[0].charityStatement"
        }


    } else {

         userItem = {
            id: 1,
            name: category[0].categories.CategoryTitle,
            description: category[0].categories.Description,
            catgory: category[0].categories.CategoryTitle,
            brand: "ShopBrand",
            priceCondition:
                [
                    {
                        id: 0,
                        condition: "Like New",
                        price: category[0].GradeA,
                        upsell: category[0].GradeAUpsell,
                        carbon: 0,
                    },
                    {
                        id: 1,
                        condition: "Good",
                        price: category[0].GradeB,
                        upsell: category[0].GradeBUpsell,
                        carbon: 0,
                    },
                    {
                        id: 2,
                        condition: "Fair",
                        price: category[0].GradeC,
                        upsell: category[0].GradeCUpsell,
                        carbon: 0,
                    },
                ],
            image: category[0].thumbnail,
            project: category[0].projectSite,
            statement: category[0].charityStatement
        }
    }

    if (true) {
        return (
            <>


            <div className={"w-full rounded-[20px] border border-gray-300 p-[20px]"}>
                <div className="w-96 text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Your item</div>
                <div className="grid grid-cols-2">
                    <div className={"w-1/3"}>
                        <img className={"w-full rounded-[10px]"} src={userItem.image} alt={userItem.name}/>
                    </div>
                    <div className={"w-2/3"}>
                        <div className="text-black text-base font-semibold font-['Inter'] leading-normal">CATEGORY</div>
                        <div
                            className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">{userItem.name}</div>
                        <div className="text-black text-base font-semibold font-['Inter'] leading-normal">BRAND</div>
                        <div
                            className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">{userItem.brand}</div>
                        <div className="text-black text-base font-semibold font-['Inter'] leading-normal">CONDITION
                        </div>
                        <div
                            className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">{userItem.priceCondition[condition].condition}</div>
                    </div>

                </div>
                <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Your Credit</div>
                <div className="grid grid-cols-2">
                    <div className={"w-1/2"}>
                        <div className={"w-full"}>
                            <div
                                className="w-full text-black text-base font-semibold font-['Inter'] leading-normal">AMOUNT
                            </div>
                            <div
                                className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">£{userItem.priceCondition[condition].price} DAWN
                                Store credit*
                            </div>
                            {userItem.priceCondition[condition].carbon >= 1 &&
                                <>
                                    <div
                                        className="w-full text-black text-base font-semibold font-['Inter'] leading-normal">CARBON
                                        CAPTURE
                                    </div>
                                    <div
                                        className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">{userItem.priceCondition[condition].carbon}kg
                                        of CO2
                                    </div>
                                </>


                            }
                        </div>
                    </div>
                    <div className={"w-1/2"}>
                        <div className={"w-fit"}>
                            <div className="w-80 h-44 pt-11 justify-center items-center inline-flex">
                                <div
                                    className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                    <div className="w-80 h-32 relative">
                                        <div className="w-80 h-32 left-0 top-0 absolute bg-white rounded-xl border border-black border-opacity-20 md:border-0 md:border-none md:border-white"/>
                                        {parhershipData.length > 0 &&
                                        <div className="w-72 h-20 left-[20px] top-[20px] absolute">
                                            <img className="w-20 h-20 left-[210px] top-0 absolute"
                                                 src="https://via.placeholder.com/85x86"/>
                                            <div className="w-44 h-20 left-0 top-[1px] absolute">
                                                <div
                                                    className="w-full left-0 top-0 absolute text-black text-base font-semibold font-['Proxima Nova'] leading-normal">CARBON OFFSETTING
                                                </div>
                                                <div
                                                    className="w-full left-0 top-[24px] absolute text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-normal">Partnered
                                                    with VARIABLE
                                                </div>
                                                <div className="w-full h-5 left-0 top-[64px] absolute">
                                                    <a href={""} className="w-full left-0 top-0 absolute text-black text-sm font-semibold font-['Proxima Nova'] underline leading-tight">
                                                        What is Make it Wild?
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


                </>
        )
    } else {
        return null
    }

}
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
    let categoryId = 1
    // get data from api projects

    const partnershipData = fetchSync(`https://staging.wearebirl.com/api/Offsetting/get/${categoryId}`, {
        preload: true,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
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
            name: category.CategoryTitle,
            description: category.Description,
            catgory: category.CategoryTitle,
            brand: "ShopBrand",
            priceCondition:
                [
                    {
                        id: 0,
                        condition: "Like New",
                        price: category.GradeA,
                        upsell: category.GradeAUpsell,
                        carbon: 0,
                    },
                    {
                        id: 1,
                        condition: "Good",
                        price: category.GradeB,
                        upsell: category.GradeBUpsell,
                        carbon: 0,
                    },
                    {
                        id: 2,
                        condition: "Fair",
                        price: category.GradeC,
                        upsell: category.GradeCUpsell,
                        carbon: 0,
                    },
                ],
            image: category.thumbnail,
            project: category.projectSite,
            statement: category.charityStatement
        }
    }

    if (true) {
        return (
            console.log(userItem),
            <>
                <div className={"w-[max-content] rounded-[20px] border border-gray-300 p-10"}>
                    <h1 className="text-black text-2xl font-semibold font-Inter leading-loose text-left mb-[20px]">Your item</h1>
                    <div className="flex">
                        <img src="https://via.placeholder.com/185" alt="Placeholder" className="w-[185px] h-[185px] rounded-lg"/>
                        <div className="flex flex-col justify-between ml-[40px]">
                            
                            <div>
                                <div className="text-black text-base font-bold font-Inter text-left mb-[5px]">CATEGORY</div>
                                <p className="text-sm text-[#667085] text-left">Shirts</p>
                            </div>
                            
                            <div>
                                <div className="text-black text-base font-bold font-Inter text-left mb-[5px]">BRAND</div>
                                <p className="text-sm text-[#667085] text-left">ShopBrand</p>
                            </div>

                            <div>
                                <div className="text-black text-base font-bold font-Inter text-left mb-[5px]">CONDITION</div>
                                <p className="text-sm text-[#667085] text-left">{userItem.priceCondition[condition].condition}</p>
                            </div>


                        </div>
                    </div>

                    <h1 className="text-black text-2xl font-semibold font-Inter leading-loose text-left mt-[30px]">Your Credit</h1>
                    
                    <h3 className="text-black text-base font-semibold font-Inter leading-loose text-left">Amount</h3>

                    <p className="text-black text-xl font-semibold font-Inter leading-loose text-left mb-[20px]">
                        Not Selected
                    </p>
                    
                </div>
            </>
        )
    }

}
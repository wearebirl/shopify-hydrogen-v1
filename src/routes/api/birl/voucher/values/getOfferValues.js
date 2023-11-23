export async function api() {

    // Get Item from Shop by Item ID
    let userItem = null;

    try {
       // Get the Product Type from body of the  call


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




        return data;
    } catch (error) {
        throw error;
    }

}

function calculatePrice(type, salePrice, value) {

    if (type === "fixed-amount") {
        return value;
    } else {
        // Need to have sold price
        return   (salePrice * value) / 100;
    }
}

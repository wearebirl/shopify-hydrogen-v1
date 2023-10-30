import {Image} from "@shopify/hydrogen";
import {Link} from "@remix-run/react";


export default function YourItemDetails({item, condition}){

    // Get Item from Shop by Item ID

    let userItem = {
        id: 1,
        name: "Item Name",
        description: "Item Description",
        catgory: "Item Category",
        brand: "Item Brand",
        priceCondition:
            [
                {
                    id: 0,
                    condition: "like New",
                    price: 20,
                    carbon: 0.5,
                },
                {
                    id: 1,
                    condition: "Good",
                    price: 15,
                    carbon: 0.7,
                },
                {
                    id: 2,
                    condition: "Fair",
                    price: 10,
                    carbon: 0.9,
                },
            ],
        image: "https://images.unsplash.com/photo-1621574531327-8b2b2b5b2b0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    }

    return (

        <div className={"w-full rounded-[20px] border border-gray-300 p-[20px]"}>
            <div className="w-96 text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Your item</div>
            <div className="grid grid-cols-2">
                <div className={"w-1/3"}>
                    Image
                </div>
                <div className={"w-2/3"}>
                    <div className="text-black text-base font-semibold font-['Inter'] leading-normal">CATEGORY</div>
                    <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">Bag/Backpack</div>
                    <div className="text-black text-base font-semibold font-['Inter'] leading-normal">BRAND</div>
                    <div className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">Nike</div>
                    <div className="text-black text-base font-semibold font-['Inter'] leading-normal">CONDITION</div>
                    <div className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">{userItem.priceCondition[condition].condition}</div>
                </div>

            </div>
            <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">Your Credit</div>
            <div className="grid grid-cols-2">
                <div className={"w-1/2"}>
                    <div className={"w-full"}>
                        <div className="w-full text-black text-base font-semibold font-['Inter'] leading-normal">AMOUNT</div>
                        <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">£{userItem.priceCondition[condition].price} DAWN Store credit*</div>
                        <div className="w-full text-black text-base font-semibold font-['Inter'] leading-normal">CARBON CAPTURE</div>
                        <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">{userItem.priceCondition[condition].carbon}kg of CO2</div>
                    </div>
                </div>
                <div className={"w-1/2"}>
                        <div className={"w-fit"}>
                            <Link to={"/birl/about"}>
                            <div className={"flex flex-row w-full mb-0 content-baseline mt-auto"  }>
                                <span className={"font-normal"}>See our carbon capture projects</span>
                                <Image loading="eager" src="http://localhost:3000/Arrow-Welcome.svg"  className="arrow-welcome" width="11" height="8"/>
                            </div>
                            </Link>
                        </div>

                </div>
            </div>

        </div>
    )

}
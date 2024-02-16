import {YourItemDetails} from "./YourItemDetails.client";
import {fetchSync, Link} from "@shopify/hydrogen";
import {Image} from "@shopify/hydrogen";
import {useEffect, useState} from "react";
import DonateSVG from "../../assets/birl/Donate.svg"


export function ReviewAccept({customer}){

        // Contact API for stored Trade In details to populate this page
        let accepted = false
        const [order, setOrder] = useState(null);
        const [error, setError] = useState({
            "status": null,
            "message": ""
        })


    useEffect(() => {
        // Update the document title using the browser API

        const item = JSON.parse( localStorage.getItem('birlOrder'))
        setOrder(item)

    }, []);

    function saveOrder() {

        if(order){

            const data = {
                "order": {
                    "customer": {
                        "fullName": order.customer.fullName,
                        "phoneNumber": order.customer.phoneNumber,
                        "email": order.customer.email,
                        "address": order.customer.address,
                        "city": order.customer.city,
                        "county": order.customer.county,
                        "postcode": order.customer.postcode
                    },
                    "item": JSON.stringify(order.item),
                    "category": JSON.stringify(order.category),
                    "status": "accepted",
                    "voucher": JSON.stringify(order.voucher)
                },
                "merchantId": 5,
                "merchantApiKey": "TestKey"
            }

            console.log(JSON.stringify(data))

            try {
                const responce = fetchSync(`http://localhost:3001/api/StoreFronts/shopify/createOrder`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        order: {
                            customer: {
                                fullName: order.customer.fullName,
                                phoneNumber: order.customer.phoneNumber,
                                email: order.customer.email,
                                address: order.customer.address,
                                city: order.customer.city,
                                county: order.customer.county,
                                postcode: order.customer.postcode
                            },
                            item: JSON.stringify(order.item),
                            category: JSON.stringify(order.category),
                            status: "accepted",
                            voucher: JSON.stringify(order.voucher)
                        },
                        merchantId: 5,
                        merchantApiKey: "TestKey"
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        accepted = true
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        accepted = false
                    });


            } catch (e) {
                alert("There was an error saving your order, please try again" + JSON.stringify(e) + " data: " + JSON.stringify(data))
                console.log(JSON.stringify(data))
                accepted = false
            }
        } else {
            accepted = false
        }

        return accepted


    }

    function nextStep() {

        
        let data = fetchSync(`https://dashboard.wearebirl.com/api/Services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CustomerId": Number(customer.id.split("gid://shopify/Customer/")[1]), // This is the customer ID from Shopify
                "CategoryId": order.category.CategoryId,
                "CustomerEmail": order.customer.email,
                "CustomerName": order.customer.fullName,
                "Grade": order.condition.name,
                "Shop" : "birl-demo.myshopify.com",
                "contact" : {
                    "address": order.customer.address,
                    "city": order.customer.city,
                    "county": order.customer.county,
                    "email": order.customer.email,
                    "fullName": order.customer.fullName,
                    "phoneNumber": order.customer.phoneNumber,
                    "postcode": order.customer.postcode
                },
                "voucherType": order.voucher.name,
            })
        }).json();


        console.log(data)
            
    
    }

    return(

        <div className="max-w-[1280px] w-full mx-auto px-[20px]">
            <div className="flex justify-evenly">
                <div className="w-1/2"> 

                    <div className="bg-white px-[40px] py-[25px] border rounded-[12px]">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-black text-2xl font-semibold font-Inter leading-loose text-left mb-[20px]">Contact details</h1>
                            <Link to={"/birl/trade-in/contact-details"} className="text-black text-base font-semibold font-Inter leading-loose text-right mb-[20px] underline underline-offset-2">Edit details</Link>
                        </div>

                        <div className="flex flex-col text-[#667085]">

                            <p className="text-base font-normal font-Inter leading-6 text-left mb-[5px]">{order?.customer?.fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}</p>
                            <p className="text-base font-normal font-Inter leading-6 text-left mb-[5px]">{order?.customer?.email}</p>
                            <p className="text-base font-normal font-Inter leading-6 text-left mb-[5px]">+44 (0) {order?.customer?.phoneNumber}</p>
                            <p className="text-base font-normal font-Inter leading-6 text-left mb-[5px]">{order?.customer?.address}</p>
                            <p className="text-base font-normal font-Inter leading-6 text-left mb-[5px]">{order?.customer?.city}, {order?.customer?.postcode}</p>

                        </div>

                    </div>

                    <div className="flex flex-row mt-[20px] px-[40px] py-[25px] border rounded-[12px] items-center">

                        <div className="text-[#667085]">
                            <h1 className="text-black text-2xl font-semibold font-Inter leading-loose text-left mb-[20px]">Go one step further</h1>

                            <p className="text-sm font-normal font-Inter leading-6 text-left mb-[5px]">Wardrobe looking a bit full?</p>

                            <p className="text-sm font-normal font-Inter leading-6 text-left mb-[5px]">Birl can help you de-clutter by accepting items you no longer use.</p>

                            <p className="text-sm font-normal font-Inter leading-6 text-left mb-[5px]">If you want to donate any clothing, including from other brands, please add it to your trade-in. Birl commits to a zero-to-landfill guarantee.</p>

                            <p className="text-sm font-normal font-Inter leading-6 text-left mb-[5px] font-extrabold"> *Maximum additional 5kg per parcel (approx. 3 items).</p>
                        </div>

                        <Image src={DonateSVG} alt="Welcome Arrow" width={100} height={100} className="w-[100px] h-[100px] ml-[40px]" />

                    </div>

                    <button className={"float-left my-[20px]"} onClick={({response})=>nextStep({response})}>
                        <div className={`px-10 h-10  py-2 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex `}>
                            <div className="text-white text-base font-semibold font-Inter leading-normal">Get my credit</div>
                        </div>
                    </button>

                </div>

                <div className="ml-[30px]">
                    <YourItemDetails category={order?.category} condition={order?.condition} price={order?.voucher?.Amount}></YourItemDetails>
                </div>
            </div>
        </div>

    )

    }

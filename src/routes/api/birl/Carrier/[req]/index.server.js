

export default function api(_request, _response) {

    const endPoints = "https://dashboard.wearebirl.com/api/Services";
    const methodPost = "POST";

    //console.log(JSON.parse(prarms));
    console.log(JSON.stringify(_request));
    /**
    try {
        const response = await fetch('https://dashboard.wearebirl.com/api/Services',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "Handle": "lavenham-raydon-jacket-suffolk-navy",
                    "OrderId": "5349865685067",
                    "CustomerId": "6630886375499",
                    "CustomerEmail": "chris@uncover.team",
                    "CustomerName": "Chris Uncover",
                    "Shop": "birl-demo.myshopify.com",
                    "CategoryId": "1",
                    "Grade": "Like New",
                    "voucherType": "Normal",
                    "contact": {
                        "fullName": "Chris Haig",
                        "phoneNumber": "7894561230",
                        "email": "chris@uncover.team",
                        "address": "9 Newton Pl",
                        "city": "Glasgow",
                        "postcode": "G3 7PR",
                        "county": "Lanarkshire"
                    }
                })
            });


        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
        */

}
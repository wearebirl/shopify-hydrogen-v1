export async function api({params}) {

    console.log(JSON.stringify(params))

    try {
        const response = await fetch('http://localhost:3001/api/StoreFronts/shopify/startOrder',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "merchantId": 2,
                    "merchantApiKey": "TestKey",
                    "OrderId": 1//_request.body.order.OrderId,
                })
            });


        const data = await response.json();
        console.log(data)
        return JSON.stringify(data);

    } catch (error) {
        console.log(error);
    }

}
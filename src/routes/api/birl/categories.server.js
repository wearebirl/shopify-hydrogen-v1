

export async function api() {

    try {
        const response = await fetch('http://localhost:3001/api/StoreFronts/shopify/categories',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "merchantId": 5,
                    "merchantApiKey": "TestKey",
                })
            });


        const data = await response.json();

        return data;
    } catch (error) {

        console.log(error);
        return []
    }

}
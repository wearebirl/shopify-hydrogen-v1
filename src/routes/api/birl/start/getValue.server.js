

export async function api() {

    try {
        const response = await fetch('http://localhost:3001/api/StoreFronts/shopify/categories',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "merchantId": 2,
                    "merchantApiKey": "TestKey",
                    "categoryId": 1,
                })
            });


        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }

}
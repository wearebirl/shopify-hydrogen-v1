export async function api(props) {



    try {
        const response = await fetch('http://localhost:3001/api/partnerships/getPartnership',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "merchantId": 5,
                    "merchantApiKey": "TestKey",
                    "categoryid": 1 | null,

                })
            });

        const data = await response.json();

        if(data.length === 0){
            return [
                {
                    id: 1,
                    name: 'No hay convenios disponibles',
                    image: 'https://www.eltiempo.com/files/image_640_428/uploads/2019/08/22/5d5e9b3b9e3e3.jpeg',
                    link: 'https://partherlink.com',
                }
            ]

        }
        console.log(JSON.stringify(props));
        return data;
    } catch (error) {
        return []
        console.log(error);
    }

}
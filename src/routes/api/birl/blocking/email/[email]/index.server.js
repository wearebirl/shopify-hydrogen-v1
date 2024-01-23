
import {fetchSync} from '@shopify/hydrogen';

export default function api(_request, _response) {
    /*
    Use fetchSync when making a simple fetch call
    fetchSync can be used in both server and client components
    */
    let email = _request.params.email;

    const {results} = fetchSync('http://localhost:3001/api/StoreFronts/shopify/blockedUsers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "merchantId": 5,
            "merchantApiKey": "TestKey",
            "email": email
        }),

        preload: false, // Defaults to true. https://shopify.dev/custom-storefronts/hydrogen/querying/preloaded-queries
    }).json();

    const {first, last} = results[0].name;

    return JSON.stringify({name: `${first} ${last}`})
}


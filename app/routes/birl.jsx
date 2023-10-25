import {Form, useLoaderData, useRouteError} from '@remix-run/react';
import {type LoaderArgs, json} from '@shopify/remix-oxygen';

export async function loader({context}: LoaderArgs) {
    if (await context.customer.isLoggedIn()) {
        const user = await context.customer.query(`
      {
        customer {
          firstName
          lastName
        }
      }
      `);

        return json({
            user,
        });
    }
    return json({user: null});
}

export function ErrorBoundary() {
    const error = useRouteError() as Error;
    return (
        <>
            <h2>
                <b>Error loading the user:</b>
            </h2>
            <p>{error.message}</p>

            <Form method="post" action="/logout" style={{marginTop: 24}}>
                <button>Logout</button>
            </Form>
        </>
    );
}

export default function () {
    const {user} = useLoaderData();

    return (
        <div style={{marginTop: 24}}>
            {user ? (
                <>
                  <BirlWelcome isLoggedIn={user}/>
                </>
            ) : null}
            {!user ? (
                <BirlWelcomeGuest/>
            ) : null}
        </div>
    );
}
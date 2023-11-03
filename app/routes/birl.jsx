import {Form, NavLink, Outlet, useLoaderData} from '@remix-run/react';
import {json, redirect} from '@shopify/remix-oxygen';

export function shouldRevalidate() {
    return true;
}

export async function loader({request, context}) {
    const {session, storefront} = context;
    const {pathname} = new URL(request.url);
    const customerAccessToken = await session.get('customerAccessToken');
    const isLoggedIn = !!customerAccessToken?.accessToken;
    const isBirlHome = pathname === '/birl' || pathname === '/birl/';
    const isPrivateRoute =
        /^\/birl\/(orders|orders\/.*)$/.test(
            pathname,
        );

    if (!isLoggedIn) {
        if (isPrivateRoute || isBirlHome) {
            session.unset('customerAccessToken');
            return redirect('/birl/welcome', {
                headers: {
                    'Set-Cookie': await session.commit(),
                },
            });
        } else {
            // public subroute such as /account/login...
            return json({
                isLoggedIn: false,
                isAccountHome: isBirlHome,
                isPrivateRoute,
                customer: null,
            });
        }
    } else {
        // loggedIn, default redirect to the orders page
        if (isBirlHome) {
            return redirect('/birl/welcome');
        }
    }

    try {
        const {customer} = await storefront.query(CUSTOMER_QUERY, {
            variables: {
                customerAccessToken: customerAccessToken.accessToken,
                country: storefront.i18n.country,
                language: storefront.i18n.language,
            },
            cache: storefront.CacheNone(),
        });

        if (!customer) {
            throw new Error('Customer not found');
        }

        return json(
            {isLoggedIn, isPrivateRoute, isAccountHome: isBirlHome, customer},
            {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                },
            },
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('There was a problem loading account', error);
        session.unset('customerAccessToken');
        return redirect('/account/login', {
            headers: {
                'Set-Cookie': await session.commit(),
            },
        });
    }
}

export default function Acccount() {
    const {customer, isPrivateRoute, isAccountHome} = useLoaderData();

    if (!isPrivateRoute && !isAccountHome) {
        return <Outlet context={{customer}} />;
    }

    return (
        <AccountLayout customer={customer}>
            <br />
            <br />
            <Outlet context={{customer}} />
        </AccountLayout>
    );
}

function AccountLayout({customer, children}) {
    const heading = customer
        ? customer.firstName
            ? `Welcome, ${customer.firstName}`
            : `Welcome to your account.`
        : 'Account Details';

    return (
        <div className="account">
            <h1>{heading}</h1>
            <br />
            <BirlAccountMenu />
            {children}
        </div>
    );
}


function BirlAccountMenu() {
    function isActiveStyle({isActive, isPending}) {
        return {
            fontWeight: isActive ? 'bold' : undefined,
            color: isPending ? 'grey' : 'black',
        };
    }

    return (
        <nav role="navigation">
            <NavLink to="/birl/orders" style={isActiveStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Orders</span>
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/birl/profile" style={isActiveStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Address details</span>
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to={"payments"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Payment</span>
            </NavLink>

            <Logout />
        </nav>
    );
}

function Logout() {
    return (
        <Form className="account-logout" method="POST" action="/account/logout">
            &nbsp;<button type="submit">Sign out</button>
        </Form>
    );
}

export const CUSTOMER_FRAGMENT = `#graphql
fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
        nodes {
            ...Address
        }
    }
    defaultAddress {
        ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
}
fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
}
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/queries/customer
const CUSTOMER_QUERY = `#graphql
query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
        ...Customer
    }
}
${CUSTOMER_FRAGMENT}
`;

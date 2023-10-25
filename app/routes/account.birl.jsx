import {Link, useOutletContext} from "@remix-run/react";
import {json, redirect} from "@shopify/remix-oxygen";


export const meta = () => {
    return [{title: 'Birl'}];
};

export async function loader({context}) {
    const {session} = context;
    const customerAccessToken = await session.get('customerAccessToken');
    if (!customerAccessToken) {
        return redirect('/account/login');
    }
    return json({});
}


export default function Birl() {
    const {customer} = useOutletContext();
    const {defaultAddress, addresses} = customer;

    return (
        <div className="account-birl">
            <h2>Birl</h2>
            <div className="account-birl__addresses">
                <h3>Welcome to Birl</h3>
                <p>Birl Orders</p>
                    <Link to={'/account/birl/orders'}>Start a Birl Return</Link>
                <p>Start a Birl Return</p>
            </div>

        </div>
    );
}
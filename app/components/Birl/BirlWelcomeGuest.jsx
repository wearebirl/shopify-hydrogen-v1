
import {Image} from '@shopify/hydrogen';
import {Link} from "@remix-run/react";


export function BirlWelcomeGuest({Customer, StoreName}) {

        customer= false
        if (Customer) {
            var customer = true
        }


        return (
            <>
                <div className={"max-w-7xl mx-auto min-h-screen"}>
                    <div className={"grid grid-cols-1 md:grid-cols-2"}>
                        <div className={"min-w-[50%]"}>
                            <img loading="eager" className="object-cover min-h-screen" src="http://localhost:3000/background-guest.png"  />
                        </div>
                        <div className={"relative"}>
                            <div className={"absolute right-0 top-0"} >
                                Powered by
                                <Image loading="eager" src="http://localhost:3000/birl-logo.png"  className="arrow-welcome" width="79" height="28"/>
                            </div>
                            <div className={"mt-[30%] ml-[30px]"}>
                                <h1>Start your trade-in</h1>
                                <p className="welcome-description">

                                    {customer ?
                                        <>
                                            To begin your trade-in, please click on the option that best applies to you
                                        </>
                                        :
                                        <>
                                            In order to proceed with your trade in you will need to have an account
                                            with {StoreName}. Please click on the option below that best applies to you.
                                        </>
                                    }
                                </p>
                                {customer ?

                                    <div className="birl-guest-welcome-buttons space-y-0.5">
                                        <Link to={'/birl/orders'}>
                                            <div className="birl-button border border-gray-300 rounded-[10px] px-[20px] py-[20px] mb-1 mt-1 text-left">
                                                    <div className={"flex flex-row "}>
                                                        <span className={"font-semibold"}>Bought an item through the {StoreName} online store?</span>
                                                        <Image loading="eager" src="http://localhost:3000/Arrow-Welcome.svg"  className="arrow-welcome" width="11" height="8"/>
                                                    </div>
                                                    <div className={"text-sm"}>
                                                        Choose this option if you have previously bought through the website and would like to access your orders to trade-in
                                                    </div>

                                            </div>

                                        </Link>
                                        <Link to={'/birl/trade-in'}>
                                        <div className="birl-button border border-gray-300 rounded-[10px] px-[20px] py-[20px] mb-1 text-left">
                                            <div className={"flex flex-row "}>
                                                <span className={"font-semibold"}>Bought a {StoreName} item another way?</span>
                                                <Image loading="eager" src="http://localhost:3000/Arrow-Welcome.svg"  className="arrow-welcome" width="11" height="8"/>
                                            </div>
                                            <div className={"text-sm"}>
                                                Choose this option if you have previously bought an item in store or through another online {StoreName} stockist
                                            </div>


                                        </div>
                                        </Link>
                                    </div>


                                    :
                                    <div className="birl-guest-welcome-buttons ">
                                        <Link to={'/account/'}>
                                        <div className="birl-button border border-gray-300 rounded-[10px] px-[20px] py-[20px] mb-1 text-left"
                                                to="/account/">
                                            <div className={"flex flex-row "}>
                                                <span className={"font-semibold"}>Sign in to your {StoreName} account</span>
                                                <Image loading="eager" src="http://localhost:3000/Arrow-Welcome.svg"  className="arrow-welcome" width="11" height="8"/>
                                            </div>
                                            <div className={"text-sm"}>
                                                Access your orders to see which previously purchased items are eligible for trading in with Birl
                                            </div>
                                        </div>
                                        </Link>

                                        <Link to={"/account/register/"}>
                                        <div className="birl-button border border-gray-300 rounded-[10px] px-[20px] py-[20px] space-y-0.5 text-left"

                                        >
                                            <div className={"flex flex-row "}>
                                                <span className={"font-semibold"}>Create a {StoreName} account</span>
                                                <Image loading="eager" src="http://localhost:3000/Arrow-Welcome.svg"  className="arrow-welcome" width="11" height="8"/>
                                            </div>
                                            <div className={"text-sm"}>
                                                Create an account with {StoreName} in order to use Birl to trade-in a preowned {StoreName} item.
                                            </div>


                                        </div>
                                    </Link>

                                    </div>

                                }


                            </div>
                        </div>
                    </div>


                </div>

                </>
        )
    }



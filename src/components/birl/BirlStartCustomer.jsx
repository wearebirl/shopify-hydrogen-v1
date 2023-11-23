
import {Image} from '@shopify/hydrogen';
import {Link} from "@shopify/hydrogen";

import backgroundGuest from "../../assets/birl/background-guest.png";
import birlLogo from "../../assets/birl/birl-logo.png";
import arrowBack from "../../assets/birl/Arrow-left.svg";
import frowardArrow from "../../assets/birl/Arrow-Welcome.svg";
import {BirlHeading} from "./BirlHeading";


export function BirlStartCustomer({Customer, StoreName}) {

    if(!Customer) return null

    return (
        <>
            <div className={"max-w-7xl mx-auto min-h-screen text-black"}>
                <div className={"grid grid-cols-1 md:grid-cols-2"}>
                    <div className={"min-w-[50%]"}>
                        <img loading="eager" className="object-cover min-h-screen" src={backgroundGuest}  />
                    </div>
                    <div className={"relative"}>
                        <div className={"absolute right-0 top-0"} >
                            Powered by
                            <Image loading="eager" src={birlLogo}  className="arrow-welcome" width="79" height="28"/>
                        </div>
                        <div className={"mt-[30%] ml-[30px]"}>
                            <div className={"text-[40px] font-600 mb-[10px]"}>Start Your trade-in</div>
                            <p className="welcome-description mb-[20px]">

                                {Customer ?
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
                            {Customer ?

                                <div className="birl-guest-welcome-buttons -[15px]">
                                    {/* This link can be set to an orders list page or left as account home as default  */}
                                    <Link to={'/account'}>
                                        <div className="birl-button border border-gray-300 rounded-[10px] px-[20px] py-[20px] mb-[15px] mt-1 text-left">
                                            <div className={"flex flex-row "}>
                                                <span className={"font-semibold"}>Bought an item through the {StoreName} online store?</span>
                                                <Image loading="eager" src={frowardArrow}  className="arrow-welcome" width="11" height="8"/>
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
                                                <Image loading="eager" src={frowardArrow}  className="arrow-welcome" width="11" height="8"/>
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
                                                <Image loading="eager" src={frowardArrow}  className="arrow-welcome" width="11" height="8"/>
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
                                                <Image loading="eager" src={frowardArrow}  className="arrow-welcome" width="11" height="8"/>
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



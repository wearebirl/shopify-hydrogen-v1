import birlLogo from "../../assets/birl/birl-logo.png";
import arrowRight from "../../assets/birl/arrow-right.png";
import { BirlIconLight } from "../icons/BirlIconLight";
import { Link } from "@shopify/hydrogen";
import birlLogoWhite from "../../assets/birl/birl-logo-white.png";
export function ProductCTA({brandName}){

    /**
     * Allow card to be spoken about in the context of the brand otherwise default to Hydrogen
     */

    if(!brandName) {
        brandName = "Hydrogen-v1"
    }

    let ctaOptions = {
        options: [
            {
                id: 1,
                title: "Trade-in your pre-owned items and receive money off today",
                active: true,
            },
            {
                id: 2,
                title: `Have a {BrandName} item you’ve bought from elsewhere`,
                active: false,
            }],
    }

    return (
        <div className=" w-full birl-product-cta-container bg-[#2EA141] text-white rounded-[100px]  inline-flex justify-center items-center gap-2.5 px-[8px] md:p-[19px]">
            <img src={birlLogoWhite} height={18} width={38}/>
            <div className="birl-product-cta-text">
                <p>
                    {ctaOptions.options[0].active &&
                        <span>Trade-in your pre-owned items and receive money off today <span className="product-cta-links"><Link to={'/birl/portal'}  className={`font-bold`} onClick="openDropdown()">Learn more</Link></span></span>
                    }
                    {ctaOptions.options[1].active &&
                        <span>Have a DAWN item you’ve bought from elsewhere <span className="product-cta-links"><Link to={'/birl/portal'} >Click here</Link> <img loading="eager" src={arrowRight} alt="Arrow" width="16" height="16" /></span></span>
                    }
                </p>
            </div>
        </div>
    )
}

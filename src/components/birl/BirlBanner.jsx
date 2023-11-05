
import {Image} from "@shopify/hydrogen";
import birlLogo from "../../assets/birl/birl-logo.png";
import arrowBack from "../../assets/birl/Arrow-left.svg";

export function BirlBanner(){




    return(
        <div className={"max-w-7xl mx-auto h-[100px]"}>
            <div className={"relative flex flex-row w-full"}>
                <div className={"absolute left-0 top-0"} >
                    <a href={"javascript: history.back()"}>
                        <div className={"flex flex-row"}>
                            <Image loading="eager" src={arrowBack}  className="arrow-welcome" width="15" height="15"/>
                            <span className={"font-semibold"}>&nbsp; Back</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className={"relative"}>
                <div className={"absolute right-0 top-0"} >
                    Powered by
                    <Image loading="eager" src={birlLogo}  className="arrow-welcome" width="79" height="28"/>
                </div>
            </div>

        </div>
    )
}
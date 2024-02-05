import {Image} from "@shopify/hydrogen";
import birlLogo from "../../assets/birl/PoweredBy.png";
import arrowBack from "../../assets/birl/Arrow-left.svg";

export function BirlBanner() {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto h-[100px] my-[20px]">
            <a href="javascript: history.back()" className="flex items-center">
                <Image loading="eager" src={arrowBack} className="arrow-welcome" width="15" height="15" />
                <span className="font-semibold ml-2">Back</span>
            </a>
            <Image loading="eager" src={birlLogo} className="object-contain max-w-[79px]" width="79" height="28" />
        </div>
    );
}

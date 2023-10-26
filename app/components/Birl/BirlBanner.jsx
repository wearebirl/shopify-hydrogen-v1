import {Link} from "@remix-run/react";
import {Image} from "@shopify/hydrogen";


export default function BirlBanner(){

    return(
    <div className={"max-w-7xl mx-auto h-[100px]"}>
        <div className={"relative flex flex-row w-full"}>
            <div className={"absolute left-0 top-0"} >
                <Link to="/birl/welcome">
                    <div className={"flex flex-row"}>
                        <Image loading="eager" src="http://localhost:3000/Arrow-left.svg"  className="arrow-welcome" width="15" height="15"/>
                        <span className={"font-semibold"}>&nbsp; Back</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className={"relative"}>
            <div className={"absolute right-0 top-0"} >
                Powered by
                <Image loading="eager" src="http://localhost:3000/birl-logo.png"  className="arrow-welcome" width="79" height="28"/>
            </div>
        </div>

    </div>
    )
}
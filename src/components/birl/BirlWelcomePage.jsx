import {BirlHeading} from "./BirlHeading";
import {BirlIconGrid} from "./BirlIconGrid";
import {BirlButton} from "./BirlButton";


export function BirlWelcomePage() {

    return(
        <div className={"max-w-7xl mx-auto text-center bg-white h-full"}>
            <div className={"grid grid-cols-1 md:grid-cols-2"}>
                <div className={"col-span-1"}>
                    <BirlHeading headingText={"Welcome to Birl Trade-in"}></BirlHeading>
                    <div className="w-full h-fit">
                        <div className="text-gray-500 text-base font-normal font-['Inter'] float-left text-left">Ready to make a positive impact on the environment while upgrading your wardrobe?<br/>
                            <br/>With Birl Trade-In, you can trade in your pre-loved clothing items and </div>
                        <div className="text-gray-500 text-base font-bold font-['Inter'] float-left text-left">receive money off that’s ready to use the same day!</div>
                    </div>
                    <div className={"w-full h-fit"}>

                    </div>

                </div>
                <div className={"col-span-1"}>
                    <BirlIconGrid></BirlIconGrid>
                    <div className="w-full h-fit flex flex-row relative">
                        <div className="w-full left-0 top-0 absolute text-black text-xl font-semibold font-['Inter'] leading-none text-left">How it works</div>
                        <div className="w-full h-16 left-0 top-[46px] absolute">
                            <div className="w-52 left-[42.57px] top-0 absolute text-black text-lg font-semibold font-['Inter'] leading-none text-left">Select Your Trade-In</div>
                            <div className="w-96 left-[43px] top-[26px] absolute text-gray-500 text-base font-normal font-['Inter'] text-left ">Choose the pre-loved clothing item you'd like to trade in from your closet</div>
                            <div className="w-2.5 h-2.5 left-0 top-[2px] absolute bg-black rounded-full" />
                        </div>
                        <div className="w-52 left-[42.57px] top-[144px] absolute text-black text-lg font-semibold font-['Inter'] leading-none text-left">Get Instant Savings</div>
                        <div className="w-96 left-[42.57px] top-[170px] absolute">
                            <div className="text-gray-500 text-base font-normal font-['Inter'] text-left ">Receive credit based on your item's value, </div>
                            <div className="text-gray-500 text-base font-semibold font-['Inter'] text-left ">instantly redeemable on your next purchase</div>
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[146px] absolute bg-black rounded-full" />
                        <div className="w-96 h-16 left-0 top-[243px] absolute">
                            <div className="w-40 left-[42.57px] top-0 absolute text-black text-lg font-semibold font-['Inter'] leading-none text-left">Send & Recycle</div>
                            <div className="w-96 left-[42.57px] top-[26px] absolute text-gray-500 text-base font-normal font-['Inter'] text-left">Follow our easy instructions to send in your old item, and we'll take care of recycling or repurposing it responsibly</div>
                            <div className="w-2.5 h-2.5 left-0 top-[1px] absolute bg-black rounded-full" />
                        </div>
                        <div className="w-48 h-px left-[4.79px] top-[58px] absolute origin-top-left rotate-90 border border-black"></div>


                        <div className="w-96 left-[42.57px] top-[350px] absolute">
                            <div className="text-gray-500 text-base font-normal font-['Inter'] text-left ">

                                <BirlButton text="Start Now" route="/birl/start" enabled={true} />

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
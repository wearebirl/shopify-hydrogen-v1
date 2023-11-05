import {useState} from "react";
import {Image} from "@shopify/hydrogen";


export function ConditionModal () {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };



    return (
        <div>
            <button onClick={openModal}>
                <div className=" absolute w-[500px]">
                    <div className="w-full h-5 left-0 top-0 absolute">
                        <div className="left-[1px] top-0 absolute text-black text-sm font-medium font-['Inter']">
                            <div className={"flex flex-row underline"}>
                                How to choose the right condition &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="2" />
                                    <text x="50" y="70" text-anchor="middle" font-size="60" fill="black">?</text>
                                </svg>

                            </div>

                        </div>

                    </div>
                </div>
            </button>
            {showModal ?
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-[800px] ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="w-full h-14 px-7 py-3 bg-white rounded-tl-xl rounded-tr-xl shadow justify-between items-center inline-flex">
                                    <div className="grow shrink basis-0 self-stretch relative">
                                        <Image loading="eager" src="http://localhost:3000/birl-logo.png"  className="arrow-welcome" width="79" height="28"/>
                                    </div>
                                    <div className="w-1 h-7 bg-white" />
                                    <div className=" text-gray-900 text-xs font-normal font-['Inter'] leading-none">in partnership with
                                        <span className="text-gray-900 text-xs font-semibold font-['Inter'] leading-none"> </span>
                                        <span className="text-gray-900 text-xs font-bold font-['Inter'] leading-none tracking-wider">DAWN</span>
                                    </div>
                                    <div className="w-7 h-7 bg-white" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 100 100" onClick={closeModal}>
                                        <line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="10" />
                                        <line x1="10" y1="90" x2="90" y2="10" stroke="black" stroke-width="10" />
                                    </svg>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto max-h-[800px] overflow-auto ">
                                    <div className="w-[470px] h-96 relative">
                                        <div className="w-full left-0 top-0 absolute rounded-lg">
                                            <div className="w-full h-96 left-0 top-0 absolute">
                                                <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-xl" />
                                                <div className="left-[30px] top-[98px] absolute text-center text-black text-3xl font-semibold font-['Inter'] leading-none">Choosing your items condition</div>
                                                <div className="w-96 left-[30px] top-[154px] absolute">
                                                        <span className="text-gray-500 text-base font-normal font-['Inter']">This helps us decide on the best location to send your item.<br/><br/>
                                                    </span>
                                                    <span className="text-black text-base font-medium font-['Inter']">Please note:</span>
                                                    <span className="text-gray-500 text-base font-normal font-['Inter']"> the condition you choose does not impact the price of the voucher you receive.</span>
                                                </div>
                                                <div className="w-96 left-[30px] top-[631px] absolute text-gray-500 text-base font-normal font-['Inter']">No visible signs of wear, stains, or damage. It retains its original shape, colour, and overall appearance.</div>
                                                <div className="w-96 left-[30px] top-[1126px] absolute text-gray-500 text-base font-normal font-['Inter']">No visible signs of wear, stains, or damage. It retains its original shape, colour, and overall appearance.</div>
                                                <div className="w-96 left-[30px] top-[1621px] absolute text-gray-500 text-base font-normal font-['Inter']">No visible signs of wear, stains, or damage. It retains its original shape, colour, and overall appearance.</div>
                                                <div className="w-96 left-[30px] top-[708px] absolute text-gray-500 text-base font-normal font-['Inter']">All zippers, buttons, and closures are in perfect working condition, and there are no missing parts or accessories.</div>
                                                <div className="w-96 left-[30px] top-[1203px] absolute text-gray-500 text-base font-normal font-['Inter']">All zippers, buttons, and closures are in perfect working condition, and there are no missing parts or accessories.</div>
                                                <div className="w-96 left-[30px] top-[1698px] absolute text-gray-500 text-base font-normal font-['Inter']">All zippers, buttons, and closures are in perfect working condition, and there are no missing parts or accessories.</div>
                                                <div className="w-96 h-60 left-[31px] top-[289px] absolute rounded-lg flex-col justify-start items-start inline-flex">
                                                    <div className="w-96 h-28 bg-gradient-to-b from-black to-black" />
                                                    <div className="w-96 h-4 relative rounded-lg">
                                                        <div className="w-96 h-2 left-[28px] top-[4px] absolute opacity-30 bg-white rounded" />
                                                        <div className="w-96 h-2 pr-80 left-[28px] top-[4px] absolute justify-start items-center inline-flex">
                                                            <div className="w-16 h-2 opacity-50 bg-white rounded" />
                                                        </div>
                                                        <div className="w-2 h-2 left-[28px] top-[4px] absolute bg-white rounded" />
                                                        <div className="w-4 h-4 left-0 top-0 absolute" />
                                                    </div>
                                                </div>
                                                <div className="left-[30px] top-[585px] absolute text-center text-black text-xl font-semibold font-['Inter'] leading-none">Like New</div>
                                                <div className="left-[31px] top-[1080px] absolute text-center text-black text-xl font-semibold font-['Inter'] leading-none">Used - Good</div>
                                                <div className="left-[30px] top-[1575px] absolute text-center text-black text-xl font-semibold font-['Inter'] leading-none">Used - Fair</div>
                                                <div className="left-[31px] top-[805px] absolute text-center text-black text-base font-semibold font-['Inter'] leading-none">Examples</div>
                                                <div className="left-[31px] top-[1300px] absolute text-center text-black text-base font-semibold font-['Inter'] leading-none">Examples</div>
                                                <div className="left-[31px] top-[1795px] absolute text-center text-black text-base font-semibold font-['Inter'] leading-none">Examples</div>
                                                <img className="w-52 h-52 left-[30px] top-[841px] absolute" src="https://via.placeholder.com/209x209" />
                                                <img className="w-52 h-52 left-[30px] top-[1336px] absolute" src="https://via.placeholder.com/209x209" />
                                                <img className="w-52 h-52 left-[30px] top-[1831px] absolute" src="https://via.placeholder.com/209x209" />
                                                <img className="w-52 h-52 left-[261px] top-[841px] absolute" src="https://via.placeholder.com/209x209" />
                                                <img className="w-52 h-52 left-[261px] top-[1336px] absolute" src="https://via.placeholder.com/209x209" />
                                                <img className="w-52 h-52 left-[261px] top-[1831px] absolute" src="https://via.placeholder.com/209x209" />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </> : null
            }
        </div>
    )


}
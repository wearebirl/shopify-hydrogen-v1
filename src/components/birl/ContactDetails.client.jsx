import {useState} from "react";
import {BirlButton} from "./BirlButton";
import {YourItemDetails} from "./YourItemDetails.client";
import carbonCapture from "../../assets/birl/carbon cap.svg";
import captureArrow from "../../assets/birl/capture-arrow.svg";
export function ContactDetails(customer, address){

    const [inputs, setInputs] = useState({
        fullName: customer?.firstName + " " + customer?.lastName,
        email: customer.email,
        address: '',
        city: '',
        postcode: '',
        county: '',
        phoneNumber: '',
        agreeSend: false,
        agreeTerms: false,
    });

    const [validate, setValidate] = useState(true);
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));

        validateForm();
    };

    function validateForm() {
        if (inputs.fullName.length > 0 && inputs.email.length > 0 && inputs.address.length > 0 && inputs.city.length > 0 && inputs.postcode.length > 0 && inputs.county.length > 0 && inputs.phoneNumber.length > 0 && inputs.agreeSend && inputs.agreeTerms) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    }
    function nextStep() {
        if (validated !== false) {
            // Contact API to get net step

            // Create voucher in Store

            return window.location.replace('/birl/trade-in/confirm/123')
        }
    }


    return(
        <div>
            <div className={"max-w-7xl mx-auto text-center"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 pr-10"}>
                    <div className={"col-span-1 mr-[10px] lg:pr-1"}>
                        <div className={"flex md:flex-row w-full  "}>

                            <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                                <div className={"w-full md:w-1/2"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Full Name</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.fullName}
                                                           onChange={handleOnChange}
                                                           name={"fullName"}
                                                           id={"fullName"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-full md:w-1/2"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Phone Number</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.phoneNumber}
                                                           onChange={handleOnChange}
                                                           name={"phoneNumber"}
                                                           id={"phoneNumber"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex md:flex-row w-full  "}>
                            <div className={"grid grid-cols-1 w-full float-left"}>
                                <div className={"w-full"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Email Address</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.email}
                                                           onChange={handleOnChange}
                                                           name={"email"}
                                                           id={"email"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex md:flex-row w-full"}>

                            <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                                <div className={"w-full md:w-1/2"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Address</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.address}
                                                           onChange={handleOnChange}
                                                           name={"address"}
                                                           id={"address"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-full md:w-1/2"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">City</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.city}
                                                           onChange={handleOnChange}
                                                           name={"city"}
                                                           id={"city"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"flex md:flex-row w-full"}>

                            <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                                <div className={"w-full md:w-1/2"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Postcode</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.postcode}
                                                           onChange={handleOnChange}
                                                           name={"postcode"}
                                                           id={"postcode"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-full md:w-1/2"}>
                                    <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">County</div>
                                            <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                                <div className="grow shrink basis-0 h-full w-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={customer?.county}
                                                           onChange={handleOnChange}
                                                           name={"county"}
                                                           id={"county"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex md:flex-row w-full"}>
                            <div className={"w-full"}>
                                <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                        <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova']">
                                            <input type="checkbox" name="return" id="return" value="Return Agreement"/>
                                            <label for="tos"> I have read and agreed to the <a href="https://www.wearebirl.com/termsandconditions" target="_blank"> Terms & Conditions</a></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex md:flex-row w-full"}>
                            <div className={"w-full "}>
                                <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                        <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova']">
                                            <input type="checkbox" name="return" id="return" value="Return Agreement"/>
                                            <label htmlFor="return"> I agree that my item condition is correct & I will
                                                return my item within 7 working days.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"float-left"} onClick={()=>nextStep()}>
                            <div className={`px-10 h-10  py-2 ${validate !== null ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                                <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Review Details</div>
                            </div>
                        </div>


                    </div>
                    <div className={"col-span-1"}>
                        <YourItemDetails item={"item"} condition={1}></YourItemDetails>
                    </div>

                </div>
            </div>
        </div>
    )

}

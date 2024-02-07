import {useEffect, useState, useRef} from "react";
import {BirlButton} from "./BirlButton";
import {YourItemDetails} from "./YourItemDetails.client";
import carbonCapture from "../../assets/birl/carbon cap.svg";
import captureArrow from "../../assets/birl/capture-arrow.svg";

import  styes from '../../assets/birl/trade-in-portal.css'

export function ContactDetails(customer, address){
    let customerName = ""
    let customerEmail = ""
    if(customer){

        if(customer?.firstName && customer?.lastName){
           customerName =   customer.fullName = customer?.firstName + " " + customer?.lastName
        }
        if(customer?.email){
            customerEmail = customer.email
        }
    }



    const [order, setOrder] = useState(null);

    const [validate, setValidate] = useState(false);
    const handleOnChange = (e) => {
        e.persist();

        if (e.target.checked && e.target.id === "agreeTerms") {
            e.value = true
        } else {
            e.value = false
        }

        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));

        validateForm();
    };


    function toggleTerms() {


        inputs.agreeTerms = !inputs.agreeTerms
        setInputs((prev) => ({
            ...prev,
            ["aggreeTerms"]: !inputs.agreeTerms,
        }));
        validateForm();

    }

    const toggleAgreeSend = () => {
        inputs.agreeSend = !inputs.agreeSend
        setInputs((prev) => ({
            ...prev,
            ["aggreeTerms"]: !inputs.agreeSend,
        }));
        validateForm();
    };

    let emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'
    let phoneRegex = '/^\d{10}$/'
    let postCodeRegex = '/^[A-Z]{1,2}[0-9]{1,2}\s?[0-9][A-Z]{2}$/'
    function validateForm() {
        validarteEmail(inputs.email)
        if (inputs.fullName.length > 3
            //&& validarteEmail(inputs.email)
            && inputs.address.length > 1
            && inputs.city.length > 1
            //&& inputs.postcode.match(postCodeRegex)
            && inputs.county.length > 1
           // && phoneRegex.test(inputs.phoneNumber)
            && inputs.agreeSend === true
            && inputs.agreeTerms === true) {

            setValidate(true);
           // alert("Form Validated")
        } else {
            setValidate(false);

        }
    }

    function validarteEmail(email) {
        //alert(email.match(emailRegex))
        if (email.match(emailRegex) === true) {
            return true
        } else {
            return false
        }

    }

    function nextStep() {

        if (validate) {
            // Contact API to get net step

            // Create voucher in Store
            localStorage.setItem('birlOrder', JSON.stringify({
                ...order,
                customer: {
                    ...inputs
                }
            }))



            return window.location.replace('/birl/trade-in/review/')

        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        const item = JSON.parse( localStorage.getItem('birlOrder'))
        setOrder(item)

    }, []);




    function validarteText(text) {

        if (text.length > 3) {
            return true
        } else {
            return false
        }
    }

    function validatePhone(phoneNumber) {
        if (phoneNumber.length === 10) {
            return true
        } else {
            return false
        }

    }

    const [inputs, setInputs] = useState({
        fullName:  customer.customer.firstName + " " + customer.customer.lastName,
        email: customer.customer.email,
        address: '',
        city: '',
        postcode: '',
        county: '',
        phoneNumber: '',
        agreeSend: false,
        agreeTerms: false,
    });

    useEffect(() => {

        let cust = customer.customer
         setInputs({
             fullName: cust.firstName + " " + cust.lastName,
             email: cust.email,
         })


    }, [customer]);

    return(




            <div className={"max-w-7xl mx-auto text-center"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 pr-10"}>
                    <div className={"col-span-1 mr-[10px] lg:pr-1"}>

                        <div className={"flex md:flex-row w-full  "}>

                            <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                                <div className={"w-full md:w-1/2 text-black"}>
                                    {JSON.stringify(customer.fullName)}
                                    <div>
                                        <label htmlFor="contact-entry-name " className={"text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight float-left"}>Full Name</label>
                                        <input
                                            type="text"
                                            value={inputs.fullName}
                                            onChange={handleOnChange}
                                            name={"fullName"}
                                            id={"fullName"}
                                            className={"bg-white rounded-lg shadow border border-gray-300 text-slate-700 text justify-start items-center gap-2 inline-flex"}

                                        />
                                        {validarteText(!inputs.fullName) &&
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g clip-path="url(#clip0_2608_1071)">
                                                <path d="M7.99998 5.33325V7.99992M7.99998 10.6666H8.00665M14.6666 7.99992C14.6666 11.6818 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325C11.6819 1.33325 14.6666 4.31802 14.6666 7.99992Z" stroke="#F04438" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2608_1071">
                                                    <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        }
                                    </div>

                                </div>
                                <div className={"w-full md:w-1/2"}>
                                    <div>
                                        <label htmlFor="contact-entry-phone" className={"text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight float-left"}>Phone Number</label>
                                        <span  className={"text-left !text-black absolute top-0 left-0"}>+44 (0)</span>
                                        <input type="text"
                                               name="phoneNumber"
                                               id="phoneNumber"
                                               value={inputs?.phoneNumber}
                                               onChange={handleOnChange}
                                               placeholder="7000000000"
                                               className={"bg-white rounded-lg shadow text-slate-700 text border border-gray-300 justify-end text-right items-center gap-2 inline-flex"}
                                               pattern="^7\d{9}$" />
                                        {validatePhone(!inputs.phoneNumber) &&
                                            <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g clip-path="url(#clip0_2608_1071)">
                                                <path d="M7.99998 5.33325V7.99992M7.99998 10.6666H8.00665M14.6666 7.99992C14.6666 11.6818 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325C11.6819 1.33325 14.6666 4.31802 14.6666 7.99992Z" stroke="#F04438" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2608_1071">
                                                    <rect width="16" height="16" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className={"text-slate-700 text"}>Invalid Phone Number</p>
                                            </>
                                        }
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
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full text-black"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={inputs?.email}
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
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full text-black"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={inputs?.address}
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
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full text-black"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={inputs?.city}
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
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full text-black"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={inputs?.postcode}
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
                                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full text-black"}
                                                           placeholder={""}
                                                           type={"text"}
                                                           value={inputs?.county}
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
                                        <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] text-black" onClick={toggleTerms}>

                                            <input type="checkbox"
                                                   checked={inputs.agreeTerms}
                                                   name="agreeTerms"
                                                   onClick={toggleTerms}
                                                   id="agreeTerms" />
                                            <label for="tos"> I have read and agreed to the <a href="https://www.wearebirl.com/termsandconditions" target="_blank"> Terms & Conditions</a></label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex md:flex-row w-full"}>

                                <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                        <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova']" onClick={toggleAgreeSend}>
                                            <input type="checkbox"
                                                   checked={inputs.agreeSend}
                                                   name="agreeSend"
                                                   onClick={toggleAgreeSend}
                                                   id="agreeSend" />
                                            <label htmlFor="return"> I agree that my item condition is correct & I will return my item within 7 working days.</label>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        <button className={"float-left cursor-pointer"} onClick={nextStep}>
                            <div className={`px-10 h-10  py-2 ${validate  ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                                <div className="text-white text-base font-semibold font-['Inter'] leading-normal">Review Details</div>
                            </div>
                        </button>


                    </div>
                    <div className={"col-span-1"}>

                    </div>


            </div>
        </div>
    )

}

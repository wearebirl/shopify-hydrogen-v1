import {useEffect, useState, useRef} from "react";
import {BirlButton} from "./BirlButton";
import {YourItemDetails} from "./YourItemDetails.client";
import carbonCapture from "../../assets/birl/carbon cap.svg";
import captureArrow from "../../assets/birl/capture-arrow.svg";

import  styes from '../../assets/birl/trade-in-portal.css'

export function ContactDetails(customer, address){
    let customerName = ""
    let customerEmail = ""
    
    let customerObject = customer.customer;
    
    if(customer){

        if(customerObject?.firstName && customerObject?.lastName){
           customerName =   customerObject.fullName = customerObject?.firstName + " " + customerObject?.lastName
        }
        if(customer?.email){
            customerEmail = customerObject.email
        }
    }

    const [order, setOrder] = useState(null);

    const [validate, setValidate] = useState(false);
    const [isRequirementsMet, setIsRequirementsMet] = useState(false);
    const handleOnChange = (e) => {
        e.persist();

        if (e.target.checked && e.target.id === "agreeTerms") {
            e.value = true
        } else {
            e.value = false
        }
        console.log({[e.target.id]: e.target.value})
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
        fullName: '',
        email: customerObject.email,
        address: '',
        city: '',
        postcode: '',
        county: '',
        phoneNumber: '',
        agreeSend: false,
        agreeTerms: false,
    });

    //TODO: Add validation for email, phone number, postcode, and terms and conditions
    useEffect(() => {
        
    }, [inputs]);

    useEffect(() => {

        let cust = customer.customer
         setInputs({
            ...inputs,
            fullName: '',
            email: customerObject.email,
         })


    }, [customer]);

    return(

        <div className="max-w-[1280px] w-full mx-auto px-[20px]">
            <div className="flex justify-evenly">
                <div className="w-1/2"> 
                    <div className="flex">
                        <div className="w-full mr-[18px]">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input type="text" name="fullName" id="fullName" autoComplete="name" value={inputs.fullName} onChange={handleOnChange} className="w-1/2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your full name"/>
                        </div>

                        <div class="w-full relative">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <div className="flex">
                                <span className="flex items-center justify-center px-4 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 absolute top-[24px] w-[82px] h-[38px] text-sm">
                                    +44 (0)
                                </span>
                                <input type="text" name="phoneNumber" id="phoneNumber" autoComplete="phoneNumber" value={inputs.phoneNumber} onChange={handleOnChange} className="w-full indent-[85px] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your mobile number" />
                            </div>
                        </div>


                    </div>

                    <div className="flex mt-[20px]">
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="text" name="email" id="email" autoComplete="email" value={inputs.email} onChange={handleOnChange} className="w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your email"/>
                        </div>
                    </div>

                    <div className="flex mt-[20px]">
                        <div className="w-full mr-[18px]">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input type="text" name="address" id="address" autoComplete="address" value={inputs.address} onChange={handleOnChange} className="w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your address"/>
                        </div>

                        <div className="w-full">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input type="text" name="city" id="city" autoComplete="city" value={inputs.city} onChange={handleOnChange} className="w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your city"/>
                        </div>

                    </div>

                    <div className="flex mt-[20px]">
                        <div className="w-full mr-[18px]">
                            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">
                                Postcode
                            </label>
                            <input type="text" name="postcode" id="postcode" autoComplete="postcode" value={inputs.postcode} onChange={handleOnChange} className="w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your postcode"/>
                        </div>

                        <div className="w-full">
                            <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                                County
                            </label>
                            <input type="text" name="county" id="county" autoComplete="county" value={inputs.county} onChange={handleOnChange} className="w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter your county"/>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div className="flex items-center">
                            <input type="checkbox" name="agreeSend" id="agreeSend" value={inputs.agreeSend} onChange={handleOnChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="agreeSend" className="ml-2 block text-sm text-gray-900">
                                I have read and accept the Terms & Conditions
                            </label>
                        </div>

                        <div className="flex items-center mt-[20px]">
                            <input type="checkbox" name="agreeTerms" id="agreeTerms" value={inputs.agreeTerms} onChange={handleOnChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                                I agree that my item condition is correct & I will return my item within 7 working days.
                            </label>
                        </div>

                    </div>

                    <div className="mt-[20px]">
                    <button className={"float-left"} onClick={({response})=>nextStep({response})}>
                        <div className={`px-10 h-10  py-2 ${isRequirementsMet ? "bg-black" : "bg-gray-400" }   rounded-lg shadow justify-center items-center gap-2 inline-flex`}>
                            <div className="text-white text-base font-semibold font-Inter leading-normal">Confirm condition</div>
                        </div>
                    </button>
                    </div>

                </div>

                <div className="ml-[30px]">
                    <YourItemDetails category={order?.category} condition={order?.condition} price={order?.voucher?.Amount}></YourItemDetails>
                </div>
            </div>

        </div>
    )

}

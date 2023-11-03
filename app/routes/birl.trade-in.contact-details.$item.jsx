import {Link, useLoaderData} from '@remix-run/react';
import {json, redirect} from '@shopify/remix-oxygen';
import {BirlTradeinProgress} from "~/components/Birl/BirlTradeinProgress";
import BirlBanner from "~/components/Birl/BirlBanner";
import {BirlHeading} from "~/components/Birl/BirlHeading";
import {ConditionModal} from "~/components/Birl/ConditionModal";
import YourItemDetails from "~/components/Birl/YourItemDetails";
import {useState} from "react";
import {BirlButton} from "~/components/Birl/BirlButton";

export const meta = () => {
  return [{title: 'Birl Welcome'}];
};

export async function loader({request, context}) {
  const {session, storefront} = context


  const customerAccessToken = await session.get('customerAccessToken');
  if (!customerAccessToken?.accessToken) {
    return json({
      session: session,
      storefront: storefront,
      context: context,
      customer: false
    })
  }



    return json({
      session: session,
      storefront: storefront,
      context: context,
      customer: customerAccessToken
    })


}



export default function Wecome() {
  const data = useLoaderData();
    const [itemCondition, setItemCondition] = useState(1)
    const [item, setItem] = useState(1)
    const [selectdVoucher, setSelectedVoucher] = useState(1)

    const [inputs, setInputsFields] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postcode: '',
        county: '',
        agreeSend: false,
        agreeTerms: false,
    });

    function setInputs(e) {
        setInputsFields(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }



    function validateForm() {
        return true
    }
    let customer = data?.customer

    function nextStep() {
        if (validateForm() !== null) {
            // Contact API to get net step

            return redirect('/birl/review', {
                headers: {
                    'Set-Cookie': `selectedVoucher=${selectdVoucher}; Path=/; HttpOnly; SameSite=Lax`,
                },
            })
        }
    }

    return (
    <div>
      <BirlBanner></BirlBanner>
      <BirlHeading headingText={"Contact Details"}></BirlHeading>
      <BirlTradeinProgress step={3}></BirlTradeinProgress>
   <div className={"max-w-7xl mx-auto text-center"}>
      <div className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className={"col-span-1"}>
            {/* Form Row */}
            <div className={"flex md:flex-row w-full  "}>

                <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                    <div className={"w-full md:w-1/2"}>

                        <div className="w-72 h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Full Name</div>
                                <div className="w-72 h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                        <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                               placeholder={""}
                                               type={"text"}
                                               value={customer?.firstName}
                                               onChange={setInputs}
                                               name={"name"}
                                               id={"name"}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={"w-full md:w-1/2 float-left"}>
                        <div className="w-72 h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Phone number</div>
                            <div className="self-stretch bg-white rounded-lg shadow border border-gray-300 justify-start items-start inline-flex">
                                <div className="pl-3.5 pr-3 py-2.5 rounded-tl-lg rounded-bl-lg justify-start items-center flex">
                                    <div className="text-gray-500 text-base font-normal font-['Proxima Nova'] leading-normal">+44 (0)</div>
                                </div>
                                <div className="grow shrink group focus:border focus:border-lime-500 basis-0 self-stretch  bg-white rounded-tr-lg rounded-br-lg border border-gray-300 justify-start items-center gap-2 flex">
                                    <input className={"grow shrink basis-0 h-full border-none w-full"}
                                           placeholder={""}
                                           type={"tel"}
                                             pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* END Form Row */}
            {/* Form Row */}
            <div className={"flex md:flex-row w-full  "}>

                <div className={"grid grid-cols-1 md:grid-cols-1 w-full float-left"}>
                    <div className={"w-full"}>

                        <div className="w-full h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Email Address</div>
                                <div className="w-full h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                        <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                               placeholder={""}
                                               type={"email"}
                                               value={customer?.firstName}
                                               onChange={setInputs}
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
            {/* END Form Row */}
            {/* Form Row */}
            <div className={"flex md:flex-row w-full  "}>

                <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                    <div className={"w-full md:w-1/2"}>

                        <div className="w-72 h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Address</div>
                                <div className="w-72 h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                        <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                               placeholder={""}
                                               type={"text"}
                                               value={customer?.address}
                                               onChange={setInputs}
                                               name={"address"}
                                               id={"address"}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={"w-full md:w-1/2 float-left"}>
                        <div className="w-72 h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">City</div>
                            <div className="w-72 h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 h-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                    <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full"}
                                           placeholder={""}
                                           type={"text"}
                                           value={customer?.city}
                                           onChange={setInputs}
                                           name={"city"}
                                           id={"city"}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* END Form Row */}


            {/* Form Row */}
            <div className={"flex md:flex-row w-full  "}>

                <div className={"grid grid-cols-1 md:grid-cols-2 w-full float-left"}>
                    <div className={"w-full md:w-1/2"}>

                        <div className="w-72 h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">Postcode</div>
                                <div className="w-72 h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink group basis-0 h-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                        <input className={"grow shrink rounded-lg  basis-0 h-full border-none w-full focus:border-lime-500"}
                                               placeholder={""}
                                               type={"text"}
                                               value={customer?.postcode}
                                               onChange={setInputs}
                                               name={"postcode"}
                                               id={"postcode"}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={"w-full md:w-1/2 float-left"}>
                        <div className="w-72 h-16 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">County</div>
                            <div className="w-72 h-11 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 h-full focus:border focus:border-lime-500 justify-start items-center gap-2 flex">
                                    <select className={"grow shrink rounded-lg  basis-0 h-full border-none w-full focus:border-lime-500"}
                                            onChange={setInputs}
                                           name={"city"}
                                           id={"city"}
                                    >
                                        <option value="">Select a county</option>
                                    <optgroup label="England">
                                        <option>Bedfordshire</option>
                                        <option>Berkshire</option>
                                        <option>Bristol</option>
                                        <option>Buckinghamshire</option>
                                        <option>Cambridgeshire</option>
                                        <option>Cheshire</option>
                                        <option>City of London</option>
                                        <option>Cornwall</option>
                                        <option>Cumbria</option>
                                        <option>Derbyshire</option>
                                        <option>Devon</option>
                                        <option>Dorset</option>
                                        <option>Durham</option>
                                        <option>East Riding of Yorkshire</option>
                                        <option>East Sussex</option>
                                        <option>Essex</option>
                                        <option>Gloucestershire</option>
                                        <option>Greater London</option>
                                        <option>Greater Manchester</option>
                                        <option>Hampshire</option>
                                        <option>Herefordshire</option>
                                        <option>Hertfordshire</option>
                                        <option>Isle of Wight</option>
                                        <option>Kent</option>
                                        <option>Lancashire</option>
                                        <option>Leicestershire</option>
                                        <option>Lincolnshire</option>
                                        <option>Merseyside</option>
                                        <option>Norfolk</option>
                                        <option>North Yorkshire</option>
                                        <option>Northamptonshire</option>
                                        <option>Northumberland</option>
                                        <option>Nottinghamshire</option>
                                        <option>Oxfordshire</option>
                                        <option>Rutland</option>
                                        <option>Shropshire</option>
                                        <option>Somerset</option>
                                        <option>South Yorkshire</option>
                                        <option>Staffordshire</option>
                                        <option>Suffolk</option>
                                        <option>Surrey</option>
                                        <option>Tyne and Wear</option>
                                        <option>Warwickshire</option>
                                        <option>West Midlands</option>
                                        <option>West Sussex</option>
                                        <option>West Yorkshire</option>
                                        <option>Wiltshire</option>
                                        <option>Worcestershire</option>
                                    </optgroup>
                                    <optgroup label="Wales">
                                        <option>Anglesey</option>
                                        <option>Brecknockshire</option>
                                        <option>Caernarfonshire</option>
                                        <option>Carmarthenshire</option>
                                        <option>Cardiganshire</option>
                                        <option>Denbighshire</option>
                                        <option>Flintshire</option>
                                        <option>Glamorgan</option>
                                        <option>Merioneth</option>
                                        <option>Monmouthshire</option>
                                        <option>Montgomeryshire</option>
                                        <option>Pembrokeshire</option>
                                        <option>Radnorshire</option>
                                    </optgroup>
                                    <optgroup label="Scotland">
                                        <option>Aberdeenshire</option>
                                        <option>Angus</option>
                                        <option>Argyllshire</option>
                                        <option>Ayrshire</option>
                                        <option>Banffshire</option>
                                        <option>Berwickshire</option>
                                        <option>Buteshire</option>
                                        <option>Cromartyshire</option>
                                        <option>Caithness</option>
                                        <option>Clackmannanshire</option>
                                        <option>Dumfriesshire</option>
                                        <option>Dunbartonshire</option>
                                        <option>East Lothian</option>
                                        <option>Fife</option>
                                        <option>Inverness-shire</option>
                                        <option>Kincardineshire</option>
                                        <option>Kinross</option>
                                        <option>Kirkcudbrightshire</option>
                                        <option>Lanarkshire</option>
                                        <option>Midlothian</option>
                                        <option>Morayshire</option>
                                        <option>Nairnshire</option>
                                        <option>Orkney</option>
                                        <option>Peeblesshire</option>
                                        <option>Perthshire</option>
                                        <option>Renfrewshire</option>
                                        <option>Ross-shire</option>
                                        <option>Roxburghshire</option>
                                        <option>Selkirkshire</option>
                                        <option>Shetland</option>
                                        <option>Stirlingshire</option>
                                        <option>Sutherland</option>
                                        <option>West Lothian</option>
                                        <option>Wigtownshire</option>
                                    </optgroup>
                                    <optgroup label="Northern Ireland">
                                        <option>Antrim</option>
                                        <option>Armagh</option>
                                        <option>Down</option>
                                        <option>Fermanagh</option>
                                        <option>Londonderry</option>
                                        <option>Tyrone</option>
                                    </optgroup>
                                </select>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* END Form Row */}


            {/* Form Row */}
            <div className={"flex md:flex-row w-full   mt-[10px]"}>

                <div className="w-96 h-4 justify-start items-start gap-2 inline-flex">
                    <div className="pt-0.5 justify-center items-center flex">
                        <div className="justify-center items-center flex">
                            <input type="checkbox"
                                   className=" opacity-0  cursor-pointer w-4 h-4 relative bg-white rounded border border-gray-300 focus:border-lime-500"
                                   name={"agree-send"}
                                   id={"agree-send"}
                                   onChange={()=>setInputs(e.target.value)}

                            />

                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch">
                            <span className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-tight">I have read and agreed to the </span>
                            <span className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] underline leading-tight">Terms & Conditions<br/></span>
                        </div>
                    </div>
                </div>

            </div>
            {/* END Form Row */}
            {/* Form Row */}
            <div className={"flex md:flex-row w-full   mt-[10px]"}>

                <div className="w-96 h-4 justify-start items-start gap-2 inline-flex">
                    <div className="pt-0.5 justify-center items-center flex">
                        <div className="justify-center items-center flex">
                            <div className="w-4 h-4 relative bg-white rounded border border-gray-300" /> {/* inpout filed*/}
                            <input type="checkbox"
                                   className=" opacity-0  cursor-pointer w-4 h-4 relative bg-white rounded border border-gray-300  focus:border-lime-500"
                                   name={"agree-send"}
                                   id={"agree-send"}
                                 onChange={()=>setInputs(e.target.value)} 

                            />
                        </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex float-left">
                            <span className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] float-left justify-start">I agree that my item condition is correct & I will return my item within 7 working days.<br/></span>
                    </div>
                </div>

            </div>
            {/* END Form Row */}

            {/* Form Row */}
            <div className={"flex md:flex-row w-full   mt-[50px]"}>

                <div className="w-96 h-4 justify-start items-start gap-2 inline-flex">
                    <BirlButton onClick={nextStep} buttonText={"Review Details"}></BirlButton>
                </div>

            </div>
            {/* END Form Row */}

        </div>

        <div className={"col-span-1"}>
            <YourItemDetails item={item} condition={itemCondition}></YourItemDetails>
        </div>


      </div>
    </div>
    </div>
    </div>
  );
}
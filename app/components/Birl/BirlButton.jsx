import {Link} from "@remix-run/react";


export function BirlButton({text, route}){

    if(route === null){
        return(
        <div className="max-w-[400px] h-[94px] px-[25px] min-w-[300px] pt-5 pb-[30px] bg-white rounded-bl-xl rounded-br-xl justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-11 rounded-lg justify-start items-start flex">
                <div className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-black rounded-lg shadow border border-black justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-semibold font-['Inter'] leading-normal">{text}</div>
                </div>
            </div>
        </div>
        )
    } else {

        return (
            <Link to={route}>
                <div
                    className="max-w-[400px] h-[94px] px-[25px] min-w-[300px] pt-5 pb-[30px] bg-white rounded-bl-xl rounded-br-xl justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0 h-11 rounded-lg justify-start items-start flex">
                        <div
                            className="grow shrink basis-0 h-11 px-[18px] py-2.5 bg-black rounded-lg shadow border border-black justify-center items-center gap-2 flex">
                            <div
                                className="text-white text-base font-semibold font-['Inter'] leading-normal">{text}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
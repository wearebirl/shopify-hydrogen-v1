import birlLogo from "../../assets/birl/birl-logo.png";

export function AnnouncementBar() {



    return (
        <>

            <div className={"justify-center gap-[10px] padding-x-[10px] padding-y-[11px] grid grid-cols-1  md:grid-cols-2 w-fit align-middle text-center content-center md:content-end md:justify-end bg-[#f4f4f4"}>
                <img src={birlLogo} alt="Birl Logo" className={"w-[55px] h-[auto] my-auto mx-auto md:mr-0"} />
                <div >
                    <span>Trade-in your pre-owned dawn items for an instant credit to spend today</span>
                </div>

            </div>

        </>
    )
}
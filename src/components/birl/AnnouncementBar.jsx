// import birlLogo from '../../assets/birl/birl-logo.png';

import { BirlIconLight } from "../icons/BirlIconLight";

export function AnnouncementBar() {
  return (
    <div
  className={'flex flex-col md:flex-row justify-center items-center w-screen z-[100] gap-2.5 top-0 left-0 px-[10px] py-[11px] text-white bg-[#2EA141] text-center'}>
    <BirlIconLight/>
    <span>
      Trade-in your pre-owned dawn items for an instant credit to spend
      today
    </span>
</div>
  );
}




{/* <img
  src={birlLogo}
  alt="Birl Logo"
  className={'w-[55px] h-[auto] my-auto mx-auto md:mr-0'}
/> */}
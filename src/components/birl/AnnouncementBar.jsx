// import birlLogo from '../../assets/birl/birl-logo.png';

import { BirlIcon } from "../icons/BirlIcon";

export function AnnouncementBar() {
  return (
    <div
  className={'flex justify-center items-center w-screen z-[100] absolute top-0 left-0 px-[10px] py-[11px] text-white bg-[#2EA141] text-center'}>
    <BirlIcon/>
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
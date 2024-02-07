
import birlLogo from '../../assets/birl/birl-logo.png';
import arrowRight from '../../assets/birl/arrow-right.png';
import styles from '../../assets/birl/trade-in-portal.css';
import {BirlIcon} from '../icons/BirlIcon';
import {FilterIcon} from '../icons/FilterIcon';
import {Link} from '@shopify/hydrogen';
import { SearchIcon } from '../icons/SearchIcon';
import { PRODUCT_CARD_FRAGMENT } from '../../lib';
import { AnnouncementBar } from './AnnouncementBar.jsx';
import { ProductTable } from './tables/ProductTable';
import AnnouncementModal from './AnnouncementModal';




export function CustomerPortalOrder(customer) {
  
  return (
    <div className="bg-white p-10">
      <AnnouncementModal onClose={() => null}/>
      <div>
        <span onClick={() => console.log(customer)} className="w-[774px] text-gray-900 text-3xl font-medium leading-[38px]">
          Account
        </span>
      </div>
      <div className="bg-white  rounded-lg  my-8">
        <div className="flex justify-between items-end py-4 px-3 pb-6 bg-gray-50 rounded-xl mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search"
            />
          </div>
          <div>
            <button className="text-xs flex font-semibold text-gray-500 uppercase tracking-wider">
              <FilterIcon />
              Sort by: Newest to oldest <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
        <div className=" border rounded-lg overflow-x-auto">
         {/* <OrderTable /> */}
         <ProductTable/>
        </div>
      </div>
      <div className="w-[555px] h-[34px] px-[19px] py-2 mix-blend-multiply bg-green-600 rounded-2xl border border-white justify-center items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 self-stretch relative"></div>
        <div className="justify-start items-center gap-1 flex">
          <BirlIcon />
          <div>
            <span className="text-white text-sm font-medium  leading-[18px]">
              Have a DAWN item you’ve bought from elsewhere{' '}
            </span>
            <span className="text-white text-sm font-semibold  underline leading-[18px]">
              <Link to={'/birl/trade-in'}>Click here</Link>
            </span>
            <span className="text-white text-sm font-medium leading-[18px]">
              {' '}
            </span>
          </div>
          <div className="w-4 h-4 relative" />
        </div>
      </div>
    </div>
  );
}


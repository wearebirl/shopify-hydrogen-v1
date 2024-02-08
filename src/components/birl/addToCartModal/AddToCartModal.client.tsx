import React, {useState, FC, ReactNode, useEffect, useRef, useContext} from 'react';
import {BirlIconDark} from '../../icons/BirlIconDark';
import {useCart, useNavigate} from '@shopify/hydrogen';
import { DrawerContext } from '../../global/Drawer.client';

export function AddToCartModal({onClose}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState(null);
  const { lines, checkoutUrl } = useCart();
  const [prevLines, setPrevLines] = useState([]);

  useEffect(() => {
    // Detect when a product is added by comparing current lines against previous lines
    if (lines.length > prevLines.length ) {
      setIsOpen(true); // Open the modal when an item is added

      // Find the new line by comparing current lines with previous lines
      const newLines = lines.filter(line => !prevLines.some(prevLine => prevLine.id === line.id));
      
      if (newLines.length > 0) {
        console.log("New Product : ", newLines[0]);
        setNewProduct(newLines[0]); // Set the newly added product
      }

      // Update the previous lines state to current lines
      setPrevLines(lines);
    } else if (lines.length < prevLines.length) {
      // Handle item removal case: update previous lines without showing modal
      setPrevLines(lines);
    } else {
      setPrevLines(lines);
    }
  }, [lines.length]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
    // Reset newProduct when modal is closed to avoid showing outdated information
    setNewProduct(null);
  };

  if (!isOpen) return null;


  const {
    cartIsOpen,
    menuIsOpen,
    openCartDrawer,
    closeCartDrawer,
    openMenuDrawer,
    closeMenuDrawer,
  } = useContext(DrawerContext);
  const navigate = useNavigate();
  function navigateToCheckout(){
navigate(checkoutUrl);
  }

  return (
    <div className=" fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="w-[395px] relative p-8 bg-white md:max-w-[80%] m-auto flex-col flex rounded-lg">
        <div
          id="addToCartModal"
          className="modal-hide fixed w-full h-full top-0 left-0 flex items-center justify-center"
        >
          <div className="bg-white p-8 rounded shadow-lg w-[395px]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-[173px] h-5 align-bottom inline-flex gap-[11px] text-bottom justify-center items-center">
                <div className=" left-0 top-0  flex-col justify-start items-start inline-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.0736 6.14639C16.1674 6.24016 16.22 6.36731 16.22 6.49989C16.22 6.63248 16.1674 6.75963 16.0736 6.85339L8.13364 14.7934C8.03988 14.8871 7.91273 14.9398 7.78014 14.9398C7.64756 14.9398 7.52041 14.8871 7.42664 14.7934L4.15264 11.5184C4.10489 11.4723 4.0668 11.4171 4.04059 11.3561C4.01439 11.2951 4.0006 11.2295 4.00002 11.1631C3.99944 11.0967 4.01209 11.0309 4.03723 10.9694C4.06237 10.908 4.0995 10.8521 4.14645 10.8052C4.19339 10.7582 4.24922 10.7211 4.31067 10.696C4.37212 10.6708 4.43796 10.6582 4.50434 10.6588C4.57073 10.6593 4.63634 10.6731 4.69735 10.6993C4.75835 10.7255 4.81352 10.7636 4.85964 10.8114L7.78164 13.7334L15.3676 6.14639C15.4614 6.05266 15.5886 6 15.7211 6C15.8537 6 15.9809 6.05266 16.0746 6.14639H16.0736Z"
                      fill="black"
                    />
                  </svg>{' '}
                </div>

                <div className="left-[31px] top-[2px] font-medium text-neutral-900 text-xs  tracking-tight">
                  Item added to your cart
                </div>
              </div>
              <button onClick={() => handleClose()} className="text-black">
                <svg
                  className="h-6 w-6 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex gap-3 items-center mb-4">
              <img
                alt={newProduct.merchandise.image.altText}
                className="w-[70px] h-[73px] rounded-[10px]"
                src={newProduct.merchandise.image.url}
              />
              <div className={`flex flex-col gap-2`}>
                <div className="font-normal">
                  {newProduct.merchandise.product.title}
                </div>
                {newProduct.merchandise.selectedOptions.map((option, idx) => (
                  <div key={idx} className={`tracking-tight`}>
                  <b className={`mr-1`}>{option.name}:</b>
                  {option.value}
                </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-between mb-4">
              <button onClick={() => openCartDrawer()} className="w-[331px] h-[47px] p-4 rounded-[10px] border border-black justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-900 text-base font-normal  leading-[15px] tracking-wide">
                  View my cart ({lines.length})
                </div>
              </button>
              <button onClick={() => navigateToCheckout()} className="w-[331px] h-[47px] p-4 bg-black rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-normal leading-[15px] tracking-wide">
                  Check out
                </div>
              </button>
            </div>
            {/* credit container */}
            <div className={`flex flex-col`}>
              <div className="w-[331px] h-11 px-5 py-2.5 rounded-tl-[10px] rounded-tr-[10px] border border-stone-300 justify-center items-center gap-1 inline-flex ">
                <div className="grow shrink basis-0 h-6 px-5 py-2.5 justify-start items-center gap-5 flex">
                  <div className="w-[61px] h-[22px] relative">
                    <BirlIconDark />
                  </div>
                  <div className="w-[200px]">
                    <span className="text-slate-700 text-sm font-normal font-['Proxima Nova'] leading-normal">
                      Trade-In available
                    </span>
                    <span className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] leading-normal">
                      {' '}
                    </span>
                    <span className="text-slate-700 text-sm font-semibold font-['Proxima Nova'] underline leading-normal">
                      Learn more
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[331px] gap-4 px-5 py-4 rounded-bl-[10px] rounded-br-[10px] border border-stone-300 justify-center items-center inline-flex flex-col">
                <div className="w-[246px] bg-[#96D610] p-4 rounded-[20px] mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">£150 Credit</div>
                      <div className="text-sm">FRAHM EXP 06/25</div>
                      <div className="text-xs">No minimum spend required</div>
                    </div>
                    <div className="font-bold text-lg">£150*</div>
                  </div>
                  <div className="text-xs mt-2">
                    Trade-In your pre-owned FRAHM items to get instant money off
                    today
                  </div>
                </div>
                <div className="w-[290px] h-[82px] flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch justify-center items-center gap-[7px] inline-flex">
                    <div className="text-slate-700 text-3xl font-semibold font-['Proxima Nova'] leading-[38px]">
                      £150*
                    </div>
                    <div className="pb-[3px] justify-start items-start gap-2.5 flex">
                      <div className="text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-tight">
                        store credit
                      </div>
                    </div>
                  </div>
                  <div className="w-[290px] text-center text-gray-500 text-sm font-normal font-['Proxima Nova'] leading-tight">
                    Trade-In your pre-owned FRAHM items to get instant money off
                    today
                  </div>
                </div>
              </div>
            </div>
            {/* credit container */}
          </div>
        </div>
      </div>
    </div>
  );
}

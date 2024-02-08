import React, { useState, FC } from 'react';


const AccordionItem = ({ title, children, onClick , isOpen}) => {


  return (
    <div className="border-b"
    >
      <button
        className="flex justify-between items-center p-5 w-full text-left"

// className="flex justify-between items-center p-5 w-full text-left"
        // onClick={toggle}
        onClick={onClick}
      >
        <span>{title}</span>
        <svg
    className={`transform transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
      </button>
      <div
        className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{maxHeight: isOpen ? '2000px' : '0'}}
      >
       <div className="p-5 border-t">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;

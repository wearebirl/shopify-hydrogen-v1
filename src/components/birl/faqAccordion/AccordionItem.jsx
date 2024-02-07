import React, { useState, FC } from 'react';


const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center p-5 w-full text-left"
        onClick={toggle}
      >
        <span>{title}</span>
        <svg
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="p-5 border-t">{children}</div>}
    </div>
  );
};

export default AccordionItem;

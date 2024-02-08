
import React, { useState } from 'react';
import AccordionItem from './AccordionItem'; // Ensure this path is correct

const Accordion = ({items}) => {
  
  return(
    <div className="relative mx-6 my-8 w-full max-w-50% p-10 min-h-[356px] rounded-md border border-gray-300 bg-white shadow-[0_10px_16px_0_rgba(0,0,0,0.05)]">

    <div className="w-[140.37px] text-center text-black text-[22px] font-medium leading-none">FAQ’s
    </div>
    <FAQAccordion items={items} />
    
    </div>

  )
}

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    if (openIndex === index) {
      // If the clicked item is already open, close it.
      setOpenIndex(null);
    } else {
      // Open the clicked item and close others.
      setOpenIndex(index);
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}
        isOpen={index === openIndex}
        onClick={() => handleItemClick(index)}
        >
          {item.text ? (
            <p className="text-gray-700">{item.text}</p>
          ) : (
            item.children && <FAQAccordion items={item.children} />
          )}
        </AccordionItem>
      ))}
    </>
  );
};

export default Accordion;

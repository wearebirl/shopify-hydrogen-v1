







import React, { FC } from 'react';
import AccordionItem from './AccordionItem'; // Ensure this path is correct

// type FAQItem = {
//   title: string;
//   text?: string;
//   children?: FAQItem[];
// };

// type FAQAccordionProps = {
//   items: FAQItem[];
// };

const FAQAccordion = ({ items }) => {
  return (
    <div className="relative mx-6 my-8 w-full max-w-50% p-10 min-h-[356px] rounded-md border border-gray-300 bg-white shadow-[0_10px_16px_0_rgba(0,0,0,0.05)]">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.text ? (
            <p className="text-gray-700">{item.text}</p>
          ) : (
            item.children && <FAQAccordion items={item.children} />
          )}
        </AccordionItem>
      ))}
    </div>
  );
};

export default FAQAccordion;

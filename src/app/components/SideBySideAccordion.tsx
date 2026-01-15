// components/SideBySideAccordion.tsx
"use client";

import { useState } from "react";


export type FAQItem = {
  question: string;
  answer: string;
};

type SideBySideAccordionProps = {
  data: FAQItem[];
};

const SideBySideAccordion = ({ data }: SideBySideAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumn = data.slice(0, Math.ceil(data.length / 2));
  const rightColumn = data.slice(Math.ceil(data.length / 2));

  const renderAccordion = (items: FAQItem[], startIndex: number) =>
    items.map((item, idx) => {
      const index = startIndex + idx;
      const isOpen = openIndex === index;
      return (
        <div
          key={index}
          className="p-4 mb-4 transition-all duration-300 bg-white rounded-md shadow cursor-pointer"
          onClick={() => toggle(index)}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-900">{item.question}</h4>
            <span>{isOpen ? "▼" : "▶"}</span>
          </div>
          {isOpen && item.answer && (
            <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
          )}
        </div>
      );
    });

  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-10 mx-auto max-w-7xl md:grid-cols-2">
      <div>{renderAccordion(leftColumn, 0)}</div>
      <div>{renderAccordion(rightColumn, leftColumn.length)}</div>
    </div>
  );
};

export default SideBySideAccordion;





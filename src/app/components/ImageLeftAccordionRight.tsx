'use client'; // Add this at the top

import { useState } from "react";
import Image from "next/image";

export type AccordionItem = {
  question: string;
  answer: string;
};

type ImageLeftAccordionRightProps = {
  imageSrc: string;
  imageAlt: string;
  items: AccordionItem[];
};

export function ImageLeftAccordionRight({
  imageSrc,
  imageAlt,
  items,
}: ImageLeftAccordionRightProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-8 px-5 py-8 md:flex-row md:px-24">
      {/* Image on the left */}
      <div className="flex my-5 overflow-hidden md:w-1/2 h-96 rounded-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="object-cover w-full h-full rounded shadow"
        />
      </div>

      {/* Accordion on the right */}
      <div className="w-full md:w-1/2">
        {items.map((item, index) => (
          <div key={index} className="py-4 border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full text-left font-semibold text-[#A00927] hover:text-[#27282C] focus:outline-none text-[16px] lg:text-[14px] xl:text-[16px]"
            >
              <span>{item.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-sm text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}




'use client';

import { useState, ReactNode } from 'react';
import { Plus, X } from 'lucide-react';

interface HorizontalFooterAccordion {
  icon: ReactNode;
  title: string;
  description: string;
}

interface HorizontalFooterAccordionProps {
  items: HorizontalFooterAccordion[];
}

export default function HorizontalFooterAccordion({
  items,
}: HorizontalFooterAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:mx-24 py-10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-gray-200 py-4 text-black"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold md:text-lg text-xs">{item.title}</h3>
              </div>
              {isOpen ? <X className="text-gray-400" /> : <Plus className="text-gray-400" />}
            </div>

            {isOpen && (
              <div className="mt-4 pl-14 animate-fadeIn text-gray-700">
                {item.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}


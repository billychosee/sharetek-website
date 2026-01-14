'use client';

import { useState, ReactNode } from 'react';
import { Plus, X } from 'lucide-react';

interface FooterAccordion2Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FooterAccordion2({
  icon,
  title,
  description,
}: FooterAccordion2Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-10 md:mx-24 mx-5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-semibold md:text-lg text-black text-xs">
            {title}
          </h3>
        </div>
        <div>
          {isOpen ? <X className="text-gray-400" /> : <Plus className="text-gray-400" />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-6 pl-14 animate-fadeIn">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
}


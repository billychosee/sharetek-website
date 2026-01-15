"use client";

import { ReactNode } from "react";

interface CardWithIconProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardWithIcon({ icon, title, description }: CardWithIconProps) {
  return (
    <div className="p-6 transition-shadow duration-300 border shadow-sm rounded-2xl hover:shadow-md">
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-[#A00927] rounded-full">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[#A00927]">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}





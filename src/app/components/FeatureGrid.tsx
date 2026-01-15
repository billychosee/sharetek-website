"use client";

import { ReactNode } from "react";

interface FeatureItem {
  icon: ReactNode;
  title: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 text-black md:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-4 space-x-4 transition-all duration-300 rounded-lg hover:shadow-md"
        >
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-white rounded-full bg-primary">
            {item.icon}
          </div>
          <div className="flex flex-col flex-grow text-center md:text-left">
            <h3 className="text-lg">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}




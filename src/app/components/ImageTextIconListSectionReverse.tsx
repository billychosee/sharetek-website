import Image from 'next/image';
import { ReactNode } from 'react';

interface IconItem {
  icon: ReactNode;
  title: string;
  text: string;
}

interface ImageTextIconListSectionReverseProps {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  iconItems: IconItem[];
}

export const ImageTextIconListSectionReverse: React.FC<ImageTextIconListSectionReverseProps> = ({
  heading,
  description,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  iconItems,
}) => {
  return (
    <section className="flex flex-col items-center w-full gap-10 px-5 py-16 md:flex-row md:py-14 md:px-24">

      <div className="flex my-5 overflow-hidden md:w-1/2 h-96 rounded-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* text block */}
      <div className="space-y-4 md:w-1/2"> 
        <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
        <p className="text-base text-gray-600">{description}</p>
        <div className="my-6 border-b border-gray-300"></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {iconItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-3 text-4xl text-[#A00927]">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 text-md">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




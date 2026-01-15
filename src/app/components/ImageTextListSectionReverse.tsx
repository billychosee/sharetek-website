import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

interface ImageTextListSectionReverseProps {
  heading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  listItems: string[];
}

export const ImageTextListSectionReverse: React.FC<ImageTextListSectionReverseProps> = ({
  heading,
  paragraph,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  listItems,
}) => {
  return (
    <section className="flex flex-col-reverse items-center gap-10 px-5 py-16 md:flex-row md:py-14 md:px-24">

      {/* Text content on the left */}
      <div className="space-y-4 md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
        <p className="text-sm text-gray-600 lg:text-xs xl:text-sm">{paragraph}</p>
        <div className="my-6 border-b border-gray-300"></div>
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-800 lg:text-xs xl:text-sm">
              <CheckCircle className="w-5 h-5 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Image on the right */}
      <div className="flex my-5 overflow-hidden md:w-1/2 h-96 rounded-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};




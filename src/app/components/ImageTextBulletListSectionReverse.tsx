import Image from 'next/image';

interface ImageTextBulletListSectionReverseProps {
  heading: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  listItems: string[];
}

export const ImageTextBulletListSectionReverse: React.FC<ImageTextBulletListSectionReverseProps> = ({
  heading,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  listItems,
}) => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-0 px-5 py-0 md:flex-row md:py-14 md:px-24 md:gap-20">
      <div className="pb-4 space-y-4 md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 lg:text-xl xl:text-3xl">{heading}</h2>
        <div className="pb-4 border-b border-black"></div>
        <ul className="space-y-2 text-sm text-gray-800 list-disc list-inside lg:text-xs xl:text-sm">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center md:w-1/2 h-96">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-contain rounded-4xl"
        />
      </div>
    </section>
  );
};


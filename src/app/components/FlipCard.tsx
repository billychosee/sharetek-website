'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FlipCardProps {
  title: string;
  imageSrc: string;
  infoHeading: string;
  infoDescription: string;
  ctaLink: string;
}

const FlipCard = ({ title, imageSrc, infoHeading, infoDescription, ctaLink }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleHoverStart = () => {
    setIsFlipped(true);
  };

  const handleHoverEnd = () => {
    setIsFlipped(false);
  };

  // Variants for the card container to control the flip animation
  const cardContainerVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180, transition: { duration: 0.8 } },
  };

  return (
    <div
      className="relative w-full h-[400px] perspective-1000" // Added perspective for 3D effect
      onMouseEnter={handleHoverStart} // Use mouseEnter/Leave for reliable hover
      onMouseLeave={handleHoverEnd}
    >
      {/* Card Inner - This element will do the actual flipping */}
      <motion.div
        className="relative w-full h-full"
        variants={cardContainerVariants}
        initial="initial"
        animate={isFlipped ? 'flipped' : 'initial'}
        style={{ transformStyle: 'preserve-3d' }} // Crucial for 3D flip
      >
        {/* Front of the card */}
        <div className="absolute inset-0 overflow-hidden bg-white shadow-2xl rounded-xl backface-hidden">
          <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
          {/* Overlay - Using the provided green color for the overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#A00927]/70 via-[#A00927]/60 to-transparent"></div>
          {/* Text on top of the image and overlay */}
          <h3 className="absolute left-0 right-0 px-4 text-xl font-bold text-center text-white bottom-4">
            {title}
          </h3>
        </div>

        {/* Back of the card with blurred glass gradient */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white shadow-lg rounded-xl backface-hidden"
          style={{
            transform: 'rotateY(180deg)', // Initially rotated for the back side
            // Applying the glassmorphism effect
            background: 'linear-gradient(135deg, rgba(141, 196, 64, 0.7) 0%, rgba(3, 87, 122, 0.7) 100%)', // Semi-transparent gradient
            backdropFilter: 'blur(10px)', // Blur effect
            WebkitBackdropFilter: 'blur(10px)', // For Safari support
            border: '1px solid rgba(255, 255, 255, 0.18)', // Subtle border
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' // Soft shadow
          }}
        >
          <h3 className="mb-4 text-xl font-bold">{infoHeading}</h3>
          <p className="mb-6 text-sm">{infoDescription}</p>
          <Link
  href={ctaLink}
  className="bg-white text-[#A00927] px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-100"
>
  View More
</Link>



        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;




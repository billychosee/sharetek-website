"use client";

import React from "react";
import Link from 'next/link';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "link";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = `
      bg-white text-black font-bold shadow-2xl hover:shadow-md hover:transition-all hover:duration-500
      px-4 py-3 text-xs  /* Mobile/default */
      sm:px-6 sm:py-4 sm:text-sm  /* Small devices */
      md:px-8 md:py-4  /* Medium devices */
      lg:px-10 lg:py-5 lg:text-[12px] /* Large devices */
      xl:px-12 xl:py-5 xl:text-sm  /* Extra large devices */
    `;
  } else if (variant === "link") {
    variantClasses = `
      relative font-bold text-black
      text-xs  /* Mobile/default */
      sm:text-sm  /* Small devices */
      lg:text-[12px]  /* Large devices */
      xl:text-sm  /* Extra large devices */
      after:content-[''] after:absolute after:left-0 after:bottom-0
      sm:after:bottom-10
      xl:after:bottom-0
      lg:after:bottom-0
      after:h-[1px] after:w-full after:bg-[#27282C]
      after:transition-all after:duration-300
      hover:after:w-0 hover:after:left-full
    `;
  }

  return (
    <Link href="/contact-us" passHref>
      <button
        className={`${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default CustomButton;

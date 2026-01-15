"use client";

import Link from "next/link";
import React from "react";

export interface CTAButtonProps {
  text: string;
  icon?: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  text,
  icon,
  href = "#",
  variant = "primary",
  onClick,
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "cursor-pointer flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full transition-all duration-300 transform hover:scale-105";
  const variantClasses =
    variant === "primary"
      ? "bg-[#0EA4CC] text-white shadow-lg hover:shadow-xl"
      : "bg-white text-[#0EA4CC] border-2 border-[#0EA4CC] hover:bg-[#0EA4CC] hover:text-white";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses}>
        {text}
        {icon && <span>{icon}</span>}
      </button>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {text}
      {icon && <span>{icon}</span>}
    </Link>
  );
}

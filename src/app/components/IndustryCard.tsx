"use client";
import Link from "next/link";
import { ArrowUpRight, Landmark, Home, GraduationCap, Shield, UtensilsCrossed } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}

// Map icon names to their components
const iconComponents = {
  Landmark,
  Home,
  GraduationCap,
  Shield,
  UtensilsCrossed
};

export default function IndustryCard({
  title,
  description,
  iconSrc,
  href,
}: IndustryCardProps) {
  // Get the appropriate icon component
  const IconComponent = iconComponents[iconSrc as keyof typeof iconComponents];
  
  return (
    <div className="flex flex-col justify-between p-6 text-black transition-all duration-300 bg-white shadow-md group hover:bg-[#27282C] hover:text-white">
      <Link href={href}>
        {/* Top: Icon and Title */}
        <div className="flex items-center justify-between transition-all duration-300">
          <h2 className="text-lg font-semibold lg:text-xs xl:text-lg">{title}</h2>
          <div className="p-4 transition-all duration-300 bg-gray-200 rounded-full group-hover:bg-white group-hover:p-5 lg:p-2 xl:p-4 group-hover:text-[#27282C]">
            {IconComponent && (
              <IconComponent 
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-90" 
              />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm md:text-xs">{description}</p>
        
        {/* Bottom: Arrow icon */}
        <ArrowUpRight
          className="mt-6 text-[#27282C] transition-colors duration-300 group-hover:text-white"
          size={18}
        />
      </Link>
    </div>
  );
}




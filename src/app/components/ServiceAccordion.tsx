"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import {
  FaNetworkWired,
  FaPhoneAlt,
  FaCloud,
  FaShieldAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaCogs,
  FaSyncAlt,
  FaDatabase,
  FaLifeRing,
  FaChartLine,
  FaLightbulb,
  FaUsersCog,
} from "react-icons/fa";

const FontAwesomeIcons = {
  FaNetworkWired,
  FaPhoneAlt,
  FaCloud,
  FaShieldAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaCogs,
  FaSyncAlt,
  FaDatabase,
  FaLifeRing,
  FaChartLine,
  FaLightbulb,
  FaUsersCog,
};

interface ServiceItem {
  title: string;
  description: string;
  iconName: keyof typeof FontAwesomeIcons;
}

interface ServiceAccordionProps {
  icon: keyof typeof FontAwesomeIcons;
  title: string;
  summary: string;
  description: string;
  services: ServiceItem[];
  learnMoreLink?: string;
}

export default function ServiceAccordion({
  icon,
  title,
  summary,
  description,
  services,
  learnMoreLink = "#",
}: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = FontAwesomeIcons[icon];

  return (
    <div className="py-6 border-b border-gray-200 xl:py-10 lg:py-6">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-[#27282C]" />
            )}
          </div>
          <div className="flex justify-center align-middle">
            <h3 className="text-xs font-semibold text-black xl:text-xl lg:text-xs">
              {title}
            </h3>
            <p className="pl-2 text-xs text-gray-500 xl:text-xl lg:text-xs">
              {summary}
            </p>
          </div>
        </div>
        <div>
          {isOpen ? (
            <X className="text-gray-400" />
          ) : (
            <Plus className="text-gray-400" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="mt-6 pl-14 animate-fadeIn">
          <p className="mb-6 text-gray-700">
            {description}{" "}
            {learnMoreLink && (
              <a href={learnMoreLink} className="text-primary hover:underline">
                Find out More
              </a>
            )}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = FontAwesomeIcons[service.iconName];
              return (
                <div key={index} className="flex items-start gap-3 pl-1">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                      {Icon && <Icon className="w-6 h-6 text-[#27282C]" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';

type FeatureCardProps = {
  icon: React.ElementType | string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center transition bg-white rounded-lg shadow-2xl hover:shadow-md gap-y-5 h-full min-h-[320px]">
      <div>
        {typeof Icon === 'string' ? (
          <img src={Icon} alt={title} className="w-16 h-16 mx-auto" />
        ) : (
          <Icon className="w-16 h-16 text-[#A00927] mx-auto group-hover:text-[#27282C] transition-colors duration-300" />
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;


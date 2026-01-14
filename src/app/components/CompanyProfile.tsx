// components/CompanyProfile.tsx
'use client';

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

type StatItem = {
  end: number;
  duration?: number;
  label: string;
};

type CompanyProfileProps = {
  heading: string;
  subheading: string;
  stats: StatItem[];
};

const CompanyProfile: React.FC<CompanyProfileProps> = ({ heading, subheading, stats }) => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const profileSection = document.getElementById('company-stats');
      if (profileSection) {
        const top = profileSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setStartCount(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col gap-5 pt-5 mx-5 space-y-6 text-center text-black md:mx-24 md:flex-row md:text-start md:space-y-14"
      id="company-stats"
    >
      <div className="md:w-2/5">
        <p className="text-sm font-semibold text-[#A00927] whitespace-nowrap">{heading}</p>
        <h1 className="pt-5 text-2xl font-bold">{subheading}</h1>
      </div>

      {stats.map((stat, index) => (
        <div className="md:w-1/5" key={index}>
          <h1 className="text-6xl font-bold">
            {startCount ? <CountUp end={stat.end} duration={stat.duration || 3} /> : '0'}
          </h1>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyProfile;


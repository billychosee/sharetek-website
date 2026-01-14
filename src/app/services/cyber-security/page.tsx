import React from 'react'
import {
  Lock,
  ShieldCheck,
  Radar,
  BookOpen,
  UserX,
  EyeOff,
  ShieldAlert
} from 'lucide-react';
import { ImageTextIconListSection } from '@/app/components/ImageTextIconListSection';
import { ImageTextIconListSectionReverse } from '@/app/components/ImageTextIconListSectionReverse';
import { ImageTextListSection } from '@/app/components/ImageTextListSection';
import SideBySideAccordion, { FAQItem } from "@/app/components/SideBySideAccordion";
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Cybersecurity Solutions | Enterprise-Grade Protection for Businesses',
  description: 'Comprehensive cybersecurity services including threat detection, data protection, and managed IT security for businesses of all sizes. 24/7 monitoring and support.',
  openGraph: {
    title: 'Enterprise Cybersecurity Services | Threat Protection & Data Security',
    description: 'Proactive cybersecurity solutions with risk assessment, network protection, and ransomware defense tailored to your business needs.',
    url: 'https://Sharetekgroup.com/services/cybersecurity',
    siteName: 'Sharetek Group'
  }
};

const faqData: FAQItem[] = [
  {
    question: "Are free Anti-Virus software any good?",
    answer:
      "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware, Malware and Virus protection.",
  },
  {
    question: "What does having managed IT services cost?",
    answer: "Managed IT costs vary by scope and size of your organization.",
  },
  {
    question: "What is cloud backup?",
    answer: "Cloud backup stores your data safely offsite to protect from local disasters.",
  },
  {
    question: "What types of systems do you support?",
    answer: "We support Windows, Mac, Linux, and various server platforms.",
  },
  {
    question: "What if we already have an internal IT department?",
    answer: "We can supplement your internal IT as a co-managed service.",
  },
  {
    question: "What exactly are managed IT services?",
    answer: "A proactive approach to IT management including monitoring, maintenance, and support.",
  },
  {
    question: "How does a flat rate billing save me money?",
    answer: "Flat rate billing prevents unpredictable costs from break-fix IT support.",
  },
  {
    question: "How long is a managed services contract for?",
    answer: "Contracts are typically 12 months but can be customized.",
  },
];

function CyberSecurity() {
  return (
    <div className="pt-24 text-black bg-white">

      {/* Start of Hero Section */}
      <div className="flex flex-col items-center space-y-6 text-center ">
        <p className="!text-sm !font-bold !text-[#A00927] pt-20 md:pt-0">Our Solutions</p>
        <h1 className="!text-[#A00927] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
          Industry leading systems <br /> and solutions
        </h1>
        <p>
          We are a leading provider of IT and cyber security solutions <br />
          for businesses of all sizes. Whether you need to protect your <br />
          data, optimize your network, or streamline your operations, <br />
          we have the expertise to help you achieve your goals.
        </p>
      </div>
      {/* End of Hero Section */}

      <ImageTextIconListSection
        heading="Leader in cybersecurity and data protection"
        description="Our advanced managed cyber security services will safeguard your organisation from threats and vulnerabilities, be they malicious or accidental."
        imageSrc="/cyber_security.png"
        imageAlt="Cybersecurity illustration"
        iconItems={[
          {
            icon: <Lock className="w-8 h-8" />,
            title: 'Risk & threat',
            text: 'We support you in making your vision a reality and make.',
          },
          {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: 'Protect',
            text: 'We support you in making your vision a reality and make.',
          },
        ]}
      />

      <ImageTextIconListSectionReverse
        heading="Cybersecurity services and solutions per markets"
        description="Capitalising on Thales expertise in manufacturing solutions for main markets as well as on strong cyber integration capabilities for large and complex projects"
        imageSrc="/cyber_security_2.png"
        imageAlt="Cybersecurity illustration"
        iconItems={[
          {
            icon: <Radar className="w-8 h-8" />,
            title: 'Detect & respond',
            text: 'We support you in making your vision a reality and make.',
          },
          {
            icon: <BookOpen className="w-8 h-8" />,
            title: 'Train & experiment',
            text: 'We support you in making your vision a reality and make.',
          },
        ]}
      />

      {/* Start of Benefits */}
      <div className="flex flex-col items-center space-y-6 text-center bg-gradient-to-t from-[#d5f3ff] to-white">
        <p className="!text-sm !font-bold !text-[#A00927] pt-20 md:pt-0">BENEFITS</p>
        <h1 className="!text-[#A00927] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
          Why do you need <br /> cybersecurity?
        </h1>
        <p>
          That&apos;s more than 2,200 attacks daily. Is your business protected <br />
          from the ever looming threat of would-be hackers?
        </p>
      </div>

      <section className="flex flex-col gap-10 pt-10 pb-10 md:pb-24 px-5 text-black md:px-24 md:flex-row bg-[#d5f3ff] md:pt-14">
        {[
          {
            icon: <UserX size={40} className="text-[#4A90A4] hover:text-[#A00927]" />,
            title: "Internal Attacks",
            text: `A high value target to hackers but sometimes the hackers are already inside your network. Whether intentionally or unintentionally, 60% of all cybersecurity breaches originate from within the organization itself.`,
          },
          {
            icon: <EyeOff size={40} className="text-[#4A90A4] hover:text-[#A00927]" />,
            title: "Spyware",
            text: `Insidious programs, known as “spyware,” can be installed innocuously on your networks. Hackers can use this information to steal money or sell your information to third parties, affecting the reputation of your business.`,
          },
          {
            icon: <ShieldAlert size={40} className="text-[#A00927] hover:text-[#A00927]" />,
            title: "Ransomware",
            text: `The annual cost of ransomware attacks in the United States is estimated to be $3.5 billion in 2019 alone. This unique cyber-attack accesses and locks your company data, demanding a ransom for the return of it.`,
          },
        ].map(({ icon, title, text }, i) => (
          <div key={i} className="flex flex-col items-center space-y-5 text-center">
            {icon}
            <h1 className="text-2xl font-bold capitalize">{title}</h1>
            <p className="text-sm lg:text-xs xl:text-sm">{text}</p>
          </div>
        ))}
      </section>
      {/* End of Benefits */}
      
     <div className="flex flex-col items-center pt-6 text-center md:pt-14">
  <h1 className="text-black text-3xl xl:!text-[50px] !font-bold lg:!text-4xl">
    All your IT and <br />cybersecurity needs.
  </h1>

  <ImageTextListSection
    heading="Why choose Sharetek?"
    paragraph="We offer customized solutions that fit your specific needs and budget and We use the latest technologies and best practices to ensure the highest level of security and performance. We also have a team of certified professionals who are ready to assist you 24/7. Sharetek has a proven track record of delivering successful projects and satisfied clients."
    imageSrc="/cyber_security_3.png"
    imageAlt="Cyber Security Third Image"
    listItems={[
      'IT consulting and strategy',
      'Network design and installation',
      'Cloud computing and migration',
      'Data backup and recovery',
      'Cyber security assessment and remediation',
      'Managed IT services and support',
    ]}
  />
</div>

{/* Start Of FAQ */}

<div className='pb-10 bg-[#86e50004]'>
<div className="flex items-center px-5 my-10 md:px-24">
  <div className="flex-grow border-t border-gray-400"></div>
  <span className="text-sm font-semibold text-[#A00927] whitespace-nowrap px-2">
    FREQUENTLY ASKED QUESTIONS
  </span>
  <div className="flex-grow border-t border-gray-400"></div>
</div>

<h1 className="my-8 text-3xl font-bold text-center">Frequently Asked Questions</h1>
<SideBySideAccordion data={faqData} />
</div>

{/* End Of FAQ */}

                <Footer />
    </div>
  );
}

export default CyberSecurity;


"use client";

import Image from 'next/image';
import {
  FaHome,
  FaMoneyCheckAlt,
  FaTools,
  FaRegFileAlt,
  FaShieldAlt,
  FaGlobe,
  FaDollarSign,
  FaChartLine,
  FaCreditCard,
  FaListAlt,
  FaFileContract,
  FaBell,
  FaWrench,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { ImageTextListSection } from '@/app/components/ImageTextListSection';
import HorizontalFooterAccordion from '@/app/components/HorizontalFooterAccordion';
import { ImageTextListSectionReverse } from '@/app/components/ImageTextListSectionReverse';
import Footer from '@/app/components/Footer';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SmatPropPage() {
  // JSON-LD Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SmatProp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "SmatProp is a comprehensive property and tenant management system designed for landlords and property managers. It streamlines rental operations through features like tenant screening, lease management, automated online payments, expense tracking, and real-time reconciliation.",
    "brand": {
      "@type": "Brand",
      "name": "SmaTech Group"
    },
    "url": "https://smatechgroup.com/products/smatprop",
    "logo": "https://smatechgroup.com/services_icon.svg",
    "image": "https://smatechgroup.com/smat_prop_building.jpg",
    "featureList": [
      "Tenant Screening & History Checks",
      "Lease Management & Templates",
      "Online Payments & Reconciliation",
      "Expense Management",
      "Repair Allocation & Maintenance Tracking",
      "Financial Reporting",
      "White Labelled Platform",
      "Multi-Country Support"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "SmaTech Group"
      }
    }
  };

  // Stats data
  const stats = [
    { value: 40, suffix: '%', label: 'Faster Rent Collection' },
    { value: 65, suffix: '%', label: 'Reduced Vacancy Rates' },
    { value: 90, suffix: '%', label: 'Tenant Satisfaction' }
  ];

  // Animated counter component
  const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="p-6 text-center bg-white shadow-lg rounded-xl"
      >
        <div className="text-4xl font-bold text-[#03577A] mb-2">
          {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
        </div>
        <p className="text-gray-600">{label}</p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      {/* Add JSON-LD Schema to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative px-6 py-32 overflow-hidden text-left md:px-24">
  <div className="absolute inset-0 z-0 overflow-hidden">
    <Image
      src="/smat_prop_bg.png"
      alt="SmatProp background"
      fill
      className="object-cover object-center"
      priority
      quality={90}
    />
    <div className="absolute inset-0 bg-[#03577A]/20"></div>
  </div>
  
  <motion.div 
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ delay: 0.2 }}
    className="relative z-10 max-w-3xl space-y-8"
  >
    <motion.div 
      variants={fadeIn}
      className="flex items-center gap-4 mb-6"
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        {/* Custom SVG icon for SmatProp */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#8DC440]">
          <path d="M12 2L3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-9-7z" />
          <path d="M9 22V12h6v10" />
          <path d="M11 18h2" />
          <path d="M11 15h2" />
          <path d="M11 12h2" />
          <path d="M15 15h2" />
          <path d="M15 12h2" />
          <path d="M7 15h2" />
          <path d="M7 12h2" />
        </svg>
      </div>
      <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">SmatProp</h1>
    </motion.div>
    
    <motion.h2 
      variants={fadeIn}
      className="text-4xl font-bold text-white lg:text-6xl"
    >
      SmatProp
    </motion.h2>
    
    <motion.p 
      variants={fadeIn}
      className="max-w-2xl text-xl text-white"
    >
      A trusted platform to streamline your rental operations with tenant screening, lease management, automated payments, and financial reporting.
    </motion.p>
    
<motion.div variants={fadeIn}>
  <Link href="#our-mission">
    <span className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-full shadow-lg transition-all duration-300 hover:bg-[#7bb033] hover:scale-105 focus:ring-4 focus:ring-[#8DC440]/50 cursor-pointer">
      Get Started Today
    </span>
  </Link>
</motion.div>
  </motion.div>
</section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-gray-100 md:px-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <StatCounter 
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="container flex flex-col items-center gap-12 px-6 py-16 mx-auto md:flex-row md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none"
        >
          <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src="/hand-holding-house.jpg"
              alt="Hand holding a miniature house, representing property management"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="pb-4 space-y-6 md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <div className="w-20 h-1 bg-[#8DC440] rounded-full"></div>
          <p className="text-lg text-gray-600">
            Our mission is to improve the lack of accountability in the rental sector from delinquent Tenants, whilst improving processes that make it easy for landlords to collect their rental on time and efficiently. Improved financial reporting for better decision making.
          </p>
          
          <ul className="mt-6 space-y-3">
            {[
              "Streamlined rent collection processes",
              "Comprehensive tenant accountability systems",
              "Data-driven financial insights",
              "Automated payment tracking and reminders"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="w-5 h-5 mt-1 mr-3 text-[#8DC440] flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16 bg-white md:px-24 md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex items-center justify-center pt-6 text-center"
        >
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 xl:text-5xl">Key Features</h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Discover the powerful tools that make SmatProp the complete property management solution
            </p>
            <div className="w-20 h-1 bg-[#8DC440] rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mt-16"
        >
          <HorizontalFooterAccordion
            items={[
              {
                icon: <FaMoneyCheckAlt className="text-[#03577A] w-6 h-6" />,
                title: "Realtime Reconciliation",
                description: "Our systems integrate seamlessly with banks, enabling real-time reconciliation of invoice payments, automatic alerts for unpaid invoices, and detection of negative payment patterns to help protect your revenue.",
              },
              {
                icon: <FaFileContract className="text-[#03577A] w-6 h-6" />,
                title: "Relevant Lease Agreement Templates",
                description: "We work with specialized legal consultants to create reusable, compliant lease agreement templates available at no extra cost, ensuring you always have up-to-date, relevant contracts on hand.",
              },
              {
                icon: <FaShieldAlt className="text-[#03577A] w-6 h-6" />,
                title: "Blacklisting",
                description: "Maintain a secure property environment by flagging and blacklisting problem tenants to prevent repeat offenses and protect your community from rental fraud.",
              },
              {
                icon: <FaListAlt className="text-[#03577A] w-6 h-6" />,
                title: "Onboarding / Check Out Lists",
                description: "Streamline tenant move-ins and move-outs with structured onboarding and checkout checklists, ensuring all legal and property requirements are properly handled.",
              },
              {
                icon: <FaDollarSign className="text-[#03577A] w-6 h-6" />,
                title: "Easy Interest Application",
                description: "Automatically calculate and apply interest to late payments, supporting your cash flow and discouraging delayed payments without additional manual work.",
              },
              {
                icon: <FaChartLine className="text-[#03577A] w-6 h-6" />,
                title: "Expenses Management",
                description: "Gain clear oversight of your property expenses with smart tracking, categorization, and reporting tools that make it simple to control costs and optimize profitability.",
              },
              {
                icon: <FaWrench className="text-[#03577A] w-6 h-6" />,
                title: "Service Provider Management",
                description: "Easily manage and coordinate with trusted service providers for repairs and maintenance through a centralized, efficient platform that improves response times.",
              },
              {
                icon: <FaHome className="text-[#03577A] w-6 h-6" />,
                title: "White Labelled Platform",
                description: "Offer your property management services under your own brand with a fully white-labelled solution that maintains your brand identity while leveraging powerful technology.",
              },
              {
                icon: <FaCreditCard className="text-[#03577A] w-6 h-6" />,
                title: "Credit / Tenant History Checks",
                description: "Verify tenant reliability with comprehensive credit and history checks, helping you make confident leasing decisions and reduce the risk of defaults.",
              },
              {
                icon: <FaRegFileAlt className="text-[#03577A] w-6 h-6" />,
                title: "Reporting",
                description: "Generate detailed reports on payments, maintenance, and tenant activity to gain valuable insights, stay compliant, and make data-driven decisions for your property portfolio.",
              },
              {
                icon: <FaCreditCard className="text-[#03577A] w-6 h-6" />,
                title: "Flexible Payment Options",
                description: "Offer tenants modern, flexible ways to pay their rent, including scheduled payments, multiple payment gateways, and partial payment plans to improve collections.",
              },
              {
                icon: <FaTools className="text-[#03577A] w-6 h-6" />,
                title: "Repair Allocation",
                description: "Simplify repair assignments by automatically routing work to the right contractors, ensuring efficient maintenance and minimizing downtime for tenants.",
              },
              {
                icon: <FaBell className="text-[#03577A] w-6 h-6" />,
                title: "Payment Reminders",
                description: "Automated payment reminders help tenants stay on track with their obligations, reducing late payments and improving cash flow consistency.",
              },
              {
                icon: <FaGlobe className="text-[#03577A] w-6 h-6" />,
                title: "Multi-Country Support",
                description: "Manage properties across multiple countries with ease, using built-in tools for different currencies, languages, and local compliance regulations.",
              },
              {
                icon: <FaFileContract className="text-[#03577A] w-6 h-6" />,
                title: "Lease Management",
                description: "Easily draft, renew, and manage lease agreements through a centralized, automated system that minimizes paperwork and ensures accuracy.",
              },
              {
                icon: <FaMoneyCheckAlt className="text-[#03577A] w-6 h-6" />,
                title: "Online Payments",
                description: "Collect rent and fees securely through online payment processing, giving tenants a convenient, trusted, and fast way to fulfill their financial commitments.",
              },
            ]}
          />
        </motion.div>
      </section>

      {/* Commercial/Industrial Property Section */}
      <section className="px-6 py-16 bg-gray-50 md:px-24 md:py-24">
        <ImageTextListSection
          heading="Commercial/ Industrial Property"
          paragraph="While benefiting from the key features of our integrated solution, enjoy ease of management for commercial properties by the unique featured design especially for commercial industry needs. You can manage commercial areas, buildings or malls with features that meet the requirement of automation, real time collaboration and performance tracking in a better and more efficient way."
          imageSrc="/smat_prop_building.jpg"
          imageAlt="Modern commercial building managed with SmatProp"
          listItems={[
            'Common Area Maintenance',
            'Online Rent Payment',
            'E-Signatures',
            'Commercial Oriented Reporting',
            'Accounting Reports & Integrations',
            'Email Support',
          ]}
        />
      </section>

      {/* Residential Property Section */}
      <section className="px-6 py-16 bg-white md:px-24 md:py-24">
        <ImageTextListSectionReverse
          heading="Residential Property"
          paragraph="All your residential property management on the go with integrated mobile apps for landlords, tenants and vendors to streamline the ongoing communications and perform all management operations more effectively. SmatProp comes with features that suit the modern property manager to bring efficiency to work by eliminating time consuming manual tasks with automation with the following benefits"
          imageSrc="/res.jpg"
          imageAlt="Keys to a residential house managed with SmatProp"
          listItems={[
            'Online Leasing',
            'Online Rent Payment',
            'E-Signatures',
            'Documents storage',
            'Visual maintenance & inspections',
            'Email Support',
            'Smart notifications',
          ]}
        />
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-[#03577A] text-white md:px-24 md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Transform Your Property Management?</h2>
          <p className="mt-4 text-xl opacity-90">
            Join thousands of property managers who have streamlined their operations with SmatProp
          </p>
          
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
            <button className="px-8 py-4 text-lg font-bold text-[#03577A] bg-[#8DC440] rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:scale-105">
              Start Free Trial
            </button>
            <Link href="/contact-us">
  <span className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-[#03577A] cursor-pointer inline-block text-center">
    Schedule a Demo
  </span>
</Link>

            
          </div>
          
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
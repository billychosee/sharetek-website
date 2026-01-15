import Image from 'next/image'
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
} from 'react-icons/fa';
import { ImageTextListSection } from '@/app/components/ImageTextListSection';
import HorizontalFooterAccordion from '@/app/components/HorizontalFooterAccordion';
import { ImageTextListSectionReverse } from '@/app/components/ImageTextListSectionReverse';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'SmatProp | Smart Property & Tenant Management System',
  description: 'Comprehensive rental property solution with tenant screening, lease management, and automated payments for landlords and property managers.',
  openGraph: {
    title: 'SmatProp | Modern Property Management Software',
    description: 'Streamline rental operations with tenant credit checks, lease tracking, and online payment processing for residential and commercial properties.',
    url: 'https://smatechgroup.com/products/smatprop',
    siteName: 'SmaTech Group'
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

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      {/* Add JSON-LD Schema to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <div className="relative px-6 py-32 text-left md:px-24">
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/smat_prop_bg.png')" }}
        />
        <div className="relative z-10 max-w-3xl space-y-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-10 h-10">
              <Image
                src="/services_icon.svg"
                alt="SmatProp product icon"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">Our Products</h1>
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-5xl">SmatProp</h2>
          <p className="text-base text-white">
            A trusted platform to streamline your rental operations with tenant screening, <br /> lease management, automated payments, and financial reporting.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:py-24">
        {/* Image on the left */}
        <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
          <Image
            src="/hand-holding-house.jpg"
            alt="Hand holding a miniature house, representing property management"
            width={400}
            height={400}
            className="object-contain border-4 rounded-2xl"
          />
        </div>

        {/* Text on the right with underline */}
        <div className="pb-4 space-y-4 md:w-1/2 ">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <div className="pb-4 space-y-4 border-b border-black"></div>
          <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5">Our mission is to improve the lack of accountability in the rental sector from delinquent Tenants, whilst improving processes that make it easy for landlords to collect their rental on time and efficiently. Improved financial reporting for better decision making.</p>
        </div>
      </div>

      {/* Key Features */}
      <section className="px-5 md:px-24">
        <div className="flex items-center justify-center pt-6 text-center text-black md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h1 className="text-black text-3xl xl:text-[53px] font-bold">Key Features</h1>
          </div>
        </div>

        <HorizontalFooterAccordion
          items={[
            {
              icon: <FaMoneyCheckAlt className="text-[#03577A] w-6 h-6" />,
              title: "Realtime Reconciliation",
              description:
                "Our systems integrate seamlessly with banks, enabling real-time reconciliation of invoice payments, automatic alerts for unpaid invoices, and detection of negative payment patterns to help protect your revenue.",
            },
            {
              icon: <FaFileContract className="text-[#03577A] w-6 h-6" />,
              title: "Relevant Lease Agreement Templates",
              description:
                "We work with specialized legal consultants to create reusable, compliant lease agreement templates available at no extra cost, ensuring you always have up-to-date, relevant contracts on hand.",
            },
            {
              icon: <FaShieldAlt className="text-[#03577A] w-6 h-6" />,
              title: "Blacklisting",
              description:
                "Maintain a secure property environment by flagging and blacklisting problem tenants to prevent repeat offenses and protect your community from rental fraud.",
            },
            {
              icon: <FaListAlt className="text-[#03577A] w-6 h-6" />,
              title: "Onboarding / Check Out Lists",
              description:
                "Streamline tenant move-ins and move-outs with structured onboarding and checkout checklists, ensuring all legal and property requirements are properly handled.",
            },
            {
              icon: <FaDollarSign className="text-[#03577A] w-6 h-6" />,
              title: "Easy Interest Application",
              description:
                "Automatically calculate and apply interest to late payments, supporting your cash flow and discouraging delayed payments without additional manual work.",
            },
            {
              icon: <FaChartLine className="text-[#03577A] w-6 h-6" />,
              title: "Expenses Management",
              description:
                "Gain clear oversight of your property expenses with smart tracking, categorization, and reporting tools that make it simple to control costs and optimize profitability.",
            },
            {
              icon: <FaWrench className="text-[#03577A] w-6 h-6" />,
              title: "Service Provider Management",
              description:
                "Easily manage and coordinate with trusted service providers for repairs and maintenance through a centralized, efficient platform that improves response times.",
            },
            {
              icon: <FaHome className="text-[#03577A] w-6 h-6" />,
              title: "White Labelled Platform",
              description:
                "Offer your property management services under your own brand with a fully white-labelled solution that maintains your brand identity while leveraging powerful technology.",
            },
            {
              icon: <FaCreditCard className="text-[#03577A] w-6 h-6" />,
              title: "Credit / Tenant History Checks",
              description:
                "Verify tenant reliability with comprehensive credit and history checks, helping you make confident leasing decisions and reduce the risk of defaults.",
            },
            {
              icon: <FaRegFileAlt className="text-[#03577A] w-6 h-6" />,
              title: "Reporting",
              description:
                "Generate detailed reports on payments, maintenance, and tenant activity to gain valuable insights, stay compliant, and make data-driven decisions for your property portfolio.",
            },
            {
              icon: <FaCreditCard className="text-[#03577A] w-6 h-6" />,
              title: "Flexible Payment Options",
              description:
                "Offer tenants modern, flexible ways to pay their rent, including scheduled payments, multiple payment gateways, and partial payment plans to improve collections.",
            },
            {
              icon: <FaTools className="text-[#03577A] w-6 h-6" />,
              title: "Repair Allocation",
              description:
                "Simplify repair assignments by automatically routing work to the right contractors, ensuring efficient maintenance and minimizing downtime for tenants.",
            },
            {
              icon: <FaBell className="text-[#03577A] w-6 h-6" />,
              title: "Payment Reminders",
              description:
                "Automated payment reminders help tenants stay on track with their obligations, reducing late payments and improving cash flow consistency.",
            },
            {
              icon: <FaGlobe className="text-[#03577A] w-6 h-6" />,
              title: "Multi-Country Support",
              description:
                "Manage properties across multiple countries with ease, using built-in tools for different currencies, languages, and local compliance regulations.",
            },
            {
              icon: <FaFileContract className="text-[#03577A] w-6 h-6" />,
              title: "Lease Management",
              description:
                "Easily draft, renew, and manage lease agreements through a centralized, automated system that minimizes paperwork and ensures accuracy.",
            },
            {
              icon: <FaMoneyCheckAlt className="text-[#03577A] w-6 h-6" />,
              title: "Online Payments",
              description:
                "Collect rent and fees securely through online payment processing, giving tenants a convenient, trusted, and fast way to fulfill their financial commitments.",
            },
          ]}
        />
      </section>

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

      <Footer />
    </div>
  )
}
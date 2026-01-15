import { Metadata } from "next";
import Script from "next/script";
import { ImageTextIconListSection } from "@/app/components/ImageTextIconListSection";
import { ImageTextIconListSectionReverse } from "@/app/components/ImageTextIconListSectionReverse";
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import Footer from "@/app/components/Footer";
import FeatureCard from "@/app/components/FeatureCard";
import { CtaSection } from "@/app/components/CtaSection";
import {
  Building2,
  Home,
  LandPlot,
  Hammer,
  Key,
  LineChart,
  ShieldCheck,
  Wifi,
  Camera,
  HandCoins,
  ClipboardList,
  Warehouse,
  Banknote,
  Users,
  Smartphone,
  Zap,
  BarChart,
  Server,
  Lock,
  Database,
  LayoutGrid,
  ScanFace,
  Map,
  DollarSign,
  CircleDollarSign,
  BookOpenCheck,
  ClipboardCheck,
  Building,
  HardHat,
  ScanEye,
  ArrowRight,
} from "lucide-react";
import FlipCard from "@/app/components/FlipCard";

export const metadata: Metadata = {
  title: "PropTech Solutions for Zimbabwe & Africa | Sharetek Group",
  description:
    "Transform real estate with custom PropTech solutions including Property Management Systems, Smart Building IoT, Digital Marketplaces, and Construction Technology for African markets.",
  keywords:
    "PropTech Zimbabwe, property management software, real estate technology, smart buildings Africa, construction tech, property valuation, real estate marketplaces, digital land records, property security systems",
  openGraph: {
    title: "PropTech Solutions for Zimbabwe & Africa | Sharetek Group",
    description:
      "Revolutionizing real estate operations, property management, and urban development across Africa with intelligent technology solutions.",
    url: "https://sharetek.co.za/industries/proptech",
    type: "website",
  },
};

export default function PropTech() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sharetek Group PropTech Solutions",
    description:
      "Comprehensive property technology solutions for African real estate including property management systems, smart building IoT, and digital marketplaces.",
    url: "https://sharetek.co.za/industries/proptech",
    logo: "https://sharetek.co.za/Sharetek_logo.svg",
    sameAs: [
      "https://twitter.com/Sharetekgroup",
      "https://linkedin.com/company/Sharetekgroup",
    ],
    offers: {
      "@type": "OfferCatalog",
      name: "PropTech Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Management Systems",
            description:
              "Comprehensive PMS for residential, commercial and industrial properties",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Building Solutions",
            description:
              "IoT integration for energy management and predictive maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Real Estate Marketplaces",
            description:
              "Digital platforms for property listings, sales and rentals",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Technology",
            description:
              "Project management tools with BIM integration and drone mapping",
          },
        },
      ],
    },
  };

  const coreSolutions = [
    {
      icon: Building2,
      title: "Property Management Systems",
      description:
        "Comprehensive PMS for rent collection, tenant management, maintenance, and financial reporting.",
    },
    {
      icon: Map,
      title: "Digital Real Estate Marketplaces",
      description:
        "Advanced platforms with virtual tours, 3D visualizations, and lead management tools.",
    },
    {
      icon: Wifi,
      title: "Smart Building IoT",
      description:
        "Energy management, environmental monitoring, and predictive maintenance solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Access Control",
      description:
        "Biometric systems, CCTV integration, and centralized security dashboards.",
    },
    {
      icon: HardHat,
      title: "Construction Technology",
      description:
        "Project management tools, BIM integration, and drone mapping for construction sites.",
    },
    {
      icon: CircleDollarSign,
      title: "Real Estate Investment Platforms",
      description:
        "Crowdfunding, fractional ownership, and investment portfolio management.",
    },
    {
      icon: LineChart,
      title: "Property Valuation & Analytics",
      description:
        "AVMs, market forecasting, and data-driven investment insights.",
    },
    {
      icon: BookOpenCheck,
      title: "Land Digitization",
      description:
        "Solutions for formalizing land records and digitizing registries.",
    },
  ];

  const useCases = [
    {
      title: "SmatProp",
      imageSrc: "/smatprop-usecase.jpg",
      infoHeading: "Property Management Platform! ",
      infoDescription:
        "Smatprop is a smart digital property management solution designed to streamline and automate various tasks associated with property management. It is a comprehensive platform that assists property owners, managers, and landlords in effectively managing their real estate portfolios.",
      ctaLink: "/products/smat-prop",
    },
    {
      title: "SmatAccess",
      imageSrc: "/smataccess-usecase.jpg",
      infoHeading: "Physical Access Control Solution",
      infoDescription:
        "Revolutionize your security with a fully integrated solution. SmatAccess unites cutting-edge software with purpose-built, intelligent devices to give you complete control over every access point in your organization. From real-time monitoring and automated reporting to seamless scalability, our platform ensures that your security system is not just protective, but proactive. Whether you’re managing a single facility or multiple locations, SmatAccess delivers the reliability, efficiency, and peace of mind you need to safeguard what matters most.",
      ctaLink: "/",
    },
    // {
    //   title: "LandDigital",
    //   imageSrc: "/land-records.jpg",
    //   infoHeading: "Digital Land Registry Solutions",
    //   infoDescription: "We help governments and municipalities digitize land records, creating transparent, accessible systems that reduce disputes, streamline transactions, and support urban planning initiatives across African markets.",
    //   ctaLink: "/"
    // },
  ];

  return (
    <div className="pt-10 text-black bg-white md:pt-24">
      <Script
        id="proptech-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 space-y-6 text-center">
        <p className="text-sm font-bold text-[#27282C] pt-20 md:pt-0">
          PROPERTY TECHNOLOGY
        </p>
        <h1 className="text-[#A00927] text-3xl xl:text-4xl font-bold lg:text-4xl">
          Shaping the Future of Property in Zimbabwe & Africa
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Revolutionizing real estate operations, property management, and urban
          development with intelligent, secure, and integrated technology
          solutions.
        </p>
      </section>

      {/* Core Solutions - 8 items in 2 rows of 4 */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        {/* Adjusted to always show 2 columns on small screens and 4 on large screens for 2 perfect rows */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreSolutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </section>

      {/* Property Management Systems - (Requires internal component modification for iconItems layout) */}
      <ImageTextIconListSectionReverse
        heading="Property Management Systems"
        description="Our comprehensive Property Management Systems (PMS) streamline operations for residential, commercial, and industrial properties, automating rent collection, maintenance requests, and financial reporting while integrating security and smart building features."
        imageSrc="/property_management.jpg"
        imageAlt="Property management dashboard"
        iconItems={[
          {
            icon: <Building2 className="w-8 h-8" />,
            title: "Portfolio Management",
            text: "Centralized dashboard for all your properties",
          },
          {
            icon: <Banknote className="w-8 h-8" />,
            title: "Automated Payments",
            text: "Secure online rent collection and financial tracking",
          },
          {
            icon: <ClipboardCheck className="w-8 h-8" />,
            title: "Maintenance Tracking",
            text: "Streamlined work order management",
          },
          {
            icon: <Key className="w-8 h-8" />,
            title: "Tenant Portal",
            text: "Self-service features for tenants",
          },
        ]}
      />

      {/* Digital Marketplaces - (Requires internal component modification for iconItems layout) */}
      <ImageTextIconListSection
        heading="Digital Real Estate Marketplaces"
        description="Create powerful online platforms for property listings, sales, and rentals with advanced search functionalities, immersive virtual tours, and efficient lead management tools to connect buyers, sellers, and agents."
        imageSrc="/real_estate_marketplace.png"
        imageAlt="Digital real estate marketplace interface"
        iconItems={[
          {
            icon: <ScanEye className="w-8 h-8" />,
            title: "Immersive Listings",
            text: "Virtual tours and 3D property visualizations",
          },
          {
            icon: <LineChart className="w-8 h-8" />,
            title: "Advanced Search",
            text: "Custom filters for precise property matching",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Lead Management",
            text: "Tools to track and convert potential clients",
          },
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Optimized",
            text: "Responsive design for all devices",
          },
        ]}
      />

      {/* Smart Building Solutions - (Requires internal component modification for iconItems layout) */}
      <ImageTextIconListSectionReverse
        heading="Smart Building & IoT Solutions"
        description="Transform traditional buildings into intelligent, connected environments with our IoT solutions for energy management, environmental monitoring, predictive maintenance, and automated security features."
        imageSrc="/smart_building.jpg"
        imageAlt="Smart building control panel"
        iconItems={[
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Energy Optimization",
            text: "Smart lighting and HVAC control systems",
          },
          {
            icon: <Wifi className="w-8 h-8" />,
            title: "Environmental Monitoring",
            text: "Real-time air quality and temperature tracking",
          },
          {
            icon: <Hammer className="w-8 h-8" />,
            title: "Predictive Maintenance",
            text: "Identify equipment issues before they occur",
          },
          {
            icon: <Database className="w-8 h-8" />,
            title: "Centralized Control",
            text: "Unified platform for all building systems",
          },
        ]}
      />

      {/* Security & Access Control - (Requires internal component modification for iconItems layout) */}
      <ImageTextIconListSection
        heading="Security & Access Control"
        description="Our advanced security solutions integrate biometric access control, CCTV surveillance, and alarm systems into centralized dashboards, providing comprehensive property protection with real-time monitoring and alerts."
        imageSrc="/property_security.jpg"
        imageAlt="Property security control room"
        iconItems={[
          {
            icon: <ScanFace className="w-8 h-8" />,
            title: "Biometric Access",
            text: "Fingerprint and facial recognition systems",
          },
          {
            icon: <Camera className="w-8 h-8" />,
            title: "CCTV Integration",
            text: "Centralized surveillance management",
          },
          {
            icon: <Lock className="w-8 h-8" />,
            title: "Real-time Alerts",
            text: "Instant notifications for security events",
          },
          {
            icon: <Server className="w-8 h-8" />,
            title: "Secure Architecture",
            text: "Encrypted data and network security",
          },
        ]}
      />

      {/* Construction Technology - (Requires internal component modification for iconItems layout) */}
      <ImageTextIconListSectionReverse
        heading="Construction Technology"
        description="Streamline construction projects with our digital tools for planning, budget tracking, resource allocation, and progress monitoring, integrating BIM, drone mapping, and mobile data collection."
        imageSrc="/construction_tech.png"
        imageAlt="Construction site with digital planning"
        iconItems={[
          {
            icon: <HardHat className="w-8 h-8" />,
            title: "Project Planning",
            text: "Digital tools for scheduling and coordination",
          },
          {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Budget Tracking",
            text: "Real-time cost monitoring and forecasting",
          },
          {
            icon: <Warehouse className="w-8 h-8" />,
            title: "BIM Integration",
            text: "Building Information Modeling support",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: "Progress Analytics",
            text: "Data-driven insights into project status",
          },
        ]}
      />

      {/* New Use Cases Section with Flip Cards */}
      <section className="px-4 py-20 mx-auto text-center max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-black xl:text-4xl lg:text-4xl">
          Our PropTech Use Cases
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {useCases.map((useCase, index) => (
            <FlipCard
              key={index}
              title={useCase.title}
              imageSrc={useCase.imageSrc}
              infoHeading={useCase.infoHeading}
              infoDescription={useCase.infoDescription}
              ctaLink={useCase.ctaLink}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-5 md:pb-14">
        <div className="flex flex-col items-center px-4 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-black xl:text-4xl lg:text-4xl">
            PropTech Solutions FAQs
          </h2>
        </div>

        <ImageLeftAccordionRight
          imageSrc="/proptech_africa.jpg"
          imageAlt="Digital transformation of African real estate"
          items={[
            {
              question:
                "Can your Property Management System integrate with our existing security systems?",
              answer:
                "Yes, we specialize in integrating PMS platforms with biometric devices, CCTV networks, and access control systems for a unified property management solution.",
            },
            {
              question:
                "How can digital marketplaces benefit real estate agencies?",
              answer:
                "Our digital marketplaces increase visibility for listings, provide immersive virtual tours to attract more qualified leads, and streamline the entire sales process with integrated CRM tools.",
            },
            {
              question: "What ROI can we expect from smart building solutions?",
              answer:
                "Smart building technologies typically reduce operational costs by 15-30% through energy optimization and predictive maintenance while enhancing tenant satisfaction and property value.",
            },
            {
              question: "Do you offer solutions for informal property markets?",
              answer:
                "Absolutely. We develop solutions for digitizing and formalizing informal property markets, including land record systems tailored to local contexts.",
            },
          ]}
        />
      </section>

      {/* CTA Section */}
      <CtaSection
        heading="Ready to Transform Your Property Operations?"
        description="Partner with Sharetek Group to implement cutting-edge PropTech solutions tailored for African real estate markets."
        primaryButton={{
          text: "Request a Consultation",
          url: "/contact-us",
        }}
        secondaryButton={{
          text: "Explore Our PropTech Solutions",
          url: "/solutions/proptech",
        }}
      />

      <Footer />
    </div>
  );
}

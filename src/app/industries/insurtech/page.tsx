// app/insuretech/page.tsx
import { Metadata } from "next";
import Script from "next/script";
import { ImageTextIconListSection } from "@/app/components/ImageTextIconListSection";
import { ImageTextIconListSectionReverse } from "@/app/components/ImageTextIconListSectionReverse";
import {
  Shield,
  Smartphone,
  Zap,
  CreditCard,
  BarChart,
  Globe,
  Lock,
  Cpu,
  Server,
  Database,
  Code,
  Scale,
  MessageSquare,
  Briefcase,
  FileText,
  Repeat,
  Layers,
  Search,
  DollarSign,
  Lightbulb,
  UserCheck,
  Link,
} from "lucide-react";
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import Footer from "@/app/components/Footer";
import FeatureCard from "@/app/components/FeatureCard";
import { CtaSection } from "@/app/components/CtaSection";
import { ImageTextListSection } from "@/app/components/ImageTextListSection";
import { ImageTextListSectionReverse } from "@/app/components/ImageTextListSectionReverse";

export const metadata: Metadata = {
  title: "Insurtech Solutions | Sharetek Group",
  description:
    "Cutting-edge insurtech solutions for insurers, brokers, and reinsurers in Zimbabwe & Africa. Modernize operations, reduce risk, and scale confidently.",
  keywords:
    "insurtech Zimbabwe, digital insurance Africa, policy management system, reinsurance automation, embedded insurance, microinsurance, AI in insurance",
  openGraph: {
    title: "Insurtech Solutions | Sharetek Group",
    description:
      "Enabling the digital transformation of the insurance sector with secure, intelligent, and compliant insurtech platforms.",
    url: "https://sharetek.co.za/industries/insuretech",
    type: "website",
  },
};

export default function Insuretech() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Insurtech Technology Solutions",
    provider: {
      "@type": "Organization",
      name: "Sharetek Group",
      url: "https://sharetek.co.za",
      logo: "https://sharetek.co.za/Sharetek_logo.svg",
    },
    description:
      "Custom insurtech solutions for digital policy management, risk externalization, reinsurance automation, and embedded insurance.",
    areaServed: {
      "@type": "Country",
      name: ["ZW", "ZA", "NG", "KE"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurtech Capabilities",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Policy & Claims Management Systems",
            description:
              "Automate end-to-end policy lifecycle, underwriting, renewals, and claims.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reinsurance Platforms & Risk Externalisation",
            description:
              "Automate reinsurance workflows with digital treaty and facultative contract management.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Embedded Insurance & Partner Integration APIs",
            description:
              "Enable insurance sales across digital platforms with flexible APIs.",
          },
        },
      ],
    },
  };

  const insuretechCapabilities = [
    {
      icon: Code,
      title: "Digitize Policy Onboarding & Sales",
      description:
        "Streamline customer acquisition with digital KYC and automated underwriting rules.",
    },
    {
      icon: Zap,
      title: "Automate Claims Processing",
      description:
        "Accelerate claim resolution with real-time validation and documentation uploads.",
    },
    {
      icon: Repeat,
      title: "Externalize Risk",
      description:
        "Optimize risk management through automated reinsurance mechanisms.",
    },
    {
      icon: Link,
      title: "Enable Embedded Insurance",
      description:
        "Offer insurance seamlessly within other digital platforms via flexible APIs.",
    },
    {
      icon: Scale,
      title: "Integrate with Regulatory Frameworks",
      description:
        "Ensure compliance with IPEC and regional guidelines through automated reporting.",
    },
    {
      icon: BarChart,
      title: "Analyze Risk with Data",
      description:
        "Leverage actuarial and behavioral data for intelligent underwriting decisions.",
    },
  ];

  const whoWeServeClients = [
    {
      title: "Insurers & Underwriters",
      description:
        "Digitize core operations, launch new digital offerings, and enhance customer experience.",
    },
    {
      title: "Reinsurers & Risk Managers",
      description:
        "Automate treaties, claims recoveries, and optimize risk pooling across portfolios.",
    },
    {
      title: "Brokers & Agents",
      description:
        "Streamline lead management, commission tracking, and provide superior client support.",
    },
    {
      title: "Startups & Aggregators",
      description:
        "Rapidly deploy new insurance apps, embedded models, and innovative product lines.",
    },
    {
      title: "Agri-Techs & NGOs",
      description:
        "Implement accessible microinsurance and index-based solutions for rural communities.",
    },
    {
      title: "Regulators & Public Sector",
      description:
        "Develop RegTech integrations and robust compliance systems for market oversight.",
    },
  ];

  const faqItems = [
    {
      question: "How does Sharetek's insurtech work for microinsurance?",
      answer:
        "We support USSD, mobile money premiums, and weather-indexed agriculture insurance for low-income markets, making insurance accessible to a broader population.",
    },
    {
      question: "Is your platform compliant with IPEC?",
      answer:
        "Yes! Our solutions include automated IPEC reporting, ZIMRA EFD integration, and GDPR-aligned data privacy measures to ensure full regulatory compliance.",
    },
    {
      question: "Can we integrate with existing core systems?",
      answer:
        "Absolutely. Our modular APIs are designed for seamless integration with a wide range of legacy systems, minimizing disruption and maximizing compatibility.",
    },
    {
      question:
        "What makes Sharetek Group a trusted insurtech partner in Africa?",
      answer:
        "Our deep understanding of local regulations, unique market challenges, and our commitment to building solutions tailored for African contexts, combined with dedicated local support, sets us apart.",
    },
  ];

  const ctaProps = {
    heading: "Ready to Transform Your Insurance Business?",
    description:
      "Partner with Sharetek to build smart, scalable, and future-ready insurtech systems.",
    primaryButton: {
      text: "Book a Free Insurtech Consultation",
      url: "/contact-us",
    },
    secondaryButton: {
      text: "Request a Reinsurance Platform Demo",
      url: "/contact-us",
    },
  };

  const introductionSectionProps = {
    heading: "The Insurance Sector at a Crossroads in Africa",
    paragraph:
      "Insurance in Zimbabwe and Africa is shifting rapidly. As regulatory demands increase and customer expectations evolve, traditional insurers, brokers, and underwriters face pressure to digitize, automate, and externalize risk more effectively.",
    imageSrc: "/african_insurance_crossroads.jpg",
    imageAlt: "Digital transformation of insurance in Africa",
    listItems: [
      "Digitize core operations for efficiency.",
      "Automate key processes like claims and underwriting.",
      "Effectively externalize and manage risk.",
      "Meet evolving customer expectations with modern solutions.",
      "Comply with increasing regulatory demands across the continent.",
    ],
  };

  const whyPartnerSharetekProps = {
    heading: "Why Partner with Sharetek for Insuretech?",
    paragraph:
      "At Sharetek Group, we build next-generation Insuretech platforms tailored for Africa's unique challenges. We provide the tools, APIs, and support to help you transform your insurance business by focusing on key areas:",
    imageSrc: "/Sharetek_partnership_benefits.jpg",
    imageAlt: "Benefits of partnering with Sharetek for Insuretech",
    listItems: [
      "Deep understanding of Zimbabwe's insurance regulations, processes, and limitations.",
      "Expertise in reinsurance, building digital treaty, cession, and recoveries systems.",
      "Modular architecture allowing you to pick only what you need: APIs, portals, engines, or the full platform.",
      "Solutions built for Africa, supporting offline access, mobile money payments, USSD, and local languages.",
      "Ensuring local and global compliance with IPEC, RBZ, and international solvency standards.",
      "Dedicated local support from our Zimbabwe-based team, from implementation to post-launch.",
    ],
  };

  const whoWeServeProps = {
    heading: "Who We Serve Across the Insurance Ecosystem",
    paragraph:
      "Sharetek Group's Insuretech solutions empower a diverse range of stakeholders across the insurance ecosystem, addressing their unique needs:",
    imageSrc: "/insurtech_who_we_serve.jpg",
    imageAlt: "Diverse stakeholders in the insurance industry",
    listItems: whoWeServeClients.map(
      (client) => `${client.title}: ${client.description}`
    ),
  };

  return (
    <div className="pt-10 text-black bg-white md:pt-24">
      <Script
        id="insuretech-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 space-y-6 text-center">
        <p className="text-sm font-bold text-[#27282C] pt-20 md:pt-0">
          INSURANCE TECHNOLOGY
        </p>
        <h1 className="text-[#A00927] text-3xl xl:text-4xl font-bold lg:text-4xl">
          Revolutionizing Insurtech in Zimbabwe & Africa
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering financial institutions and businesses with secure,
          scalable, and compliant digital finance solutions.
        </p>
      </section>

      {/* --- */}

      {/* Hero Image */}
      {/* <div className="flex justify-center my-12">
        <img
          src="/pattern_bg.png"
          alt="Digital policy workflows, customer dashboards, or insurance analytics"
          className="object-cover h-auto max-w-full"
          style={{ maxHeight: '400px', width: 'auto' }}
        />
      </div> */}

      {/* --- */}

      {/* Introduction: The Insurance Sector at a Crossroads - Replaced with ImageTextListSection */}
      <ImageTextListSection {...introductionSectionProps} />

      {/* --- */}

      {/* Sharetek Group's Insuretech Capabilities */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-[#A00927] text-3xl xl:text-[40px] font-bold lg:text-4xl mb-4">
            Sharetek Group's Insuretech Capabilities
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            We offer a full-stack suite of modern insurance technologies
            tailored for the African and global insurance value chain. From
            front-end sales to complex back-office and regulatory integration,
            we help you:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insuretechCapabilities.map((capability, index) => (
            <FeatureCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </section>

      {/* --- */}

      {/* 1. Policy & Claims Management Systems */}
      <ImageTextIconListSectionReverse
        heading="1. Policy & Claims Management Systems"
        description="Automate and streamline your end-to-end policy lifecycle — from underwriting to renewals and claims."
        imageSrc="/policy_claims_management.jpg"
        imageAlt="Digital policy and claims management system dashboard"
        iconItems={[
          {
            icon: <FileText className="w-8 h-8" />,
            title: "Digital Policy Issuance & Onboarding",
            text: "Streamline KYC and underwriting rules for quick policy issuance.",
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Claims Automation",
            text: "Enable documentation uploads and verification for faster claim processing.",
          },
          {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Notifications & Portals",
            text: "SMS, Email, WhatsApp notifications and dedicated broker/agent portals.",
          },
          {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Multi-Product Support",
            text: "Handle various insurance products: Life, Health, Motor, Agriculture, Funeral.",
          },
        ]}
      />

      {/* --- */}

      {/* 2. Reinsurance Platforms & Risk Externalisation */}
      <ImageTextIconListSection
        heading="2. Reinsurance Platforms & Risk Externalisation"
        description="Automate and simplify your reinsurance workflows with digital treaty & facultative contract management."
        imageSrc="/reinsurance_platform.jpg"
        imageAlt="Reinsurance platform dashboard with graphs"
        iconItems={[
          {
            icon: <Layers className="w-8 h-8" />,
            title: "Treaty & Facultative Management",
            text: "Capture terms, cessions, limits, and automate calculations.",
          },
          {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Premium Cession & Recoveries",
            text: "Automate premium cession calculations and claims recoveries workflows.",
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Multi-layered Risk Pooling",
            text: "Tools for risk diversification and compliant cross-border externalization.",
          },
          {
            icon: <Repeat className="w-8 h-8" />,
            title: "Retrocession Automation",
            text: "Efficiently manage retrocession processes for comprehensive risk transfer.",
          },
        ]}
      />

      {/* --- */}

      {/* 3. Embedded Insurance & Partner Integration APIs */}
      <ImageTextIconListSectionReverse
        heading="3. Embedded Insurance & Partner Integration APIs"
        description="Enable insurance sales across digital platforms — from e-commerce and banking to retail apps — with powerful, flexible APIs."
        imageSrc="/embedded_insurance.jpg"
        imageAlt="Various digital platforms integrating embedded insurance"
        iconItems={[
          {
            icon: <Code className="w-8 h-8" />,
            title: "Quote & Bind APIs",
            text: "APIs for seamless product comparison and purchasing within partner platforms.",
          },
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Claims Submission APIs",
            text: "Facilitate direct claims submission from any integrated application.",
          },
          {
            icon: <CreditCard className="w-8 h-8" />,
            title: "API Monetization Gateway",
            text: "Secure gateway for managing and monetizing embedded product partnerships.",
          },
          {
            icon: <Link className="w-8 h-8" />,
            title: "Retail & Telco Integration",
            text: "Seamless integration with retail, banking, telco & remittance partners.",
          },
        ]}
      />

      {/* --- */}

      {/* CTA Section - Transforming Insurance in Africa */}
      <CtaSection
        heading="Transforming Insurance in Africa"
        description="Helping insurers, brokers, and reinsurers digitize workflows, reduce risk, and scale with secure, intelligent platforms tailored for Zimbabwe and Africa."
        primaryButton={{
          text: "Book a Free Insurtech Consultation",
          url: "/contact-us",
        }}
        secondaryButton={{
          text: "Request a Reinsurance Platform Demo",
          url: "/contact-us",
        }}
      />

      {/* 4. Insurance Analytics & Underwriting Intelligence */}
      <ImageTextIconListSection
        heading="4. Insurance Analytics & Underwriting Intelligence"
        description="Leverage actuarial science and machine learning to automate decision-making and improve risk models."
        imageSrc="/insurance_analytics.jpg"
        imageAlt="Insurance analytics dashboard showing data insights"
        iconItems={[
          {
            icon: <BarChart className="w-8 h-8" />,
            title: "Actuarial Modeling",
            text: "Analyze loss ratios, reserves, and claims experience for better insights.",
          },
          {
            icon: <Search className="w-8 h-8" />,
            title: "Predictive Risk Scoring & Fraud Detection",
            text: "Utilize behavioral analytics for accurate risk assessment and fraud prevention.",
          },
          {
            icon: <Cpu className="w-8 h-8" />,
            title: "Customer Lifetime Value",
            text: "Predict customer lifetime value and optimize claims cost estimation.",
          },
          {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Claims Cost Estimation",
            text: "Algorithms to accurately estimate claims costs, aiding financial planning.",
          },
        ]}
      />

      {/* --- */}

      {/* 5. Microinsurance & Alternative Insurance Models */}
      <ImageTextIconListSectionReverse
        heading="5. Microinsurance & Alternative Insurance Models"
        description="Support alternative models like pay-as-you-go, low-premium, high-volume microinsurance and index-based insurance."
        imageSrc="/microinsurance.jpg"
        imageAlt="People in a rural setting engaging with microinsurance"
        iconItems={[
          {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Mobile Money Premium Collection",
            text: "Enable easy premium payments via popular mobile money platforms.",
          },
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: "USSD-enabled Microinsurance",
            text: "Reach underserved populations with accessible USSD platforms.",
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Index-based & Group Insurance",
            text: "Modules for crop/weather index-based insurance and community underwriting models.",
          },
          {
            icon: <Search className="w-8 h-8" />,
            title: "Geo-spatial Agri-Risk Analytics",
            text: "Leverage geo-spatial data for agri-risk and drought/flood coverage.",
          },
        ]}
      />

      {/* --- */}

      {/* 6. Regulatory Compliance & Integration */}
      <ImageTextIconListSection
        heading="6. Regulatory Compliance & Integration"
        description="Stay compliant with IPEC, ZIMRA, and cross-border regulations through automated reporting and integrations."
        imageSrc="/regulatory_compliance.jpg"
        imageAlt="Compliance documents and regulatory symbols"
        iconItems={[
          {
            icon: <Shield className="w-8 h-8" />,
            title: "IPEC-compliant Reporting",
            text: "Automated engines for generation of regulatory reports.",
          },
          {
            icon: <Scale className="w-8 h-8" />,
            title: "ZIMRA & Fiscalization",
            text: "Integration with ZIMRA for VAT, transaction audits, and automated fiscalization.",
          },
          {
            icon: <Lock className="w-8 h-8" />,
            title: "Data Privacy Compliance",
            text: "Adherence to GDPR principles with policyholder data privacy and masking.",
          },
          {
            icon: <Database className="w-8 h-8" />,
            title: "Risk Retention Tracking",
            text: "Tools for monitoring risk retention versus reinsurance coverage.",
          },
        ]}
      />

      {/* --- */}

      {/* 7. AI-Powered Risk & Claims Tools */}
      <ImageTextIconListSectionReverse
        heading="7. AI-Powered Risk & Claims Tools"
        description="Apply AI to improve fraud detection, risk scoring, and customer engagement."
        imageSrc="/ai_insurance.jpg"
        imageAlt="AI brain icon superimposed on insurance data"
        iconItems={[
          {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "AI-powered Chatbots",
            text: "Intelligent chatbots for enhanced policy servicing and customer support.",
          },
          {
            icon: <Cpu className="w-8 h-8" />,
            title: "Smart Claim Approval Engines",
            text: "Automated and intelligent systems for quicker claims validation and approval.",
          },
          {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Facial Recognition & Fraud Detection",
            text: "Leverage AI for life verification and behavioral fraud detection during underwriting.",
          },
          {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Auto-categorization of Incidents",
            text: "Automatically categorize incidents and claims for efficient processing.",
          },
        ]}
      />

      {/* --- */}

      {/* 8. White-label Insurance Platforms */}
      <ImageTextIconListSection
        heading="8. White-label Insurance Platforms"
        description="Launch a fully branded insurance or microinsurance platform — built to scale."
        imageSrc="/white_label_platform.jpg"
        imageAlt="Generic digital insurance platform with branding options"
        iconItems={[
          {
            icon: <Server className="w-8 h-8" />,
            title: "Admin Dashboard",
            text: "Full configuration control and comprehensive management features.",
          },
          {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Branded Web & Mobile Apps",
            text: "Deliver a seamless, branded experience for policyholders, agents, and brokers.",
          },
          {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Built-in Marketing & Nurturing",
            text: "Integrated tools for SMS, lead nurturing, and marketing campaigns.",
          },
          {
            icon: <Globe className="w-8 h-8" />,
            title: "Multi-language, Multi-currency",
            text: "Support for diverse markets with multi-language and multi-currency capabilities.",
          },
        ]}
      />

      {/* --- */}

      {/* Who We Serve Section - Now using ImageTextListSection */}
      <ImageTextListSectionReverse {...whoWeServeProps} />

      {/* --- */}

      {/* Why Partner with Sharetek for Insuretech? - Replaced with ImageTextListSection */}
      <ImageTextListSection {...whyPartnerSharetekProps} />

      {/* --- */}

      {/* CTA Section - Ready to Transform */}
      <CtaSection {...ctaProps} />

      {/* --- */}

      {/* FAQ Section */}
      <section className="py-5 md:py-14">
        <div className="flex flex-col items-center px-4 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-black xl:text-4xl lg:text-4xl">
            Insurtech FAQs
          </h2>
        </div>
        <ImageLeftAccordionRight
          imageSrc="/insurtech_africa_faq.jpg"
          imageAlt="Digital insurance in the African market"
          items={faqItems}
        />
      </section>

      <Footer />
    </div>
  );
}

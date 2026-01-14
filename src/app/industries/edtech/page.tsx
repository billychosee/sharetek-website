import { Metadata } from "next";
import Script from 'next/script';
import { ImageTextIconListSection } from "@/app/components/ImageTextIconListSection";
import { ImageTextIconListSectionReverse } from "@/app/components/ImageTextIconListSectionReverse";
import { BookOpen, GraduationCap, Users, MonitorSmartphone, BrainCircuit, Gamepad2, BookMarked, Shield, Lock, Cpu, Server, Database, Code, Scale, LayoutGrid, Smartphone, Zap, BarChart } from "lucide-react";
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import Footer from "@/app/components/Footer";
import FeatureCard from "@/app/components/FeatureCard";
import { CtaSection } from "@/app/components/CtaSection";
import FlipCard from "@/app/components/FlipCard";

export const metadata: Metadata = {
  title: "EdTech Solutions for Zimbabwe & Africa | Sharetek Group",
  description: "Transform education with custom EdTech solutions including Learning Management Systems, AI-powered lesson planning, gamification, and school management systems for African institutions.",
  keywords: "EdTech Zimbabwe, digital learning solutions, LMS Africa, school management systems, AI in education, gamified learning, virtual classrooms, educational technology, curriculum digitization, ZIMSEC, Cambridge",
  openGraph: {
    title: "EdTech Solutions for Zimbabwe & Africa | Sharetek Group",
    description: "Empowering educational institutions with cutting-edge EdTech solutions tailored for African contexts.",
    url: "https://Sharetekgroup.com/industries/edtech",
    type: "website",
  },
};

export default function EdTech() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sharetek Group EdTech Solutions",
    "description": "Comprehensive educational technology solutions for African institutions including LMS platforms, school management systems, and AI-powered educational tools.",
    "url": "https://Sharetekgroup.com/industries/edtech",
    "logo": "https://Sharetekgroup.com/Sharetek_logo.svg",
    "sameAs": [
      "https://twitter.com/Sharetekgroup",
      "https://linkedin.com/company/Sharetekgroup"
    ],
    "offers": {
      "@type": "OfferCatalog",
      "name": "EdTech Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Learning Management Systems",
            "description": "Custom LMS platforms for schools and universities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "School Management Systems",
            "description": "Comprehensive SMS with AI-powered lesson planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interactive Learning Technologies",
            "description": "Gamification, VR/AR, and smart board integrations"
          }
        }
      ]
    }
  };

  const coreSolutions = [
    {
      icon: GraduationCap,
      title: "Learning Management Systems",
      description: "Custom LMS platforms for schools, universities, and corporate training with mobile responsiveness."
    },
    {
      icon: BookOpen,
      title: "Digital Content Creation",
      description: "Interactive modules, video lessons, and curriculum digitization (ZIMSEC, Cambridge)."
    },
    {
      icon: Users,
      title: "School Management Systems",
      description: "Comprehensive SMS with AI-powered lesson planning, attendance tracking, and security."
    },
    {
      icon: Gamepad2,
      title: "Interactive Learning",
      description: "Gamification elements, VR/AR experiences, and smart board integrations."
    },
    {
      icon: BrainCircuit,
      title: "AI in Education",
      description: "Adaptive learning platforms, intelligent tutoring, and automated assessments."
    },
    {
      icon: MonitorSmartphone,
      title: "Accessibility Solutions",
      description: "Offline learning, USSD-based education, and mobile-first approaches."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Secure platforms with data protection and regulatory compliance."
    },
    {
      icon: Database,
      title: "Analytics & Reporting",
      description: "Track learning progress and measure educational outcomes."
    }
  ];

  const useCases = [
    {
      title: "Njere",
      imageSrc: "/njere-usecase.jpg",
      infoHeading: "Property Management Platform! ",
      infoDescription: "Smatprop is a smart digital property management solution designed to streamline and automate various tasks associated with property management. It is a comprehensive platform that assists property owners, managers, and landlords in effectively managing their real estate portfolios.",
      ctaLink: "/products/njere-erp"
    },
    {
      title: "SmaTutor",
      imageSrc: "/smatutor-usecase.jpg",
      infoHeading: "Intelligent Building Management",
      infoDescription: "Our IoT solutions transform traditional buildings into smart, connected environments with automated energy management, predictive maintenance, and enhanced security systems that reduce operational costs by up to 30%.",
      ctaLink: "/products/sma-tutor" 
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
        id="edtech-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 space-y-6 text-center">
        <p className="text-sm font-bold text-[#64AC6F] pt-20 md:pt-0">EDUCATION TECHNOLOGY</p>
        <h1 className="text-[#A00927] text-3xl xl:text-4xl font-bold lg:text-4xl">
          Transforming Education in Zimbabwe & Africa
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering institutions with cutting-edge EdTech solutions that enhance learning, streamline administration, and bridge the digital divide.
        </p>
      </section>

      {/* Core Solutions - Now 8 items in 2 rows of 4 */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
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

      {/* LMS Solutions - Now with 4 icon items */}
      <ImageTextIconListSectionReverse
        heading="Learning Management Systems"
        description="We design, develop, and customize robust LMS platforms to manage, deliver, and track educational content for schools, universities, and corporate training."
        imageSrc="/lms_solutions.jpg"
        imageAlt="Students using a learning management system"
        iconItems={[
          {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Comprehensive Platforms",
            text: "For blended learning and distance education across Africa",
          },
          {
            icon: <MonitorSmartphone className="w-8 h-8" />,
            title: "Mobile Responsive",
            text: "Optimized for various devices and connectivity levels",
          },
          {
            icon: <BookMarked className="w-8 h-8" />,
            title: "Curriculum Integration",
            text: "Support for ZIMSEC, Cambridge, and other curricula",
          },
          {
            icon: <LayoutGrid className="w-8 h-8" />,
            title: "Content Management",
            text: "Easy organization and delivery of learning materials",
          }
        ]}
      />

      {/* School Management Systems - Now with 4 icon items */}
      <ImageTextIconListSection
        heading="School Management Systems"
        description="Streamline administrative processes with our comprehensive SMS that includes AI-powered lesson planning, digital library management, and campus security integration."
        imageSrc="/school_management.jpg"
        imageAlt="School administration dashboard"
        iconItems={[
          {
            icon: <BrainCircuit className="w-8 h-8" />,
            title: "AI-Powered Planning",
            text: "Automated lesson activities and scheme book generation",
          },
          {
            icon: <Shield className="w-8 h-8" />,
            title: "Campus Security",
            text: "Biometric attendance, CCTV monitoring, and access control",
          },
          {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Digital Libraries",
            text: "Barcoding and scanning systems for resource management",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Parent Portal",
            text: "Real-time communication with parents and guardians",
          }
        ]}
      />

      {/* Interactive Learning - Now with 4 icon items */}
      <ImageTextIconListSectionReverse
        heading="Interactive & Immersive Learning"
        description="Enhance engagement through gamification, VR/AR experiences, and interactive smart boards that transform passive learning into active exploration."
        imageSrc="/interactive_learning.jpg"
        imageAlt="Students using VR headsets in classroom"
        iconItems={[
          {
            icon: <Gamepad2 className="w-8 h-8" />,
            title: "Gamification",
            text: "Points, badges, leaderboards to motivate learners",
          },
          {
            icon: <Cpu className="w-8 h-8" />,
            title: "VR/AR Experiences",
            text: "Virtual labs and historical reconstructions",
          },
          {
            icon: <MonitorSmartphone className="w-8 h-8" />,
            title: "Smart Boards",
            text: "Interactive displays for collaborative learning",
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: "Engagement Tools",
            text: "Polls, quizzes, and real-time feedback systems",
          }
        ]}
      />

      {/* AI in Education - Now with 4 icon items */}
      <ImageTextIconListSection
        heading="AI & Machine Learning in EdTech"
        description="Personalize learning experiences, automate administrative tasks, and gain actionable insights with our AI-powered educational solutions."
        imageSrc="/ai_education.jpg"
        imageAlt="AI analyzing student performance data"
        iconItems={[
          {
            icon: <BrainCircuit className="w-8 h-8" />,
            title: "Adaptive Learning",
            text: "Content tailored to individual student pace and needs",
          },
          {
            icon: <Database className="w-8 h-8" />,
            title: "Intelligent Analytics",
            text: "Predictive insights on student performance",
          },
          {
            icon: <Code className="w-8 h-8" />,
            title: "Automated Resources",
            text: "AI-generated lesson plans and teaching materials",
          },
          {
            icon: <BarChart className="w-8 h-8" />,
            title: "Performance Tracking",
            text: "Detailed analytics on learning outcomes",
          }
        ]}
      />

      {/* New Use Cases Section with Flip Cards */}
            <section className="px-4 py-20 mx-auto text-center max-w-7xl">
              <h2 className="mb-12 text-3xl font-bold text-black xl:text-4xl lg:text-4xl">
                Our EdTech Use Cases
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
            EdTech Solutions FAQs
          </h2>
        </div>

        <ImageLeftAccordionRight
          imageSrc="/edtech_africa.jpg"
          imageAlt="Digital learning transforming African education"
          items={[
            {
              question: "Can you digitize our existing curriculum (ZIMSEC/Cambridge)?",
              answer: "Yes, we specialize in converting traditional curricula into interactive digital formats while maintaining alignment with examination requirements."
            },
            {
              question: "How does the AI-powered lesson planning work?",
              answer: "Our AI analyzes syllabus documents to automatically generate lesson activities, schemes of work, and teaching resources, significantly reducing preparation time."
            },
            {
              question: "Do your solutions work in low-bandwidth environments?",
              answer: "Absolutely. We design lightweight applications with offline functionality and USSD-based learning for areas with limited internet connectivity."
            },
            {
              question: "Can you integrate with our existing security systems?",
              answer: "Yes, we can integrate our School Management Systems with your current biometric devices, CCTV networks, and access control systems."
            }
          ]}
        />
      </section>

{/* CTA Section */}
<CtaSection
  heading="Ready to Transform Your Institution with EdTech?"
  description="Partner with Sharetek Group to implement cutting-edge educational technology solutions tailored for African contexts."
  primaryButton={{
    text: "Request a Consultation",
    url: "/contact-us"
  }}
  secondaryButton={{
    text: "Explore Our EdTech Solutions",
    url: "/solutions/edtech"
  }}
/>

      <Footer />
    </div>
  );
}

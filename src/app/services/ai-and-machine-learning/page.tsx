import { Metadata } from "next";
import Script from 'next/script';
import { ImageTextIconListSection } from "@/app/components/ImageTextIconListSection";
import { ImageTextIconListSectionReverse } from "@/app/components/ImageTextIconListSectionReverse";
import { GraduationCap, TrendingUp, Sparkles, Star } from "lucide-react";
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import Footer from "@/app/components/Footer";

export default function AiAndMachineLearning() {
  // Structured Data for AI Services Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI and Machine Learning Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Sharetek Group",
      "url": "https://sharetek.co.za",
      "logo": "https://sharetek.co.za/Sharetek_logo.svg"
    },
    "description": "Cutting-edge AI and machine learning services including custom model development, predictive analytics, and continuous optimization solutions.",
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Model Development",
            "description": "Tailored AI solutions designed for specific business challenges"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Continuous Optimization",
            "description": "Ongoing model refinement for peak performance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Predictive Modeling",
            "description": "Advanced algorithms for forecasting and decision-making"
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "ContactPoint",
      "url": "https://sharetek.co.za/contact-us",
      "contactType": "sales",
      "description": "Contact us for AI solution consulting"
    }
  };
  return (
    <div className="pt-10 text-black bg-white md:pt-24">
      
      {/* Hero Section */}
      
    <Script
        id="ai-services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      
      <section className="flex flex-col items-center space-y-6 text-center">
        <p className="text-sm font-bold text-[#A00927] pt-20 md:pt-0">Our Solutions</p>
        <h1 className="text-[#A00927] text-3xl xl:text-[53px] font-bold lg:text-4xl">
          Industry-leading AI and <br /> Machine Learning Solutions
        </h1>
        <p className="max-w-2xl mx-auto">
          Leverage our cutting-edge AI and machine learning expertise to transform your business
          operations, enhance decision-making, and create intelligent systems that drive growth and
          efficiency.
        </p>
      </section>

      {/* First content section */}
      <section>
        <ImageTextIconListSectionReverse
          heading="End-to-End AI Modeling Services"
          description="From data preparation to model deployment, we handle every stage of the AI lifecycle to deliver robust, scalable solutions."
          imageSrc="/thinking_ai.jpg"
          imageAlt="AI development team working on machine learning models"
          iconItems={[
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "Custom Model Development",
              text: "Tailored solutions designed for your specific business challenges.",
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Continuous Optimization",
              text: "Ongoing model refinement for peak performance.",
            },
          ]}
        />
      </section>

      {/* Second content section */}
      <section>
        <ImageTextIconListSection
          heading="Harness the Power of AI"
          description="Our AI modeling services help businesses unlock valuable insights from data, automate complex processes, and create predictive systems that adapt to your unique needs."
          imageSrc="/modern_robot.jpg"
          imageAlt="Artificial intelligence transforming business operations"
          iconItems={[
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "Expert Data Scientists",
              text: "Our team holds advanced degrees in AI and machine learning.",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Proven Methodologies",
              text: "We follow industry best practices for model development.",
            },
          ]}
        />
      </section>

      {/* FAQ / Accordion */}
      <section className="pb-5 md:pb-14">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-black text-3xl xl:text-[53px] font-bold lg:text-4xl">
            Our Service Include
          </h2>
        </div>

        <ImageLeftAccordionRight
          imageSrc="/machine_learning.jpg"
          imageAlt="AI model development process visualization"
          items={[
            {
              question: "What types of AI models do you develop?",
              answer:
                "We specialize in predictive models, recommendation systems, computer vision solutions, natural language processing (NLP), and deep learning architectures tailored to your industry needs.",
            },
            {
              question: "How do you ensure model accuracy and reliability?",
              answer:
                "We implement rigorous testing protocols including cross-validation, A/B testing, and real-world performance monitoring to ensure models meet strict accuracy thresholds before deployment.",
            },
            {
              question: "What industries do you serve with your AI solutions?",
              answer:
                "Our solutions span healthcare, finance, retail, manufacturing, and logistics, with domain-specific expertise in each vertical for maximum impact.",
            },
            {
              question: "How long does a typical AI modeling project take?",
              answer:
                "Project timelines vary based on complexity, but most enterprise AI implementations range from 8-16 weeks from initial data assessment to production deployment.",
            },
            {
              question: "Do you provide ongoing model maintenance?",
              answer:
                "Yes, we offer comprehensive model monitoring and retraining services to ensure your AI systems continue to perform optimally as data patterns evolve.",
            },
            {
              question: "What data requirements are needed to start an AI project?",
              answer:
                "While requirements vary, we typically need historical datasets with relevant features. Our team can help assess your existing data and recommend collection strategies if needed.",
            },
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}





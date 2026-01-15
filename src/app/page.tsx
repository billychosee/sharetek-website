"use client";
import Head from "next/head";
import Footer from "./components/Footer";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import IndustryCard from "./components/IndustryCard";
import LogoSlider from "./components/LogoSlider";
import MissionStats from "./components/MissionStats";
import CustomButton from "./components/CustomButton";
import ServiceAccordion from "./components/ServiceAccordion";
import {
  FaStopwatch,
  FaMedal,
  FaHandshake,
  FaBuilding,
  FaShoppingBasket,
  FaSmile,
  FaCogs,
  FaSyncAlt,
  FaDatabase,
  FaLifeRing,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa"; // Imported all Fa icons here
import Link from "next/link";

const logos = [
  { logo: "/CS-Logo.png", url: "/" },
  { logo: "/Sharetek_logo.svg", url: "/" },
  { logo: "/icz-logo.png", url: "/" },
  { logo: "/smatpay_logo.svg", url: "/" },
  { logo: "/ipec_logo.png", url: "/" },
  { logo: "/dc_logo.svg", url: "/" },
  { logo: "/smat_tutor_logo.svg", url: "/" },
  { logo: "/services_seta_logo.svg", url: "/" },
  { logo: "/smatprop_logo.svg", url: "/" },
  { logo: "/ih_group_logo.svg", url: "/" },
  { logo: "/teta_logo.svg", url: "/" },
  { logo: "/solid_rock_logo.svg", url: "/" },
  { logo: "/sharetek_logo.svg", url: "/" },
  { logo: "/sanctuary_insurance.svg", url: "/" },
  { logo: "/njere_logo.svg", url: "/" },
  { logo: "/sasseta_logo.svg", url: "/" },
  { logo: "/ntiyiso_logo.svg", url: "/" },
  { logo: "/smat_qr_logo.svg", url: "/" },
  { logo: "/robertroot_logo.png", url: "/" },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      heroElement.addEventListener("mouseenter", () => setIsHovering(true));
      heroElement.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
        heroElement.removeEventListener("mouseenter", () =>
          setIsHovering(true)
        );
        heroElement.removeEventListener("mouseleave", () =>
          setIsHovering(false)
        );
      }
    };
  }, []);

  // Calculate image position based on mouse position
  const imageStyle = {
    transform: `translate(
      ${(mousePosition.x - (heroRef.current?.offsetWidth || 0) / 2) * 0.05}px,
      ${(mousePosition.y - (heroRef.current?.offsetHeight || 0) / 2) * 0.05}px
    )`,
    transition: "transform 0.5s ease-out",
  };

  const currentYear = new Date().getFullYear(); // For copyright year in schema

  return (
    <>
      <Head>
        <title>
          Sharetek Group | Cutting-Edge IT Solutions & Software Development in
          Zimbabwe
        </title>
        <meta
          name="description"
          content="Sharetek Group provides cutting-edge IT solutions, custom software development, AI & ML services, and robust cybersecurity. Empowering businesses in Zimbabwe and Africa for digital transformation and growth."
        />
        <meta
          name="keywords"
          content="Sharetek Group, IT solutions Zimbabwe, software development Harare, AI and Machine Learning Africa, cybersecurity services, digital transformation, enterprise software, FinTech, PropTech, EdTech, InsurTech, Hospitality tech"
        />
        <meta name="author" content="Sharetek Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.sharetek.co.za/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sharetek.co.za/" />
        <meta
          property="og:title"
          content="Sharetek Group | Innovative IT & Software Solutions"
        />
        <meta
          property="og:description"
          content="Sharetek Group provides cutting-edge IT solutions, custom software development, AI & ML services, and robust cybersecurity. Empowering businesses in Zimbabwe and Africa."
        />
        <meta
          property="og:image"
          content="https://www.sharetek.co.za/hero.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sharetek.co.za/" />
        <meta
          property="twitter:title"
          content="Sharetek Group | Innovative IT & Software Solutions"
        />
        <meta
          property="twitter:description"
          content="Sharetek Group provides cutting-edge IT solutions, custom software development, AI & ML services, and robust cybersecurity. Empowering businesses in Zimbabwe and Africa."
        />
        <meta
          property="twitter:image"
          content="https://www.sharetek.co.za/hero.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": [
                    "Organization",
                    "LocalBusiness",
                    "ComputerStore",
                    "ITService",
                  ],
                  "@id": "https://www.sharetek.co.za/#organization",
                  name: "Sharetek Group",
                  url: "https://www.sharetek.co.za/",
                  logo: "https://www.sharetek.co.za/Sharetek_logo.svg",
                  description:
                    "Sharetek Group provides cutting-edge IT solutions, custom software development, AI & ML services, and robust cybersecurity.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "13 Brentwood Avenue Mount Pleasant",
                    addressLocality: "Harare",
                    addressRegion: "Harare Province",
                    postalCode: "00000",
                    addressCountry: "ZW",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+263-77-123-4567",
                    contactType: "customer service",
                  },
                  sameAs: [
                    "https://www.facebook.com/Sharetekgroup",
                    "https://twitter.com/Sharetekgroup",
                    "https://www.linkedin.com/company/Sharetekgroup",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.sharetek.co.za/#website",
                  url: "https://www.sharetek.co.za/",
                  name: "Sharetek Group",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://www.sharetek.co.za/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.sharetek.co.za/#webpage",
                  url: "https://www.sharetek.co.za/",
                  name: "Sharetek Group | Cutting-Edge IT Solutions & Software Development in Zimbabwe",
                  isPartOf: { "@id": "https://www.sharetek.co.za/#website" },
                  about: {
                    "@id": "https://www.sharetek.co.za/#organization",
                  },
                  datePublished: "2023-01-01",
                  dateModified: new Date().toISOString().split("T")[0],
                  description:
                    "Sharetek Group provides cutting-edge IT solutions, custom software development, AI & ML services, and robust cybersecurity. Empowering businesses in Zimbabwe and Africa for digital transformation and growth.",
                  inLanguage: "en-US",
                },

                {
                  "@type": "Service",
                  serviceType: "Software Development",
                  name: "Custom Software Development Services",
                  description:
                    "We design and develop custom software solutions tailored to your specific business needs, ensuring scalability, security, and optimal performance, including web applications, mobile apps, enterprise software, and UI/UX design.",
                  provider: {
                    "@id": "https://www.sharetek.co.za/#organization",
                  },
                  areaServed: {
                    "@type": "Place",
                    name: "Zimbabwe and Southern Africa",
                  },
                  url: "https://www.sharetek.co.za/services/platform-development",
                },
                // Service Schema for AI and Machine Learning
                {
                  "@type": "Service",
                  serviceType: "AI and Machine Learning Services",
                  name: "AI and Machine Learning Solutions",
                  description:
                    "Our AI and machine learning solutions help you automate, predict, and transform operations, leveraging advanced algorithms and data insights for maximum impact, covering predictive analytics, NLP, computer vision, and AI automation.",
                  provider: {
                    "@id": "https://www.sharetek.co.za/#organization",
                  },
                  areaServed: {
                    "@type": "Place",
                    name: "Zimbabwe and Southern Africa",
                  },
                  url: "https://www.sharetek.co.za/services/ai-and-machine-learning",
                },
                // Service Schema for Cyber Security
                {
                  "@type": "Service",
                  serviceType: "Cyber Security Services",
                  name: "Comprehensive Cyber Security Solutions",
                  description:
                    "Our expert team provides comprehensive IT support and maintenance services to keep your systems running smoothly and securely around the clock, including 24/7 monitoring, help desk support, security updates, and preventive maintenance.",
                  provider: {
                    "@id": "https://www.sharetek.co.za/#organization",
                  },
                  areaServed: {
                    "@type": "Place",
                    name: "Zimbabwe and Southern Africa",
                  },
                  url: "https://www.sharetek.co.za/services/cyber-security",
                },
              ],
            }),
          }}
        />
      </Head>

      <main className="text-black bg-white">
        <div
          ref={heroRef}
          className="relative flex items-center justify-center min-h-screen px-6 py-24 overflow-hidden bg-gradient-to-t from-[#F9FAFB] to-white md:min-h-full lg:min-h-screen"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-50"
            style={{ backgroundImage: "url('/bg1.png')" }}
          />

          {/* Hero content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl px-6 mx-auto">
            {/* Main content row */}
            <div className="flex flex-col items-center justify-between w-full md:flex-row">
              {/* Text content */}
              <div className="mb-10 text-center md:w-1/2 md:mb-0 md:text-left">
                <h1
                  className={`text-5xl xl:text-6xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-in-out text-black ${isHovering ? "transform rotate-1 scale-105" : ""}`}
                >
                  Most Trusted Technology Service Provider
                </h1>
                <p
                  className={`text-xl md:text-2xl xl:text-2xl lg:text-xl mb-8 transition-all duration-1000 ease-in-out text-[black] ${isHovering ? "transform -rotate-1 scale-105" : ""}`}
                >
                  Enabling Tomorrow&apos;s Enterprise Today
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById("get-in-touch");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 font-bold text-white transition-colors duration-300 rounded-full cursor-pointer bg-[#A00927] hover:bg-[#27282C]"
                >
                  Get Started
                </button>
              </div>

              {/* Floating image */}
              <div className="relative md:w-1/2" style={imageStyle}>
                <Image
                  src="/hero.jpg"
                  alt="Sharetek Group providing innovative tech solutions"
                  width={800}
                  height={600}
                  className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-6 px-5 pb-10 text-sm bg-[#F9FAFB] md:flex-row md:gap-10 md:px-20 lg:px-20 xl:px-64"
          id="get-in-touch"
        >
          {/* Column 1 - Image */}
          <div className="flex items-center justify-center w-full md:w-1/3">
            <Image
              src="/faces_get_in_touch.png"
              alt="Team members ready to assist"
              width={160}
              height={0}
              className="h-auto"
            />
          </div>

          {/* Column 2 - Heading + Paragraph */}
          <div className="flex flex-col items-center justify-center w-full text-center md:items-start md:text-left md:w-1/3">
            <h2 className="mb-2 text-xl font-semibold text-black">
              Welcome back!
            </h2>
            <p className="text-gray-700">
              Tell us what else you're interested in.
            </p>
          </div>

          {/* Column 3 - Button */}
          <div className="flex items-center justify-center w-full md:justify-end md:w-1/3">
            <Link href="/contact-us">
              <button className="px-6 py-3 text-sm font-semibold text-black bg-gray-300 cursor-pointer rounded-3xl hover:bg-white">
                Get in touch
              </button>
            </Link>
          </div>
        </div>

        {/* End of hero section div */}

        {/* Industries Section */}

        <section
          id="services-section"
          className="bg-[#A00927] text-white py-16 px-6 md:px-24"
        >
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            {/* Left column */}
            <div className="md:w-1/2">
              <h1 className="text-sm font-semibold text-[#27282C] uppercase tracking-wide mb-4">
                Industries We Serve
              </h1>
              <h2 className="mb-4 text-3xl font-extrabold leading-snug md:text-4xl lg:text-xl">
                Empowering organizations with scalable IT and enterprise-grade
                solutions built for long-term impact and measurable
                transformation.
              </h2>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6 md:w-1/2">
              {/* Green line */}
              <div className="h-2 w-full bg-[#27282C]" />

              {/* Description and arrow */}
              <div className="flex items-center justify-between">
                <p className="max-w-md text-gray-100 lg:text-sm">
                  We've helped companies, building strong relationships with
                  top-notch assistance.
                </p>
                <button
                  onClick={() => {
                    const servicesSection =
                      document.getElementById("services-section");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-12 h-12 ml-4 rounded-full bg-[#A00927] flex-shrink-0 flex items-center justify-center hover:bg-white transition hover:text-black cursor-pointer"
                >
                  <ArrowRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-5">
            <IndustryCard
              title="FinTech"
              description="Innovative banking and payment solutions for the digital economy."
              iconSrc="Landmark" // Bank/Financial institution icon
              href="/industries/fintech"
            />
            <IndustryCard
              title="PropTech"
              description="Technology transforming real estate transactions and property management."
              iconSrc="Home" // House icon for property
              href="/industries/proptech"
            />
            <IndustryCard
              title="EdTech"
              description="Digital learning platforms and tools revolutionizing education."
              iconSrc="GraduationCap" // Education icon
              href="/industries/edtech"
            />
            <IndustryCard
              title="InsurTech"
              description="AI-driven insurance products and risk assessment technologies."
              iconSrc="Shield" // Protection/insurance icon
              href="/industries/insurtech"
            />
            <IndustryCard
              title="Hospitality & Tourism"
              description="Smart booking systems and enhanced guest experience technologies"
              iconSrc="UtensilsCrossed" // Hospitality/food service icon
              href="/industries/hospitality-and-tourism"
            />
          </div>
        </section>

        {/* End of Industries Section */}

        <div className="px-6 py-10 md:px-24">
          <div className="flex items-center my-10">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-sm font-semibold text-[#27282C] whitespace-nowrap">
              OUR SERVICES
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Software Development */}
          <ServiceAccordion
            icon="FaLaptopCode"
            title="Software Development"
            summary="Custom Business solutions."
            description="We design and develop custom software solutions tailored to your specific business needs, ensuring scalability, security, and optimal performance."
            learnMoreLink="/services/software-development"
            services={[
              {
                title: "Web Applications",
                description: "Custom web solutions for your business needs",
                iconName: "FaLaptopCode",
              },
              {
                title: "Mobile Apps",
                description: "iOS and Android applications development",
                iconName: "FaMobileAlt",
              },
              {
                title: "Enterprise Software",
                description: "Scalable solutions for large organizations",
                iconName: "FaServer",
              },
              {
                title: "UI/UX Design",
                description: "User-centered design for better engagement",
                iconName: "FaPaintBrush",
              },
            ]}
          />

          {/* AI and Machine Learning */}
          <ServiceAccordion
            icon="FaNetworkWired"
            title="AI and Machine Learning"
            summary="Harness the power of data-driven intelligence for your business."
            description="Our AI and machine learning solutions help you automate, predict, and transform operations, leveraging advanced algorithms and data insights for maximum impact."
            learnMoreLink="/services/ai-and-machine-learning"
            services={[
              {
                title: "Predictive Analytics",
                description:
                  "Forecast future trends with advanced machine learning models",
                iconName: "FaNetworkWired",
              },
              {
                title: "Natural Language Processing",
                description:
                  "Enable machines to understand and interact with human language",
                iconName: "FaSyncAlt",
              },
              {
                title: "Computer Vision",
                description:
                  "Empower systems to interpret and analyze visual data",
                iconName: "FaCloud",
              },
              {
                title: "AI Automation",
                description:
                  "Streamline processes with intelligent automation solutions",
                iconName: "FaShieldAlt",
              },
            ]}
          />

          {/* Cyber Security */}
          <ServiceAccordion
            icon="FaShieldAlt"
            title="Cyber Security"
            summary="Protect your business from cyberattacks."
            description="Our expert team provides comprehensive IT support and maintenance services to keep your systems running smoothly and securely around the clock."
            learnMoreLink="/services/cyber-security"
            services={[
              {
                title: "24/7 Monitoring",
                description: "Proactive system monitoring",
                iconName: "FaCogs",
              },
              {
                title: "Help Desk Support",
                description: "Immediate technical assistance",
                iconName: "FaLifeRing",
              },
              {
                title: "Security Updates",
                description: "Regular security patches and updates",
                iconName: "FaShieldAlt",
              },
              {
                title: "Preventive Maintenance",
                description: "Regular system checkups",
                iconName: "FaSyncAlt",
              },
            ]}
          />
        </div>

        {/* consultancy section */}

        <section className="flex flex-col px-5 pt-16 bg-[#F9FAFB] md:px-24 lg:px-24 md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/consulting_lady.png"
              alt="Consulting lady offering free IT consultancy"
              width={500}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center w-full py-10 space-y-5 text-center text-black lg:space-y-4 xl:space-y-10 md:w-1/2 md:justify-center md:text-start md:py-0">
            <h1 className="text-[#27282C] text-sm lg:text-2xl font-bold xl:text-4xl">
              Arrange a
            </h1>
            <h2 className="text-black text-3xl xl:text-[57px] font-bold lg:text-4xl">
              Free IT Consultation.
            </h2>
            <p className="text-sm lg:text-xs xl:text-sm">
              {" "}
              At Sharetek Group, we don&apos;t just deliver products, we craft
              solutions that transform the way you work and grow. Let&apos;s
              discuss how we can support your digital journey.
            </p>
            <Link href="/contact-us">
              <button className="bg-[#A00927] p-5 text-white text-sm lg:text-sm lg:px-14 xl:px-5 xl:py-6 w-full xl:w-[335px] hover:bg-white hover:text-black cursor-pointer font-bold hover:shadow-2xl">
                Book your free consultation today.
              </button>
            </Link>
            <div className="flex justify-center pb-20 space-x-6 md:pb-0 md:justify-start">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-6 h-6 text-gray-500 fill-gray-300" />
                <span className="text-sm lg:text-sm xl:text-sm">
                  Quick response
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-6 h-6 text-gray-500 fill-gray-300" />
                <span className="text-sm lg:text-sm xl:text-sm">
                  Save time & money
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* end of consultancy section */}

        {/* Why work with us */}

        <section className="flex items-center justify-center px-6 pt-6 text-center bg-white md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <p className="text-sm font-bold text-[#27282C]] pt-20 md:pt-0">
              WHY WORK WITH US
            </p>
            <h1 className="!text-[#A00927] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
              6 reasons why you should partner with Sharetek
            </h1>
          </div>
        </section>

        {/* End of Why work with us */}

        {/* Our Customers */}

        <section>
          <div className="flex flex-col items-center justify-center px-6 py-5 text-black align-middle md:pb-16 md:px-24">
            <div className="flex flex-col space-x-0 space-y-16 text-sm md:space-x-24 pt-14 md:flex-row lg:space-x-8">
              <div className="space-y-16">
                <div className="flex gap-6">
                  <div>
                    <FaStopwatch
                      className="text-xl text-gray-400 lg:text-2xl"
                      size={28}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold lg:text-lg xl:text-xl">
                      Quick response
                    </h1>
                    <p className="text-sm lg:text-base">
                      We can log in to your PC or server remotely and resolve
                      many issues immediately without the wait for a technician
                      to travel to your location.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <FaMedal
                      className="text-xl text-gray-400 lg:text-2xl"
                      size={28}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold lg:text-lg xl:text-xl">
                      Experienced
                    </h1>
                    <p className="text-sm lg:text-base">
                      In more than 15 years of IT outsourcing, we have gained
                      experience in a wide spectrum of technologies, industries
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-16">
                <div className="flex gap-6">
                  <div>
                    <FaHandshake
                      className="text-xl text-gray-400 lg:text-2xl"
                      size={28}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold lg:text-lg xl:text-xl">
                      No geek speak
                    </h1>
                    <p className="text-sm lg:text-base">
                      You deserve to have your questions answered in plain
                      English. Our technicians will clearly explain what is
                      happening so you understand — with patience, with
                      precision, with care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <FaBuilding
                      className="text-xl text-gray-400 lg:text-2xl"
                      size={28}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold lg:text-lg xl:text-xl">
                      Business savvy
                    </h1>
                    <p className="text-sm lg:text-base">
                      We create valuable, customized solutions that enhance
                      operations, utilizing our expertise to meet your business
                      needs. Our technological solutions will help your business
                      thrive.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-16">
                <div className="flex gap-6">
                  <div>
                    <FaShoppingBasket
                      className="text-xl text-gray-400 lg:text-2xl"
                      size={28}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold lg:text-lg xl:text-xl">
                      One Stop Shop
                    </h1>
                    <p className="text-sm lg:text-base">
                      We handle all aspects of your IT infrastructure including
                      hardware, software management and any other related
                      technology needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <FaSmile
                      className="text-xl text-gray-400 lg:text-2xl"
                      size={28}
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold lg:text-lg xl:text-xl">
                      100% Satisfaction Guarantee
                    </h1>
                    <p className="pb-20 text-sm lg:text-base md:pb-0">
                      We want you to be completely satisfied with our services.
                      We will do whatever it takes to make you happy. No
                      hassles, no problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End Our Customers */}

        {/* start of mission */}

        <section>
          <MissionStats />
        </section>

        {/* end of mission */}

        {/* start of lets get started */}

        <section>
          <div className="bg-gradient-to-t from-[#F9FAFB] to-white min-h-fit lg:min-h-screen flex flex-col items-center">
            <div className="w-full">
              <Image
                src="/pattern_bg.png"
                alt="Wave pattern background"
                width={1920}
                height={200}
                className="w-full"
              />
            </div>

            {/* Content container - properly centered */}
            <div className="flex flex-col items-center justify-center w-full px-5 pb-10 text-center md:px-24 md:pb-20">
              {/* Headings with consistent spacing */}
              <div className="flex flex-col items-center w-full space-y-6 md:space-y-10">
                <h2 className="text-[#A00927] text-sm lg:text-2xl font-bold xl:text-4xl">
                  Let's get started
                </h2>
                <h1 className="text-black text-3xl xl:text-[70px] font-bold lg:text-4xl">
                  Still have questions?
                </h1>
                <p className="text-base md:text-lg">
                  Don't stress over technical issues, concentrate on your{" "}
                  <br className="hidden md:block" />
                  business. We'll give you the help you need.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center w-full gap-4 mt-6 md:flex-row md:mt-10">
                <CustomButton variant="primary">
                  Speak to an Expert
                </CustomButton>
                <CustomButton variant="link">
                  Learn more about services
                </CustomButton>
              </div>

              {/* Divider line - full width */}
              <div className="w-full h-1 mt-6 bg-black md:mt-20 md:h-2" />
            </div>
          </div>
        </section>

        {/* end of lets get started */}

        {/* Our Business */}

        <section>
          <>
            <div className="px-4 py-10 md:px-20 bg-[#ffffff]">
              <div className="flex items-center my-10">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 text-sm font-semibold text-[#27282C] whitespace-nowrap">
                  OUR PARTNERS AND BUSINESS
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <LogoSlider logos={logos} />
            </div>
          </>
        </section>

        {/* End of Our Business */}
      </main>

      <Footer />
    </>
  );
}




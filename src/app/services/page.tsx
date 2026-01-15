// app/services/page.tsx
import Image from "next/image";
import FeatureCard from "../components/FeatureCard";
import {
  FaNetworkWired,
  FaServer,
  FaVoicemail,
  FaLaptopCode,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import CompanyProfile from "../components/CompanyProfile";
import Footer from "../components/Footer";

export const metadata = {
  title: "IT Services & Solutions | Business Technology Experts",
  description:
    "Comprehensive IT services including cloud infrastructure, cybersecurity, managed IT, and VoIP solutions tailored to your business needs.",
  keywords:
    "IT services, cloud solutions, cybersecurity, managed IT, VoIP, business technology, IT consultancy",
  openGraph: {
    title: "Professional IT Services for Your Business",
    description:
      "Matching technology to business needs with our expert IT services and solutions.",
    url: "https://Sharetekgroup.netlify.app/services/ai-and-machine-learning",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Header with Background Image */}
      <header className="relative max-h-screen px-6 py-32 text-left md:px-24 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services_bg.svg"
            alt="IT services and technology solutions background"
            fill
            className="object-cover "
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80 md:bg-black/0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center w-full max-w-3xl space-y-6 md:w-2/3 lg:w-1/2 md:space-y-10">
          {/* Flex row for icon and title */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/services_icon.svg"
                alt="IT services icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-[#27282C] text-sm md:text-lg lg:text-2xl font-bold">
              Our Services
            </h1>
          </div>

          {/* Main heading and descriptive text */}
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
            Matching Technology <br className="hidden sm:inline" /> to Business
            Needs
          </h2>

          <p className="text-sm text-white md:text-base lg:text-sm xl:text-sm">
            We serve industries across the board and represent the security and
            compliance of countless companies. We do this through a focus on
            quality IT services and solutions.
          </p>

          <p className="text-xs text-white md:text-sm">
            Stop worrying about technology problems. Focus on your business. Let
            us provide the IT support you deserve.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="px-5 md:px-24">
        <div className="flex items-center justify-center px-6 pt-6 text-center text-black bg-white md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <p className="!text-sm !font-bold !text-[#27282C] pt-20 md:pt-0">
              OUR AREAS OF EXPERTISE
            </p>
            <h1 className="!text-[#A00927] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
              Technology Services Built For Your Business
            </h1>
            <p className="max-w-2xl">
              We understand and support all areas of your IT systems – from
              back-end infrastructure to front-end personal productivity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard
            icon={FaNetworkWired}
            title="Connectivity Voice & Data"
            description="Powerful server infrastructure, advanced computers, and modern IP telephony that transform business communication."
          />
          <FeatureCard
            icon={FaServer}
            title="Cloud Infrastructure"
            description="Scalable, secure, and reliable cloud solutions that grow with your business, ensuring 24/7 uptime and performance."
          />
          <FeatureCard
            icon={FaVoicemail}
            title="Smart VoIP Solutions"
            description="Modern platforms integrating CRM, AI, and analytics to empower teams and customers."
          />
          <FeatureCard
            icon={FaLaptopCode}
            title="Managed IT Services"
            description="Complete IT support and maintenance to keep your business running smoothly and securely."
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Cybersecurity"
            description="Advanced threat protection, monitoring, and response to safeguard your digital assets from evolving cyber risks."
          />
          <FeatureCard
            icon={FaCogs}
            title="IT Consultancy"
            description="Strategic guidance and technology planning to align your IT roadmap with your business goals and maximize ROI."
          />
        </div>
      </section>

      {/* start of lets get started */}

      <section>
        <div className="bg-gradient-to-t from-[#F9FAFB] to-white min-h-fit lg:min-h-screen">
          <div>
            {/* pattern inline above headings */}
            <img src="/pattern_bg.png" alt="wave pattern" className="w-full" />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-10 text-center text-black md:px-24 md:pb-0 ">
            <h2 className="text-[#27282C] text-sm lg:text-2xl font-bold xl:text-4xl mb-6 md:mb-10">
              Let's get started
            </h2>
            <h1 className="text-black text-3xl xl:text-[70px] font-bold lg:text-4xl mb-6 md:mb-10">
              Still have questions?
            </h1>
            <p className="mb-6 md:mb-10">
              Don't stress over technical issues, concentrate on your <br />
              business. We'll give you the help you need.
            </p>
            <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
              <CustomButton variant="primary">Speak to an Expert</CustomButton>
              <CustomButton variant="link">
                Learn more about services
              </CustomButton>
            </div>
            <div className="w-full h-1 mt-6 bg-black md:mt-20 md:h-2" />
          </div>
        </div>
      </section>

      {/* end of lets get started */}

      <section>
        {/* Stats Section */}
        <div className="bg-[#F9FAFB] pb-14 md:pb-0">
          <CompanyProfile
            heading="Outreach by the Numbers"
            subheading="The energy of a startup with well-established IT expertise"
            stats={[
              { end: 45, label: "Certified Microsoft Professionals" },
              { end: 68, label: "Episerver Certified Developers" },
              { end: 15, label: "$0 to $15M in revenue in under 3 years" },
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}




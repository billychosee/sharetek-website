"use client";

import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import LogoSlider from "../components/LogoSlider";
import { FaUserTie, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import Head from "next/head"; // Import Head from next/head for schema markup

const logos = [
  { logo: "/cs-Logo.png", url: "/" },
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

export default function AboutUs() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.2;
      const section = document.getElementById("company-stats");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sharetek",
    url: "https://www.sharetek.com/",
    logo: "https://www.sharetek.com/sharetek_logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+263-78-956-6427",
      contactType: "customer service",
      areaServed: ["ZW", "ZA"],
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.facebook.com/sharetek",
      "https://twitter.com/sharetek",
      "https://www.linkedin.com/company/sharetek",
    ],
    description:
      "Sharetek specializes in IT Software, Consultancy, and Hardware Solutions, empowering businesses to connect, communicate, and thrive in the digital age.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "13 Brentwood Avenue",
        addressLocality: "Harare",
        addressRegion: "Harare Province",
        postalCode: "00000",
        addressCountry: "ZW",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "12 Riversands Road, Beverly",
        addressLocality: "Sandton",
        addressRegion: "Gauteng",
        postalCode: "2191",
        addressCountry: "ZA",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sharetek Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Software Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consultancy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hardware Solutions",
          },
        },
      ],
    },
  };

  return (
    <section className="bg-white pt-14">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Interactive gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            id="gradient-follower"
            className="absolute w-[200%] h-[200%] opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, #A00927 0%, transparent 50%)",
              transition: "transform 0.3s ease-out",
            }}
          ></div>
        </div>

        <div className="px-6 py-16 md:px-24 bg-[#F9FAFB]/90 text-gray-800 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8 text-center">
            <h1 className="font-bold text-5xl lg:text-6xl xl:[86px]">
              Sharetek Inspiring Technologies
            </h1>
            <p className="text-xl xl:text-xl lg:text-base">
              We at Sharetek believe that human, organizational, and <br />
              operational intelligence are important, not just artificial
              intelligence.
            </p>
            <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
              <CustomButton
                variant="primary"
                className="!bg-[#27282C] !text-white hover:!bg-black"
              >
                Speak to an Expert
              </CustomButton>
              <CustomButton variant="link">
                Learn more about services
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 px-5 py-10 text-center md:px-24 md:pb-20 bg-gradient-to-t from-[#F9FAFB] to-white">
          <img
            src="/about_hero_bg.png"
            alt="hero-bg"
            width={800}
            height={600}
            className="w-full bg-no-repeat bg-cover"
          />
        </div>

        {/* Mouse following effect script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('mousemove', (e) => {
              const follower = document.getElementById('gradient-follower');
              const x = e.clientX / window.innerWidth * 100;
              const y = e.clientY / window.innerHeight * 100;
              follower.style.transform = \`translate(\${-50 + x}%, \${-50 + y}%)\`;
            });

            // For mobile touch
            document.addEventListener('touchmove', (e) => {
              const follower = document.getElementById('gradient-follower');
              const touch = e.touches[0];
              const x = touch.clientX / window.innerWidth * 100;
              const y = touch.clientY / window.innerHeight * 100;
              follower.style.transform = \`translate(\${-50 + x}%, \${-50 + y}%)\`;
            });
          `,
          }}
        />
      </section>

      {/* Divider */}
      <div className="bg-[#F9FAFB]">
        <div className="h-2 mx-5 bg-black md:mx-24"></div>
      </div>

      {/* Company Profile */}
      <div
        className="flex flex-col gap-5 pt-20 px-5 space-y-6 text-center text-black md:px-24 md:flex-row md:text-start md:space-y-14 bg-[#F9FAFB] pb-20 md:pb-0"
        id="company-stats"
      >
        <div className="md:w-2/5">
          <p className="text-sm font-semibold text-[#27282C] whitespace-nowrap">
            Company Profile-Key Facts
          </p>
          <h1 className="pt-5 text-2xl font-bold lg:text-xl xl:text-2xl">
            The energy of a start-up A well-established expertise.
          </h1>
        </div>
        <div className="md:w-1/5">
          <h1 className="text-4xl font-bold lg:text-3xl xl:text-6xl">
            {startCount ? <CountUp end={30} duration={3} /> : "0"}
          </h1>
          <p className="text-sm lg:text-xs xl:text-sm">
            Developed over 30 custom business solutions
          </p>
        </div>
        <div className="md:w-1/5">
          <h1 className="text-4xl font-bold lg:text-3xl xl:text-6xl">
            {startCount ? <CountUp end={15} duration={3} /> : "0"}
          </h1>
          <p className="text-sm lg:text-xs xl:text-sm">
            Experience in over 15 programming languages and frameworks
          </p>
        </div>
        <div className="md:w-1/5">
          <h1 className="text-4xl font-bold lg:text-3xl xl:text-6xl">
            {startCount ? <CountUp end={46} duration={3} /> : "0"}
          </h1>
          <p className="text-sm lg:text-xs xl:text-sm">
            Trusted by over 30 Brands Across Africa
          </p>
        </div>
      </div>

      {/* What We Do */}
      <section className="flex flex-col-reverse py-24 mx-5 text-black md:flex-row md:mx-24">
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="pt-6 text-center md:text-start md:pt-0">
            <p className="text-sm font-semibold text-[#27282C] whitespace-nowrap">
              What we do
            </p>
            <h1 className="pt-5 text-2xl font-bold">
              We will help you overcome your technology challenges
            </h1>
          </div>
          <div className="flex items-start gap-5 pt-10 lg:pt-5 xl:pt-10">
            <div className="before:content-[''] before:w-2 before:h-2 before:bg-[#27282C] before:mt-2 before:mr-2 before:inline-block"></div>
            <p className="flex mb-10 text-sm align-top lg:text-xs xl:text-sm">
              Sharetek, your premier destination for cutting-edge IT Software,
              Consultancy and Hardware Solutions. With a passion for innovation
              and a commitment to excellence, we specialize in providing
              top-of-the-line products and services that empower businesses to
              connect, communicate, and thrive in the digital age. <br />
              <br />
              At Sharetek, we understand that in today's fast-paced world,
              seamless communication and reliable computing are the cornerstones
              of success. With years of experience in the industry, our
              dedicated team of experts is at the forefront of technological
              advancements, ensuring that we offer the latest and most advanced
              hardware solutions to meet the evolving needs of our clients.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-4 md:flex-row">
            <CustomButton
              variant="primary"
              className="!bg-[#27282C] !text-white hover:!bg-black"
            >
              Speak to an Expert
            </CustomButton>
            <CustomButton variant="link">
              Learn more about services
            </CustomButton>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/what_we_do.png"
            alt="What We Do"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Our Section */}
      <section className="flex flex-col py-0 mx-5 text-black gap-14 md:py-10 md:mx-24 md:flex-row md:gap-24">
        {[
          {
            icon: <FaUserTie className="w-10 h-10 text-[#27282C]" />,
            title: "Our Vision",
            text: `At Sharetek, we envision a future where seamless connectivity and innovative technology empower businesses to transcend boundaries and achieve their full potential. Our vision is to be the forefront provider of Computer Software Solutions and IT hardware solutions, driving the evolution of communication and computing landscapes through cutting-edge products, exceptional service, and a commitment to progress.`,
          },
          {
            icon: <FaLightbulb className="w-10 h-10 text-[#27282C]" />,
            title: "Our Mission",
            text: `Our mission guides us as we strive to fulfill our vision. By aligning our efforts with these principles, we are dedicated to making a significant difference in the way businesses communicate, operate, and succeed in the digital age. we invite you to join us in embracing the possibilities that technology offers and in creating a future where connectivity knows no bounds.`,
          },
          {
            icon: <FaHandsHelping className="w-10 h-10 text-[#27282C]" />,
            title: "Our Culture",
            text: `Our drive for exceptional service delivery is built on the belief that we are nothing if you are not satisfied with us. Our passion for helping you achieve your goals, no matter what, is what truly differentiates us from our competitors. At Sharetek, our culture is not just a distant goal; it's a driving force that shapes our strategies, fuels our innovation, and guides our interactions with clients, partners, and the community.`,
          },
        ].map(({ icon, title, text }, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-5 text-center"
          >
            {icon}
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm lg:text-[10px] xl:text-sm">{text}</p>
          </div>
        ))}
      </section>

      <section className="relative flex flex-col-reverse gap-5 py-20 mx-5 text-black md:flex-row md:mx-24">
        {/* Map with flickering Zimbabwe marker */}
        <div className="relative md:w-1/2">
          <img
            src="/world-map-grid-background.png"
            alt="world map"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />

          {/* Flickering Zimbabwe Marker (Clickable) */}
          <a
            href="https://maps.app.goo.gl/js9L5GThgqoY45gX6"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute"
            style={{ top: "66%", left: "54%" }} // tweak this for perfect placement
          >
            <div className="relative w-4 h-4">
              {/* Static background circle */}
              <span className="absolute w-4 h-4 rounded-full bg-[#27282C] opacity-30 top-0 left-0" />
              {/* Flickering circle */}
              <span className="absolute w-4 h-4 rounded-full bg-[#27282C] flicker top-0 left-0" />
            </div>
          </a>
        </div>

        {/* Text and Buttons */}
        <div className="space-y-10 text-center md:w-1/2 md:text-start">
          <div>
            <p className="text-sm font-semibold text-[#27282C] whitespace-nowrap">
              Locations
            </p>
            <h1 className="pt-5 text-2xl font-bold">
              We are growing our presence in the African region.
            </h1>
          </div>

          <div className="space-y-3">
            <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#27282C] before:mt-2 before:mr-2 before:inline-block">
              <p>
                <strong>Zimbabwe</strong>: 13 Brentwood Avenue, Harare, Zimbabwe
              </p>
            </div>
            <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#27282C] before:mt-2 before:mr-2 before:inline-block">
              <p>
                <strong>South Africa</strong>: 12 Riversands Road, Beverly,
                Sandton, South Africa, 2191
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-4 md:flex-row">
            <CustomButton
              variant="primary"
              className="!bg-[#27282C] !text-white hover:!bg-black"
            >
              Speak to an Expert
            </CustomButton>
            <CustomButton variant="link">
              Learn more about services
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section>
        <div className="px-4 md:px-20 bg-gradient-to-t from-[#F9FAFB] to-white py-10">
          <div className="flex items-center my-10">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-sm font-semibold text-[#27282C] whitespace-nowrap">
              OUR CLIENTS
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <LogoSlider logos={logos} />
        </div>
      </section>

      {/* Our Team Section - Centered Headers & Full Height Profiles */}
      <section className="py-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl md:px-24">
          {/* Section Header - Now Centered */}
          <div className="mb-20 text-center">
            <p className="text-sm font-bold text-[#A00927] uppercase tracking-widest mb-2">
              Our Team
            </p>
            <h2 className="text-4xl font-extrabold text-[#27282C] md:text-5xl">
              Meet the Leaders Behind Sharetek
            </h2>
            <div className="w-20 h-1.5 bg-[#27282C] mt-6 mx-auto rounded-full"></div>
          </div>

          {/* Team Grid: Side-by-Side */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {[
              {
                name: "Khethi Nkosi",
                role: "CEO",
                bio: "Has a Diploma in IT, Diploma in Project Management & Marketing. Numerous Leadership certificates, is an NLP (Neuro Linguistic Programming) Master Practitioner. He worked for IBM, Consology, BCX, Attachmate Netiq and then cofounded xTelekom in 2012. Khethi has 20 years ICT industry experience.",
                image: "/khethi-nkosi.png",
                btnColor: "bg-[#A00927]",
              },
              {
                name: "Takudzwa Keith Chimeto",
                role: "CTO",
                bio: "Takudzwa Keith Chimeto is an African tech entrepreneur passionate about building systems that enable people to do business digitally and securely. As the founder of Smatpay and other technology platforms, he focuses on fintech, digital media monetization, and scalable infrastructure.",
                image: "/keith-chimeto.JPG",
                btnColor: "bg-[#27282C]",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row bg-[#F9FAFB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 h-full"
              >
                {/* Image Side - Full Height */}
                <div className="relative w-full md:w-[45%] aspect-square rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 object-cover w-full h-full transition-all duration-1000"
                  />

                  {/* Subtle brand overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#27282C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center bg-white relative">
                  {/* Top brand accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-1 mb-1 ${member.btnColor}`}
                  ></div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-gray-400">
                    {member.role} — Sharetek
                  </span>

                  <h3 className="text-2xl font-black text-[#27282C] mb-4 group-hover:text-[#A00927] transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>

                  {/* Bottom brand accent line */}
                  <div className="flex items-center gap-3 mt-6">
                    <div
                      className={`h-1 w-10 rounded-full ${member.btnColor}`}
                    ></div>
                    <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End of Our Clients */}
      <Footer />
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaShieldAlt, FaSyncAlt, FaChartLine, FaLock, FaBell, FaHandshake, FaChevronDown } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Footer from '@/app/components/Footer';

// Animation Variants - Fixed transition property
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const stagger = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.15 
    } 
  },
};

// Counter Component
const StatCounter = ({ end, suffix, text }: { end: number; suffix?: string; text: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div 
      ref={ref} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold text-[#8DC440]">
        {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : `0${suffix || ""}`}
      </h3>
      <p className="mt-2 text-lg text-white/90">{text}</p>
    </motion.div>
  );
};

// Hero Background
const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <Image src="/placeholder-hero.jpg" alt="SmatSure background" fill className="object-cover object-center" priority quality={90} />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>
);

// FAQ Accordion Item Component
const FAQItem = ({ item, idx }: { item: { q: string; a: string }; idx: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-5 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#03577A]">{item.q}</h3>
        <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#8DC440]" : "rotate-0 text-[#03577A]"}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <p className="text-gray-700">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function SmatSurePage() {
  const features = [
    { icon: <FaSyncAlt />, title: "Automated Risk Placement", desc: "Streamlines matching risks with reinsurance solutions." },
    { icon: <FaHandshake />, title: "Offer Management", desc: "Digitizes negotiation and acceptance processes." },
    { icon: <FaShieldAlt />, title: "Claims Processing", desc: "Transparent, trackable claims workflow." },
    { icon: <FaChartLine />, title: "Regulatory Oversight", desc: "Real-time compliance and reporting tools." },
    { icon: <FaLock />, title: "Secure Data", desc: "Advanced encryption and safe storage of data." },
    { icon: <FaBell />, title: "Real-Time Notifications", desc: "Keeps stakeholders updated instantly." },
  ];

  const faqItems = [
    { q: "What is SmatSure?", a: "SmatSure is a digital reinsurance platform built to modernize Africa's insurance sector through automation, transparency, and compliance." },
    { q: "Who can use it?", a: "Insurers, reinsurers, brokers, and regulators can all leverage the SmatSure platform." },
    { q: "Is it secure?", a: "Yes, SmatSure uses enterprise-grade encryption, authentication, and compliance tools." },
    { q: "Does it integrate with regulators?", a: "The system is designed to integrate with African Insurance & Pension Regulatory Authorities." },
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="relative px-6 py-32 md:px-24">
        <HeroBackground />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl p-6 space-y-8 text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#8DC440]">
              <FaShieldAlt className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-[#8DC440] text-xl lg:text-3xl font-bold">SmatSure</h1>
          </div>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Transform Africa's Reinsurance with <span className="text-[#8DC440]">SmatSure</span>
          </h2>

          <p className="max-w-2xl text-xl text-white/90">
            A next-gen digital platform that streamlines risk placement, offer management, claims, and compliance across Africa's insurance ecosystem.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#features" className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-full shadow-lg hover:bg-white hover:text-[#8DC440] hover:scale-105 transition-all duration-300">
              Explore Features
            </a>
            <a href="/contact-us" className="px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-[#03577A] transition-all duration-300">
              Request Demo
            </a>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="container flex flex-col items-center gap-12 px-6 py-20 mx-auto md:flex-row md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-900">Why SmatSure?</h2>
          <p className="text-lg text-gray-700">
            The African reinsurance sector struggles with manual, paper-based processes, fragmented communication, and regulatory risks. SmatSure centralizes and digitizes operations, cutting delays, reducing costs, and boosting transparency.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center"><FaCheckCircle className="text-[#8DC440] mr-2" />Cut placement time by 70%</li>
            <li className="flex items-center"><FaCheckCircle className="text-[#8DC440] mr-2" />Lower admin costs by up to 20%</li>
            <li className="flex items-center"><FaCheckCircle className="text-[#8DC440] mr-2" />Enhance regulator trust and compliance</li>
          </ul>
        </motion.div>
        <div className="relative overflow-hidden md:w-1/2 h-96 rounded-xl">
          <Image src="/placeholder-intro.jpg" alt="SmatSure overview" fill className="object-cover rounded-2xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-[#03577A] text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 md:px-24"
        >
          <StatCounter end={70} suffix="%" text="Faster Placements" />
          <StatCounter end={40} suffix="%" text="Fewer Compliance Issues" />
          <StatCounter end={95} suffix="%" text="Customer Satisfaction" />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 md:px-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#4A90A4]">Key Features</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.15 }}
              className="p-6 transition bg-white shadow rounded-2xl hover:shadow-lg hover:-translate-y-2"
            >
              <div className="text-4xl text-[#8DC440] mb-4">{f.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Background Section */}
      <section className="relative px-6 py-20 md:px-24 bg-gradient-to-r from-gray-50 via-white to-gray-100">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#03577A]">
              The Need for SmatSure
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Africa's reinsurance market is still dominated by <span className="font-semibold text-[#8DC440]">manual paperwork</span>,
              fragmented communication, and regulatory bottlenecks. This slows down placement, increases costs, and reduces trust.
              Without modernization, the industry risks being left behind in a rapidly digitizing global market.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center"><FaCheckCircle className="text-[#8DC440] mr-2" /> Paper-based inefficiencies drive up costs</li>
              <li className="flex items-center"><FaCheckCircle className="text-[#8DC440] mr-2" /> Regulatory oversight often lags behind</li>
              <li className="flex items-center"><FaCheckCircle className="text-[#8DC440] mr-2" /> Trust and transparency are compromised</li>
            </ul>
          </motion.div>

          <div className="relative w-full overflow-hidden shadow-lg h-96 rounded-2xl">
            <Image
              src="/placeholder-background.jpg"
              alt="African insurance modernization"
              fill
              className="object-cover transition-transform duration-500 rounded-2xl hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="px-6 py-20 bg-white md:px-24">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03577A]">Proposed Solution</h2>
          <p className="text-lg text-gray-700">
            SmatSure is not just a platform — it's a <span className="font-semibold text-[#8DC440]">digital backbone</span> for Africa's reinsurance sector,
            designed to cut delays, enhance compliance, and build trust.
            From placement to claims, SmatSure transforms the full value chain.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-6 transition shadow bg-gray-50 rounded-2xl hover:shadow-lg hover:-translate-y-2"
          >
            <FaSyncAlt className="text-4xl text-[#8DC440] mb-4" />
            <h3 className="mb-2 text-xl font-semibold">Automated Placement</h3>
            <p className="text-gray-600">AI-powered system for faster, accurate matching of risks and reinsurance offers.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="p-6 transition shadow bg-gray-50 rounded-2xl hover:shadow-lg hover:-translate-y-2"
          >
            <FaShieldAlt className="text-4xl text-[#8DC440] mb-4" />
            <h3 className="mb-2 text-xl font-semibold">Claims Digitization</h3>
            <p className="text-gray-600">End-to-end digital claims management with full transparency and tracking.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="p-6 transition shadow bg-gray-50 rounded-2xl hover:shadow-lg hover:-translate-y-2"
          >
            <FaChartLine className="text-4xl text-[#8DC440] mb-4" />
            <h3 className="mb-2 text-xl font-semibold">Regulatory Integration</h3>
            <p className="text-gray-600">Seamless compliance with African insurance & pension authorities.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 md:px-24 bg-gray-50">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-[#03577A]">FAQs</h2>
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative w-full overflow-hidden shadow-lg h-80 md:h-full rounded-2xl">
            <Image
              src="/placeholder-faq.jpg"
              alt="FAQ illustration"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <FAQItem key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative flex items-center justify-center px-6 py-24 bg-[#8DC440] text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="text-4xl font-extrabold">Ready to Modernize Reinsurance?</h2>
          <p className="text-lg md:text-xl text-white/90">
            SmatSure is here to drive efficiency, transparency, and compliance across Africa's insurance sector.
          </p>
          <a href="/contact-us" className="inline-block px-10 py-4 text-lg font-bold bg-white text-[#8DC440] rounded-full shadow hover:scale-105 transition-all duration-300">
            Get Started
          </a>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
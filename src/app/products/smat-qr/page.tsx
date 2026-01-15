"use client";

import Image from 'next/image';
import FeatureCard from '@/app/components/FeatureCard';
import FooterAccordion2 from '@/app/components/FooterAccordion2';
import Footer from '@/app/components/Footer';
import { ImageLeftAccordionRight } from "@/app/components/ImageLeftAccordionRight";
import { FaBell, FaMobileAlt, FaCreditCard, FaMotorcycle, FaEdit, FaWhatsapp, FaQrcode, FaLanguage, FaDollarSign, FaClock, FaChartLine, FaHeart, FaChartBar, FaCheckCircle } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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

// Stats Counter Component
const StatCounter = ({ end, suffix, text }: { end: number; suffix: string; text: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-white">
        {inView ? <CountUp end={end} duration={2.75} suffix={suffix} /> : '0' + suffix}
      </div>
      <p className="mt-2 text-white">{text}</p>
    </div>
  );
};

// Hero Background Component
const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <Image src="/smat_qr_bg.png" alt="SmatQR background" fill className="object-cover object-center" priority quality={90} />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
);

// Image Card Component
const ImageCard = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-white shadow-lg rounded-2xl hover:scale-105">
    <div className="relative w-full mb-4 overflow-hidden rounded-xl h-60">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </div>
    <h3 className="text-lg font-semibold text-center text-gray-800">{caption}</h3>
  </div>
);

export default function SmatQr() {
  const targetMarketImages = [
    { src: '/restaurant.jpg', alt: 'Restaurant using SmatQR digital menu', caption: 'Restaurants' },
    { src: '/coffee.jpg', alt: 'Coffee Shop with SmatQR code on table', caption: 'Coffee Shops' },
    { src: '/restaurant_1.png', alt: 'Cafe offering contactless ordering with SmatQR', caption: 'Cafes' },
  ];

  const faqItems = [
    { question: "How do customers access the menu with SmatQR?", answer: "Customers simply scan a QR code placed on their table or at your counter using their smartphone camera. No app download is required." },
    { question: "Can I update my menu in real-time?", answer: "Yes, SmatQR allows you to instantly update menu items, prices, descriptions, and availability from your admin dashboard, without reprinting." },
    { question: "Does SmatQR support online payments?", answer: "Absolutely. Our system integrates with secure online payment gateways, allowing customers to pay directly from their phones for a seamless experience." },
    { question: "Is there a feature for customers to call a waiter?", answer: "Yes, SmatQR includes a 'Call Waiter' function, enabling customers to discreetly request service with a single tap on their device." },
    { question: "Can SmatQR be used for delivery and takeout orders?", answer: "Yes, SmatQR can integrate with delivery services and provides options for customers to place orders for takeout, enhancing your operational flexibility." }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SmatQR",
    "description": "SmatQR is a contactless digital menu and ordering system for restaurants, cafes, and other food service businesses. It enables customers to view menus, place orders, and pay directly from their smartphones by scanning a QR code.",
    "brand": { "@type": "Brand", "name": "SmaTech Group" },
    "url": "https://sharetek.co.za/products/smatqr",
    "logo": "https://sharetek.co.za/services_icon.svg",
    "image": "https://sharetek.co.za/smat_qr_phone.jpg",
    "slogan": "Transform your restaurant with contactless QR code menus, seamless ordering, and integrated payments.",
    "audience": { "@type": "Audience", "audienceType": "Restaurants, Coffee Shops, Cafes" },
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "SmaTech Group" } }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero Section */}
<section className="relative px-6 py-32 md:px-24">
  <HeroBackground />
  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-3xl p-6 space-y-8 text-white">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative flex items-center justify-center w-10 h-10">
        {/* Custom SVG QR code icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#8DC440]">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
          <path d="M20 18h.01" />
          <path d="M16 12h.01" />
          <path d="M20 12h.01" />
          <path d="M20 16h.01" />
          <path d="M16 20h.01" />
          <path d="M12 16h.01" />
          <path d="M12 20h.01" />
        </svg>
      </div>
      <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">SmatQr</h1>
    </div>

    <h2 className="text-4xl font-bold lg:text-5xl">
      Revolutionize Your Restaurant with <span className="text-[#8DC440]">SmatQR</span>
    </h2>

    <p className="max-w-2xl text-xl">
      SmatQR is a contactless ordering system that lets customers view menus, order, and pay from their phone. It helps restaurants streamline service and increase revenue.
    </p>

    <div className="flex flex-col gap-4 sm:flex-row">
      <a href="https://www.smatqr.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-full shadow-lg hover:bg-[#7bb033] hover:scale-105">
        Get Started Today
      </a>
      <a href="#features" className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-[#03577A]">
        Learn More
      </a>
    </div>
  </motion.div>
</section>

      {/* Introduction Section */}
      <div id="features" className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:px-24 ">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">SmatQR Overview</h2>
          <p className="text-lg text-black">
            SmatQR offers innovative QR code menu services that revolutionize the way restaurants,
            retailers, and other businesses serve customers. Our QR code menus provide customers
            with a fast and convenient way to access restaurant menus and place orders directly from their devices.
          </p>
          <ul className="mt-6 space-y-3 text-black">
            <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-500" />No app download required</li>
            <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-500" />Set up in less than 24 hours</li>
            <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-500" />24/7 customer support</li>
          </ul>
        </div>

        <div className="relative md:w-1/2 h-96 rounded-xl">
          <Image src="/smat_qr_phone.jpg" alt="SmatQR phone app interface showing a digital menu" fill className="object-contain rounded-3xl" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-12 bg-[#03577A] text-white">
        <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 md:px-24">
          <StatCounter end={40} suffix="%" text="Faster Service" />
          <StatCounter end={80} suffix="%" text="Reduced Printing Costs" />
          <StatCounter end={95} suffix="%" text="Customer Satisfaction" />
        </div>
      </div>

      {/* Key Features */}
      <section className="px-6 py-16 md:px-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#4A90A4]">Key Product Features</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard icon={FaQrcode} title="Instant Menu Access" description="Customers scan a QR code to view your digital menu immediately, no app download needed." />
          <FeatureCard icon={FaBell} title="Seamless Waiter Call" description="Guests can call a waiter with a single tap, reducing wait times and improving service efficiency." />
          <FeatureCard icon={FaMobileAlt} title="Contactless Ordering" description="Minimize physical contact with a safe and hygienic ordering process directly from the customer's phone." />
          <FeatureCard icon={FaCreditCard} title="Integrated Payments" description="Support multiple secure payment methods, allowing customers to pay directly from their table." />
          <FeatureCard icon={FaMotorcycle} title="Delivery & Takeout" description="Seamlessly integrate with delivery services to manage takeout and delivery orders from one platform." />
          <FeatureCard icon={FaEdit} title="Real-time Menu Updates" description="Easily update menu items, prices, and availability instantly from your dashboard." />
          <FeatureCard icon={FaWhatsapp} title="WhatsApp Integration" description="Orders are sent directly to your WhatsApp Business account for simple, direct management." />
          <FeatureCard icon={FaLanguage} title="Multi-language Menus" description="Offer menus in multiple languages to cater to all guests." />
          <FeatureCard icon={FaChartBar} title="Performance Analytics" description="Gain valuable insights into customer preferences and sales trends to optimize operations." />
        </div>
      </section>

      {/* Benefits Section */}
      <div className="px-6 py-24 md:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center text-black">Benefits of SmatQR</h2>
        <FooterAccordion2 icon={<FaDollarSign className="text-[#03577A] w-6 h-6" />} title="Save Time & Money" description="Reduce costs associated with printing and distributing traditional menus." />
        <FooterAccordion2 icon={<FaHeart className="text-[#03577A] w-6 h-6" />} title="Increase Customer Loyalty" description="Reduce customer wait times for better satisfaction and loyalty." />
        <FooterAccordion2 icon={<FaClock className="text-[#03577A] w-6 h-6" />} title="Boost Operational Efficiency" description="Customers place orders faster via QR code, saving time." />
        <FooterAccordion2 icon={<FaChartLine className="text-[#03577A] w-6 h-6" />} title="Enhance Data Management" description="Store and analyze valuable customer order and payment data." />
      </div>

      {/* Target Market */}
      <div className="px-6 py-12 bg-white md:px-24">
        <h2 className="mb-6 text-4xl font-bold text-center text-black">Our Target Market</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {targetMarketImages.map((img, idx) => (
            <ImageCard key={idx} src={img.src} alt={img.alt} caption={img.caption} />
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <section className="relative flex items-center justify-center px-6 py-24 overflow-hidden text-center bg-[#03577A] md:px-24">
        <div className="absolute inset-0 bg-[#03577A] opacity-90"></div>
        <div className="relative z-20 max-w-4xl mx-auto space-y-8 text-white">
          <h2 className="text-4xl font-extrabold lg:text-6xl">Ready to Ditch Paper Menus?</h2>
          <p className="text-lg lg:text-xl text-white/90">
            Join hundreds of restaurants, cafes, and bars transforming their service with SmatQR. Get a custom quote today.
          </p>
          <a href="#" className="inline-flex items-center px-12 py-5 text-xl font-bold text-[#03577A] bg-[#8DC440] rounded-full shadow-lg hover:scale-105 hover:bg-white">
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-12 md:py-24 md:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center text-black">SmatQR FAQs</h2>
        <ImageLeftAccordionRight imageSrc="/smat_qr_faq_image.jpg" imageAlt="Person scanning QR code menu" items={faqItems} />
      </section>

      <Footer />
    </div>
  );
}




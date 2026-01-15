'use client';

import Image from 'next/image';import Footer from '@/app/components/Footer';import {FaShieldAlt,FaSchool,FaBuilding,FaHome,FaHospital,FaIndustry,FaTicketAlt,FaLandmark,FaStore,FaArrowRight,FaUserCheck,FaCogs,FaRocket,FaTachometerAlt,FaGlobe,FaLink,FaCubes,FaCheckCircle,FaHeadset,FaRocketchat,FaEnvelope,FaWhatsapp,FaQrcode,FaTimes,FaChevronDown,FaChevronUp,FaCar,FaEye,FaTools} from "react-icons/fa";
import HorizontalFooterAccordion from '@/app/components/HorizontalFooterAccordion';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { useState } from 'react';
import { coreFeatures } from './CoreFeatures';
import { Device, deviceData } from './Device';
import { benefits } from './Benefits';
import EnhancedFeatureCard from './EnhancedFeatureCard';
import CTAButton from './CTAButton';

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

// Helper component for animated stats
function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col items-center justify-center w-full gap-2 p-6 bg-white shadow-md md:w-auto rounded-xl"
        >
            <p className="text-4xl font-bold text-[#0EA4CC]">
                {inView ? <CountUp end={value} duration={2.5} separator="," /> : 0}
                {suffix}
            </p>
            <p className="text-lg text-gray-700">{label}</p>
        </motion.div>
    );
}

// Animated Section Component
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
        >
            {children}
        </div>
    );
}

// Animated Card Component
function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 transform ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:-translate-y-2 hover:shadow-xl`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

// MODIFICATION 3: Defined animation variants for the modal and its backdrop
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } }
};

// TS-safe variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier for easeOut
    },
  },
};

// MODAL Component for device details with improved layout
interface ModalProps {
    show: boolean;
    onClose: () => void;
    content: Device | null;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
    if (!show || !content) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70"
            onClick={onClose}
        >
            <div className="flex items-center justify-center min-h-full p-4">
                <div
                    className="relative w-full max-w-4xl mx-auto overflow-hidden transition-all duration-300 transform scale-100 bg-white shadow-2xl rounded-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute z-10 p-2 text-2xl text-gray-400 transition-colors duration-200 bg-white rounded-full shadow-md top-4 right-4 hover:text-gray-800 bg-opacity-90"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                    
                    {/* Desktop Layout */}
                    <div className="hidden md:flex">
                        {/* Left side - Image centered and enlarged */}
                        <div className="relative flex items-center justify-center flex-shrink-0 w-1/2 min-h-[500px] bg-gray-50">
                            <div className="relative w-4/5 h-80">
                                <Image
                                    src={content.modalImageSrc || content.imageSrc}
                                    alt={content.title}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="40vw"
                                />
                            </div>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className="w-1/2 p-8 overflow-y-auto">
                            <h3 className="mb-4 text-3xl font-bold text-[#0EA4CC]">{content.title}</h3>
                            <p className="mb-6 text-gray-700">{content.modalDescription}</p>
                            <ul className="mb-8 space-y-3 text-gray-600">
                                {content.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-green-500" />
                                        <span>
                                            <span className="font-semibold">{detail.split(':')[0]}:</span> {detail.split(':').slice(1).join(':')}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <CTAButton text="Contact Sales" href="/contact-us" />
                        </div>
                    </div>

                    {/* Mobile Layout - Scrollable */}
                    <div className="md:hidden max-h-[85vh] overflow-y-auto">
                        {/* Image at top - centered */}
                        <div className="relative flex items-center justify-center w-full h-80 bg-gray-50">
                            <div className="relative w-4/5 h-4/5">
                                <Image
                                    src={content.modalImageSrc || content.imageSrc}
                                    alt={content.title}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="80vw"
                                />
                            </div>
                        </div>
                        
                        {/* Content below */}
                        <div className="p-6 pb-8">
                            <h3 className="mb-4 text-2xl font-bold text-[#0EA4CC]">{content.title}</h3>
                            <p className="mb-6 leading-relaxed text-gray-700">{content.modalDescription}</p>
                            <ul className="mb-8 space-y-4 text-gray-600">
                                {content.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="flex-shrink-0 mt-1 mr-3 text-green-500" />
                                        <span className="text-sm leading-relaxed">
                                            <span className="font-semibold">{detail.split(':')[0]}:</span> {detail.split(':').slice(1).join(':')}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 text-center border-t border-gray-200">
                                <div className="w-full">
                                    <CTAButton text="Contact Sales" href="/contact-us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Device Card Component
interface DeviceCardProps {
    device: Device;
    onLearnMore: (device: Device) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onLearnMore }) => (
    <div className="relative flex flex-col items-center justify-center p-6 overflow-hidden text-center text-white bg-black rounded-xl" style={{ backgroundColor: '#07162b' }}>
        <div className="absolute inset-0 opacity-20">
            {/* Optional: Add subtle background texture */}
        </div>
        <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                <span className="font-light">Smat</span> <br />{device.title}
            </h3>
            <div className="relative w-full h-64 my-6">
                <Image
                    src={device.imageSrc}
                    alt={device.title}
                    fill
                    className="object-contain transition-transform duration-500 transform hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                />
            </div>
            <CTAButton
                text="Learn More"
                onClick={() => onLearnMore(device)}
                variant="primary"
                className="w-full sm:w-auto"
            />
        </div>
    </div>
);



export default function SmatAccess() {
    // Modal State Hooks
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<Device | null>(null);

    // Enhanced Features State
    const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set());

    const handleLearnMore = (device: Device) => {
        setModalContent(device);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    const toggleFeature = (index: number) => {
        setExpandedFeatures(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "SmatAccess",
        "description": "SmatAccess is a complete physical access control solution that integrates advanced software with purpose-built devices to manage and monitor all access points, offering enhanced security, real-time monitoring, and scalable access management.",
        "brand": { "@type": "Brand", "name": "SmaTech Group" },
        "url": "https://smatechgroup.com/products/smataccess",
        "logo": "https://smatechgroup.com/smataccess_logo.svg",
        "image": "https://smatechgroup.com/smataccess_hero_image.png",
        "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "Call for pricing", "availability": "https://schema.org/InStock" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "170" }
    };


    const useCases = [
        { icon: <FaSchool className="w-10 h-10 text-[#0EA4CC]" />, title: "Schools & Institutions", description: "Manage building and campus access safely.", link: "#" },
        { icon: <FaBuilding className="w-10 h-10 text-[#0EA4CC]" />, title: "Corporate Offices", description: "Secure offices, meeting rooms, and restricted areas.", link: "#" },
        { icon: <FaHome className="w-10 h-10 text-[#0EA4CC]" />, title: "Residential Complexes", description: "Manage multiple entry points efficiently.", link: "#" },
        { icon: <FaHospital className="w-10 h-10 text-[#0EA4CC]" />, title: "Healthcare Facilities", description: "Control access to sensitive areas and patient rooms.", link: "#" },
        { icon: <FaIndustry className="w-10 h-10 text-[#0EA4CC]" />, title: "Manufacturing Sites", description: "Strict control for high-risk zones.", link: "#" },
        { icon: <FaTicketAlt className="w-10 h-10 text-[#0EA4CC]" />, title: "Event Venues", description: "Manage large crowds and staff access levels.", link: "#" },
        { icon: <FaLandmark className="w-10 h-10 text-[#0EA4CC]" />, title: "Government Buildings", description: "Monitor and control sensitive areas.", link: "#" },
        { icon: <FaStore className="w-10 h-10 text-[#0EA4CC]" />, title: "Retail & Commercial", description: "Secure storage, cash offices, and high-traffic areas.", link: "#" }
    ];

    // Property Management Focus Features
    const propertyManagementFeatures = [
        {
            icon: <FaQrcode className="w-10 h-10" />,
            title: "Visitor Code Creation",
            description: "Generate secure, time-bound QR codes for visitors, contractors, or deliveries. Gatekeepers simply scan to validate access—no unauthorized entry, no guesswork."
        },
        {
            icon: <FaUserCheck className="w-10 h-10" />,
            title: "Premium Tenant Experience",
            description: "Deliver a modern, tech-driven property environment that enhances convenience, safety, and a professional brand image."
        },
        {
            icon: <FaRocket className="w-10 h-10" />,
            title: "Scalable & Future-Ready",
            description: "Built to grow with your property portfolio, SmatAccess integrates easily with SmatProp and other SmaTech solutions."
        },
        {
            icon: <FaShieldAlt className="w-10 h-10" />,
            title: "End-to-End Security",
            description: "Advanced features like guest codes, facial recognition, and plate recognition eliminate loopholes and ensure complete property safety."
        },
    ];

    // Enhanced Core Features with Workflows


    // Hero Background Component
    const HeroBackground = () => (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <Image src="/smat_access_hero_bg.png" alt="SmatAccess background" fill className="object-cover object-center" priority quality={90} />
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
    );

    return (
        <div className="bg-gray-50">
            {/* JSON-LD Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* Modal Component */}
            <Modal show={showModal} onClose={closeModal} content={modalContent} />

            {/* Hero Section */}
            <section className="relative px-6 py-32 md:px-24">
      <HeroBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl p-6 space-y-8 text-white"
      >
        {/* Title + Icon */}
        <motion.div
          variants={fadeUpVariant}
          className="flex items-center gap-4 mb-6"
        >
          <div className="relative flex items-center justify-center w-10 h-10">
            <FaShieldAlt className="w-full h-full text-[#0EA4CC]" />
          </div>
          <h1 className="text-[#0EA4CC] text-sm lg:text-2xl font-bold">
            SmatAccess
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 variants={fadeUpVariant} className="text-4xl font-bold lg:text-5xl">
          Secure Your World with <span className="text-[#0EA4CC]">SmatAccess</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p variants={fadeUpVariant} className="max-w-2xl text-xl">
          A complete physical access control solution that integrates advanced software with purpose-built devices to manage and monitor all access points.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-4 sm:flex-row">
          <CTAButton text="Request a Demo" href="/contact-us" />
          <CTAButton text="Learn More" variant="secondary" href="#why-choose" />
        </motion.div>
      </motion.div>
    </section>

            {/* Introduction Section */}
            <div id="why-choose" className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:px-24">
                <div className="space-y-4 md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose SmatAccess?</h2>
                    <p className="text-lg text-black">
                        SmatAccess provides a robust, scalable, and intelligent access control system designed to protect what matters most. From corporate offices to educational institutions, our solution ensures that only authorized individuals can access designated areas, all while providing real-time oversight and detailed analytics.
                    </p>
                    <ul className="mt-6 space-y-3 text-black">
                        <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-500" />Scalable for any size organization</li>
                        <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-500" />Real-time monitoring and alerts</li>
                        <li className="flex items-center"><FaCheckCircle className="mr-3 text-green-500" />Centralized management for multiple sites</li>
                    </ul>
                </div>
                <div className="relative md:w-1/2 h-96 rounded-xl">
                    <Image src="/smataccess_hero_image.png" alt="SmatAccess system showing dashboard" fill className="object-contain rounded-3xl" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
            </div>

            {/* Property Management Focus Section */}
            <section className="py-20 bg-white" id="property-management-access">
                <div className="container px-6 mx-auto md:px-24">
                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-4xl font-bold text-[#0EA4CC] mb-4">
                            Smart Access & Security for <br /><span className="text-gray-800">Modern Property Management</span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600">
                            Our tailored solution is designed to optimize security, convenience, and operations for modern residential and commercial complexes.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {propertyManagementFeatures.map((feature, index) => (
                            <AnimatedCard key={index} delay={index * 150}>
                                <div className="flex flex-col items-center h-full p-6 text-center transition-shadow duration-300 shadow-lg bg-gray-50 rounded-xl hover:shadow-xl">
                                    <div className="mb-4 text-[#0EA4CC]">{feature.icon}</div>
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Core Features Section */}
            <section className="px-6 py-16 bg-gray-100 md:px-24">
                <AnimatedSection className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">Integrated Core Features</h2>
                    <p className="max-w-4xl mx-auto text-lg text-gray-600">
                        Experience advanced property access control with seamless integration and state-of-the-art security technology.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {coreFeatures.map((feature, index) => (
                        <AnimatedCard key={index} delay={index * 100}>
                            <EnhancedFeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                workflow={feature.workflow}
                                isExpanded={expandedFeatures.has(index)}
                                onToggle={() => toggleFeature(index)}
                            />
                        </AnimatedCard>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <CTAButton
                        text="Schedule Your Demo Today"
                        icon={<FaRocket />}
                        href="/contact-us"
                        variant="primary"
                    />
                </div>
            </section>

            {/* DEVICES SECTION */}
            <section className="py-20" id="our-devices" style={{ backgroundColor: '#eef2f5' }}>
                <div className="container px-6 mx-auto md:px-24">
                    <AnimatedSection className="mb-12 text-center">
                        <h2 className="mb-2 text-4xl font-bold text-gray-800">Discover Our Devices</h2>
                        <p className="text-xl text-gray-600">The hardware that powers a new era of access control.</p>
                    </AnimatedSection>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerChildren}
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
                    >
                        {deviceData.map((device, index) => (
                            <motion.div key={device.title} variants={fadeIn}>
                                <DeviceCard
                                    device={device}
                                    onLearnMore={handleLearnMore}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <AnimatedSection>
                    <h2 className="mb-6 text-3xl font-bold text-center text-black">Benefits of SmatAccess</h2>
                </AnimatedSection>
                <HorizontalFooterAccordion items={benefits} />
            </section>

            {/* Statistics Section */}
            <section className="px-6 py-16 text-center" style={{ backgroundColor: 'rgba(14, 164, 204, 0.05)' }}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren} className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <StatItem value={110} suffix=" +" label="Support Given" />
                    <StatItem value={170} suffix=" +" label="Clients Rating" />
                    <StatItem value={3098} suffix=" +" label="Money Saved" />
                    <StatItem value={97} suffix=" +" label="Happy Clients" />
                </motion.div>
            </section>

            {/* Use Cases Section */}
            <section className="px-6 py-16 bg-gray-100 md:px-24">
                <AnimatedSection>
                    <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Additional Use Cases of SmatAccess</h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {useCases.map((useCase, index) => (
                        <AnimatedCard key={index} delay={index * 100}>
                            <div className="flex flex-col items-center h-full p-6 text-center bg-white rounded-lg shadow-md">
                                <div className="mb-4 transition-transform duration-500 hover:rotate-12">{useCase.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">{useCase.title}</h3>
                                <p className="flex-grow mb-4 text-gray-600">{useCase.description}</p>
                                <a href={useCase.link} className="flex items-center gap-2 font-semibold text-[#0EA4CC] hover:underline mt-auto">
                                    Learn more <FaArrowRight />
                                </a>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="px-6 py-16 text-center bg-[#0EA4CC] text-white">
                <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Access Control?</h2>
                <p className="max-w-2xl mx-auto mb-8 text-xl">Get in touch with our team to discuss how SmatAccess can meet your security needs</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <CTAButton text="Request a Demo" icon={<FaRocketchat />} variant="secondary" href="/contact-us" />
                    <CTAButton text="Contact Us" icon={<FaEnvelope />} href="/contact-us" />
                </div>
            </section>
            <Footer />
        </div>
    );
}
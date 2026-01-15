"use client";

import Image from "next/image";
import Footer from "@/app/components/Footer";
import {
    FaCreditCard,
    FaMoneyBillWave,
    FaShieldAlt,
    FaGlobe,
    FaReceipt,
    FaRocket,
    FaLink,
    FaPlug,
    FaShareAlt,
    FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import LogoSlider from "@/app/components/LogoSlider";

// Logos for the slider
const logos = [
    { logo: "/zimswitch-logo.png", url: "/" },
    { logo: "/visa-logo.png", url: "/" },
    { logo: "/innbucks-logo.png", url: "/" },
    { logo: "/ecocash-logo.png", url: "/" },
    { logo: "/mastercard-logo.png", url: "/" },
];

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function SmatPay() {
    // JSON-LD Schema for SEO
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Payment Gateway",
        name: "SmatPay",
        description:
            "SmatPay is Zimbabwe's leading payment gateway, enabling businesses to accept local and international payments via EcoCash, InnBucks, Visa, Mastercard, and ZimSwitch. Features include ZIMRA fiscalisation, flexible fee structures, and quick payouts.",
        provider: {
            "@type": "Organization",
            name: "SmaTech Group",
        },
        areaServed: {
            "@type": "Country",
            name: "Zimbabwe",
        },
        url: "https://smatechgroup.com/products/smatpay",
        logo: "https://smatechgroup.com/services_icon.svg",
        image: "https://smatechgroup.com/smat_pay_methods.png",
        potentialAction: {
            "@type": "RegisterAction",
            name: "Register for SmatPay",
            target: "https://smatechgroup.com/products/smatpay",
        },
    };

    // Stats data
    const stats = [
        { value: 99.9, suffix: "%", label: "Uptime Reliability" },
        { value: 48, suffix: "h", label: "Fast Payout Processing" },
        { value: 10, suffix: "+", label: "Payment Methods" },
    ];

    // Animated counter component
    const StatCounter = ({
        value,
        suffix,
        label,
    }: {
        value: number;
        suffix: string;
        label: string;
    }) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
        });

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                className="p-6 text-center bg-white border border-gray-100 shadow-lg rounded-2xl"
            >
                <div className="text-4xl font-bold text-[#8140D5] mb-2">
                    {inView ? (
                        <CountUp end={value} duration={2.5} suffix={suffix} />
                    ) : (
                        `0${suffix}`
                    )}
                </div>
                <p className="font-medium text-gray-600">{label}</p>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 pt-14 scroll-smooth">
            {/* Add JSON-LD Schema to the page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* ✅ Hero Section - Updated with SmatQR style */}
            <section className="relative px-6 py-32 md:px-24">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image src="/smat_pay_bg.png" alt="SmatPay background" fill className="object-cover object-center" priority quality={90} />
                    <div className="absolute inset-0 bg-black/2"></div>
                </div>

                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-3xl p-6 space-y-8 text-white">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex items-center justify-center w-10 h-10">
                            <FaCreditCard className="w-full h-full text-[#8DC440]" />
                        </div>
                        <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">SmatPay</h1>
                    </div>

                    <h2 className="text-4xl font-bold lg:text-5xl">
                        Secure and Simple Payments with <span className="text-[#8DC440]">SmatPay</span>
                    </h2>

                    <p className="max-w-2xl text-xl">
                        Zimbabwe's leading payment gateway for secure, flexible, and efficient digital payments. Accept local and international payments with ease.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
  {/* External link for Get Started */}
  <a
    href="https://www.smatpay.africa"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-full shadow-lg hover:bg-[#7bb033] hover:scale-105"
  >
    Get Started Today
  </a>

  {/* Smooth scroll for Learn More */}
  <a
    href="#features"
    className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-[#8140D5]"
  >
    Learn More
  </a>
</div>

                </motion.div>
            </section>

            {/* Stats Section */}
            <section id="features" className="px-6 py-16md:px-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {stats.map((stat, index) => (
                        <StatCounter
                            key={index}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="px-6 py-16 bg-gradient-to-r from-purple-50 to-indigo-50 md:px-24">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center gap-12 lg:flex-row">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="flex-1"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                                Why Choose SmatPay?
                            </h2>
                            <div className="w-20 h-1 my-4 bg-[#8DC440] rounded-full"></div>
                            <p className="mt-4 text-gray-600">
                                SmatPay is designed specifically for the Zimbabwean market,
                                addressing the unique challenges faced by businesses in our
                                growing digital economy.
                            </p>

                            <div className="mt-8 space-y-6">
                                {[
                                    "Seamless integration with existing platforms",
                                    "ZIMRA fiscalisation compliance built-in",
                                    "Competitive transaction fees with flexible structures",
                                    "24-48 hour payout processing for quick access to funds",
                                    "Dedicated support from payment experts",
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start">
                                        <FaCheckCircle className="w-6 h-6 mt-1 mr-3 text-[#8DC440] flex-shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            className="flex-1"
                        >
                            <div className="relative w-full overflow-hidden bg-white shadow-xl h-96 rounded-2xl">
                                <div className="absolute inset-0 bg-[url('/smat_pay_dashboard.png')] bg-cover bg-center"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-6 py-16 bg-white md:px-24">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                            Powerful Features
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                            Everything you need to accept, manage, and grow with digital
                            payments
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {[
                            {
                                icon: <FaCreditCard className="w-8 h-8 text-[#8140D5]" />,
                                title: "Multiple Payment Methods",
                                description:
                                    "Accept payments through EcoCash, Visa, Mastercard, ZimSwitch, and more.",
                            },
                            {
                                icon: <FaMoneyBillWave className="w-8 h-8 text-[#8140D5]" />,
                                title: "Flexible Fee Structure",
                                description:
                                    "Choose to absorb, split, or pass transaction fees to customers.",
                            },
                            {
                                icon: <FaReceipt className="w-8 h-8 text-[#8140D5]" />,
                                title: "Fiscalisation",
                                description:
                                    "Automated fiscal receipting with full ZIMRA compliance.",
                            },
                            {
                                icon: <FaGlobe className="w-8 h-8 text-[#8140D5]" />,
                                title: "International Payments",
                                description: "Accept payments from anywhere in the world.",
                            },
                            {
                                icon: <FaShieldAlt className="w-8 h-8 text-[#8140D5]" />,
                                title: "Advanced Security",
                                description:
                                    "PCI-DSS compliant with tokenization and encryption.",
                            },
                            {
                                icon: <FaRocket className="w-8 h-8 text-[#8140D5]" />,
                                title: "Quick Payouts",
                                description: "Get access to your funds within 24-48 hours.",
                            },
                            {
                                icon: <FaLink className="w-8 h-8 text-[#8140D5]" />,
                                title: "Payment Links",
                                description:
                                    "Create and share payment links via email, SMS, or social media.",
                            },
                            {
                                icon: <FaPlug className="w-8 h-8 text-[#8140D5]" />,
                                title: "Easy Integration",
                                description:
                                    "Seamless integration with APIs, plugins, and popular platforms.",
                            },
                            {
                                icon: <FaShareAlt className="w-8 h-8 text-[#8140D5]" />,
                                title: "Split Payments",
                                description:
                                    "Automatically distribute funds to multiple parties.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="p-8 transition-all duration-300 shadow-md bg-gray-50 rounded-2xl hover:shadow-lg group hover:bg-white"
                            >
                                <div className="p-3 mb-6 transition-colors duration-300 bg-purple-100 rounded-xl w-fit group-hover:bg-purple-200">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-16 bg-gradient-to-r from-[#8140D5] to-[#5A2D99] text-white md:px-24">
  <div className="container mx-auto">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        Ready to Get Started with SmatPay?
      </h2>
      <p className="mt-4 text-xl opacity-90">
        Join hundreds of businesses in Zimbabwe that are transforming
        their payment processing
      </p>

      <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
        {/* External link for Create Account */}
        <a
          href="https://www.smatpay.africa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:text-[#8140D5] focus:ring-4 focus:ring-[#8DC440]/50 cursor-pointer"
        >
          Create Account
        </a>

        {/* Internal link for Contact Sales (Next.js) */}
        <a
          href="/contact-us"
          className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-[#8140D5]"
        >
          Contact Sales
        </a>
      </div>

      <div className="mt-8 text-sm opacity-75">
        No setup fees • No monthly charges • Pay only for what you use
      </div>
    </div>
  </div>
</section>


            {/* Logos Section */}
            <section>
                <div className="px-4 py-10 md:px-20 bg-[#ffffff]">
                    <div className="flex items-center my-10">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="mx-4 text-sm font-semibold text-[#00b956] whitespace-nowrap">
                            ACCEPTED PAYMENT METHODS
                        </span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <LogoSlider logos={logos} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
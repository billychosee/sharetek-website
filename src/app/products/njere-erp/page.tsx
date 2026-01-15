"use client";

import Image from 'next/image';
import Footer from '@/app/components/Footer';
import { 
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaBed,
  FaUserGraduate,
  FaUserShield,
  FaHeadset,
  FaClipboardList,
  FaMoneyBillWave,
  FaTasks,
  FaVideo,
  FaSchool,
  FaClipboardCheck,
  FaComments,
  FaBookOpen,
  FaMoneyCheckAlt,
  FaCheckCircle
} from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Link from 'next/link';

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function NjereERP() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Njere School ERP System",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web-based",
    "description": "Njere ERP is a comprehensive school management software that streamlines all aspects of an educational institution, from administration and student management to e-learning, finance with payment gateways, and multi-campus operations.",
    "brand": { "@type": "Brand", "name": "SmaTech Group" },
    "url": "https://smatechgroup.com/products/njere-erp",
    "logo": "https://smatechgroup.com/services_icon.svg",
    "image": "https://smatechgroup.com/njere_erp.jpg",
    "featureList": [
      "E-learning Management",
      "Faculty and Staff Management",
      "Timetable & Classroom Scheduling",
      "Hostel & Canteen Management",
      "Student Information System",
      "User Access Control & Security",
      "Gradebook and Marksheet Generator",
      "Multicurrency Payment Gateway Integration",
      "Assignment & Examination Management",
      "Virtual Classroom Management",
      "Multi-campus Management",
      "Attendance Tracking",
      "Communication Management",
      "Library Management",
      "Account & Salary Management"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "SmaTech Group" }
    }
  };

  const stats = [
    { value: 50, suffix: '%', label: 'Administrative Time Saved' },
    { value: 75, suffix: '%', label: 'Improved Communication' },
    { value: 90, suffix: '%', label: 'Parent Satisfaction' }
  ];

  const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeIn} className="p-6 text-center bg-white border border-gray-100 shadow-lg rounded-xl">
        <div className="text-4xl font-bold text-[#03577A] mb-2">
          {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
        </div>
        <p className="font-medium text-[#03577A]">{label}</p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative px-6 py-32 md:px-24">
  <div className="absolute inset-0 z-0">
    <Image src="/njere_bg.png" alt="Njere ERP background" fill className="object-cover object-center" priority quality={90} />
    <div className="absolute inset-0 bg-black/10"></div>
  </div>

  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-3xl p-6 space-y-8 text-white">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative flex items-center justify-center w-10 h-10">
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6.5A2.5 2.5 0 0 0 17.5 4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />
          <path d="M12 12V7" />
          <path d="M15 12V9" />
          <path d="M9 12v-3" />
        </svg>
      </div>
      <h1 className="text-sm font-bold text-white lg:text-2xl">Njere</h1>
    </div>

    <h2 className="text-4xl font-bold lg:text-6xl">Njere ERP</h2>
    <p className="max-w-2xl text-xl">
      Njere is a comprehensive and innovative school management ERP that helps you manage all aspects of your educational institution.
    </p>

    <div className="flex flex-col gap-4 sm:flex-row">
      <button className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-full shadow-lg hover:bg-[#7bb033] hover:scale-105">Request a Demo</button>
      <Link href="#about">
  <span className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-[#03577A] cursor-pointer inline-block text-center">
    Learn More
  </span>
</Link>
    </div>
  </motion.div>
</section>

      {/* Stats */}
      <section className="px-6 py-16 bg-gray-100 md:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => <StatCounter key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />)}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container flex flex-col items-center gap-12 px-6 py-16 mx-auto md:flex-row md:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex items-center justify-center md:w-1/2">
          <div className="relative w-full overflow-hidden shadow-2xl aspect-square rounded-2xl">
            <Image src="/njere_erp.jpg" alt="Dashboard of Njere ERP" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-[#03577A]">About Njere ERP</h2>
          <div className="w-20 h-1 bg-[#8DC440] rounded-full"></div>
          <p className="text-[#03577A]">
            Njere ERP, by SmaTech Group, is an all-in-one management platform for educational institutions. It digitizes and streamlines administrative, academic, and financial processes into a single system for staff, students, and parents. Its modular design covers everything from student information, e-learning, and scheduling to fees, HR, and accounting.
          </p>
          <p className="text-[#03577A]">
            The system provides powerful reporting for data-driven insights, ensures security and compliance, and is scalable for multi-campus use. Njere ERP can be customized to fit unique school policies for a smooth adoption.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Centralized platform for all school operations",
              "Digitized administrative workflows",
              "Integrated payment gateway for fee management",
              "Comprehensive reporting and analytics",
              "Multi-campus management support",
              "Secure user access and role-based permissions"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="w-5 h-5 mt-1 mr-3 text-[#8DC440] flex-shrink-0" />
                <span className="text-[#03577A]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white md:px-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold text-[#03577A] xl:text-5xl">Key Features</h2>
          <p className="text-[#03577A] text-lg">
            Discover the comprehensive tools that make Njere ERP the complete education management solution. From academic scheduling to finance, from communication to virtual classrooms, every feature is designed to simplify complex processes and enhance productivity.
          </p>
          <div className="w-20 h-1 bg-[#8DC440] rounded-full"></div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren} className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <FaBook className="w-6 h-6 text-[#03577A]" />, title: "E-learning Management" },
            { icon: <FaChalkboardTeacher className="w-6 h-6 text-[#03577A]" />, title: "Faculty and Staff Management" },
            { icon: <FaClock className="w-6 h-6 text-[#03577A]" />, title: "Timetable & Classroom Scheduling" },
            { icon: <FaBed className="w-6 h-6 text-[#03577A]" />, title: "Hostel & Canteen Management" },
            { icon: <FaUserGraduate className="w-6 h-6 text-[#03577A]" />, title: "Student Information System" },
            { icon: <FaUserShield className="w-6 h-6 text-[#03577A]" />, title: "User Access Control & Security" },
            { icon: <FaHeadset className="w-6 h-6 text-[#03577A]" />, title: "Enquiry & Contact Management" },
            { icon: <FaClipboardList className="w-6 h-6 text-[#03577A]" />, title: "Gradebook and Marksheet Generator" },
            { icon: <FaMoneyBillWave className="w-6 h-6 text-[#03577A]" />, title: "Multicurrency Payment Gateway" },
            { icon: <FaTasks className="w-6 h-6 text-[#03577A]" />, title: "Assignment & Examination Management" },
            { icon: <FaVideo className="w-6 h-6 text-[#03577A]" />, title: "Virtual Classroom Management" },
            { icon: <FaSchool className="w-6 h-6 text-[#03577A]" />, title: "Multi-campus Management" },
            { icon: <FaClipboardCheck className="w-6 h-6 text-[#03577A]" />, title: "Attendance Tracking" },
            { icon: <FaComments className="w-6 h-6 text-[#03577A]" />, title: "Communication Management" },
            { icon: <FaBookOpen className="w-6 h-6 text-[#03577A]" />, title: "Library Management" },
            { icon: <FaMoneyCheckAlt className="w-6 h-6 text-[#03577A]" />, title: "Account & Salary Management" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeIn} className="flex flex-col items-center p-6 text-center transition-all duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-lg">
              <div className="p-3 mb-4 rounded-full bg-blue-50">{item.icon}</div>
              <h3 className="font-medium text-[#03577A]">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Web Conferencing Section */}
      <section className="container flex flex-col items-center gap-12 px-6 py-16 mx-auto md:flex-row md:py-24 bg-gray-50 rounded-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-[#03577A]">Integrated Web Conferencing</h2>
          <div className="w-20 h-1 bg-[#8DC440] rounded-full"></div>
          <p className="text-[#03577A]">
            Njere ERP integrates seamlessly with web conferencing tools to support remote learning, online meetings, and virtual collaboration. Schools can conduct live classes, parent-teacher meetings, staff training, and administrative discussions all within a secure platform.
          </p>
          <ul className="space-y-2">
            {[
              { title: "Real-time Communication", desc: "High-quality audio and video capabilities for seamless interaction." },
              { title: "Interactive Collaboration", desc: "Shared whiteboards, screen sharing, and document collaboration to enhance learning experiences." },
              { title: "Group Activities", desc: "Breakout rooms for small group discussions, project collaboration, and focused sessions." },
              { title: "Engagement Tools", desc: "Polls, quizzes, chat, and other interactive features to maintain participation and engagement." }
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="w-5 h-5 mt-1 mr-3 text-[#8DC440]" />
                <div>
                  <h4 className="font-semibold text-[#03577A]">{item.title}</h4>
                  <p className="text-[#03577A]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="flex items-center justify-center md:w-1/2">
          <div className="relative w-full overflow-hidden shadow-2xl aspect-square rounded-2xl">
            <Image src="/njere_key_feature.png" alt="Virtual Classroom Feature" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-[#03577A] text-white md:px-24 md:py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Transform Your School Management?</h2>
          <p className="mt-4 text-xl opacity-90">
           Join hundreds of schools streamlining operations with Njere ERP. Take control of administration, boost engagement, and optimize management.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
            <button className="px-8 py-4 text-lg font-bold text-white bg-[#8DC440] rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 hover:text-[#03577A]">Schedule a Demo</button>
            <Link href="/contact-us">
  <span className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-[#03577A] cursor-pointer inline-block text-center">
    Contact Sales
  </span>
</Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

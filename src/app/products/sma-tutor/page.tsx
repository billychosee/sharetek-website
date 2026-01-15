"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { 
  FaCheckCircle, FaChevronDown, FaChalkboardTeacher, FaBook, 
  FaUserGraduate, FaMobileAlt, FaCreditCard, FaQuoteLeft, FaGraduationCap 
} from "react-icons/fa";
import Footer from '@/app/components/Footer';
import LogoSlider from '@/app/components/LogoSlider';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const logos = [
  { logo: "/zimswitch-logo.png", url: "/" },
  { logo: "/visa-logo.png", url: "/" },
  { logo: "/innbucks-logo.png", url: "/" },
  { logo: "/ecocash-logo.png", url: "/" },
  { logo: "/mastercard-logo.png", url: "/" },
];

// FAQ Accordion
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
        <h3 className="text-lg font-semibold text-[#0577DD]">{item.q}</h3>
        <FaChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#8DC440]" : "rotate-0 text-[#0577DD]"}`}
        />
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

export default function SmaTutorPage() {
  const faqItems = [
    { q: "What is SmaTutor?", a: "SmaTutor is an online platform connecting students with expert tutors — helping learners achieve goals while tutors grow their careers." },
    { q: "Who can join?", a: "Tutors, students of all levels, parents, and professionals seeking to upskill are welcome on SmaTutor." },
    { q: "How do payments work?", a: "You can pay securely via Visa, Mastercard, EcoCash, Innbucks, and more." },
    { q: "Is there a mobile app?", a: "Yes! SmaTutor mobile app is available for learning and teaching on the go." },
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative px-6 py-32 md:px-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/smatutor-hero.jpg" alt="SmaTutor background" fill className="object-cover object-center" priority quality={90} />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-3xl p-6 space-y-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <FaGraduationCap className="w-10 h-10 text-white" />
            <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">SmaTutor</h1>
          </div>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Empowering <span className="text-[#8DC440]">Students</span> & <span className="text-[#8DC440]">Tutors</span> to Thrive Together
          </h2>

          <p className="max-w-2xl text-xl">
            Whether you’re a student seeking knowledge or a tutor sharing expertise, SmaTutor is your gateway to growth and success.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.smatutor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-bold text-white bg-[#0577DD] rounded-full shadow-lg hover:bg-[#0466c8] hover:scale-105 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-[#0577DD]"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </section>

      {/* About SmaTutor Section */}
<section id="about" className="px-6 py-20 bg-white md:px-24">
  <div className="grid items-stretch gap-12 md:grid-cols-2">
    
    {/* Text Left */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="flex flex-col justify-center space-y-6"
    >
      <h2 className="text-3xl font-bold text-[#0577DD]">What is SmaTutor?</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        SmaTutor is a modern e-learning platform that connects 
        <span className="text-[#8DC440] font-semibold"> students</span> 
        with expert <span className="text-[#8DC440] font-semibold">tutors</span>. 
        Whether you’re learning or teaching, SmaTutor empowers 
        growth through flexible learning, secure payments, 
        and a mobile-first experience.
      </p>

      {/* Feature Cards (Icon + Title) */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center p-6 transition bg-white shadow rounded-2xl hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#0577DD] to-[#8DC440] text-white text-2xl">
            <FaUserGraduate />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Expert Tutors</h3>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center p-6 transition bg-white shadow rounded-2xl hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#8DC440] to-[#0577DD] text-white text-2xl">
            <FaChalkboardTeacher />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Flexible Learning</h3>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center p-6 transition bg-white shadow rounded-2xl hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 text-2xl text-white rounded-xl bg-gradient-to-r from-pink-500 to-purple-500">
            <FaCreditCard />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Secure Payments</h3>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center p-6 transition bg-white shadow rounded-2xl hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 text-2xl text-white rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
            <FaMobileAlt />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900">Mobile App</h3>
        </div>
      </div>
    </motion.div>

    {/* Image Right (same height as text section) */}
    <div className="relative w-full h-full min-h-[450px] overflow-hidden shadow-lg rounded-2xl">
      <Image
        src="/smatutor-about.jpg"
        alt="About SmaTutor"
        fill
        className="object-cover"
      />
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section className="relative px-6 py-20 overflow-hidden md:px-24 bg-gray-50">
        {/* Background floating icons */}
        <motion.div className="absolute -top-10 -left-10 text-[#0577DD]/10"
          animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <FaGraduationCap size={100} />
        </motion.div>
        <motion.div className="absolute bottom-10 right-10 text-[#8DC440]/10"
          animate={{ y: [0, -15, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <FaBook size={90} />
        </motion.div>
        <motion.div className="absolute top-1/3 left-1/2 text-[#0577DD]/10"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <FaChalkboardTeacher size={120} />
        </motion.div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-center text-[#0577DD] mb-16 relative z-10">
          How It Works for Students & Tutors
        </h2>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-12">
          {/* Step 1 */}
          <motion.div className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg md:flex-row md:gap-12 rounded-2xl hover:shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0577DD] text-white text-3xl font-bold shadow-lg">1</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Sign Up: Student or Tutor</h3>
              <p className="mt-2 text-gray-700">Create your profile to learn or teach. Students get instant access to tutors, tutors showcase their expertise.</p>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div className="w-1 h-20 bg-gradient-to-b from-[#0577DD] to-[#8DC440] rounded-full"
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          />

          {/* Step 2 */}
          <motion.div className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg md:flex-row md:gap-12 rounded-2xl hover:shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0577DD] text-white text-3xl font-bold shadow-lg">2</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Match & Connect</h3>
              <p className="mt-2 text-gray-700">Students discover vetted tutors, while tutors connect with motivated learners ready to grow.</p>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div className="w-1 h-20 bg-gradient-to-b from-[#0577DD] to-[#8DC440] rounded-full"
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Step 3 */}
          <motion.div className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg md:flex-row md:gap-12 rounded-2xl hover:shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0577DD] text-white text-3xl font-bold shadow-lg">3</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Learn & Earn</h3>
              <p className="mt-2 text-gray-700">Students achieve academic excellence, while tutors grow their careers and income.</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-12"
          >
            <a
              href="https://smatutor.com/"
              className="inline-block px-10 py-4 text-lg font-bold bg-[#0577DD] text-white rounded-full shadow-lg hover:scale-105 hover:bg-[#045fb4] transition-all duration-300"
            >
              🚀 Join as Student or Tutor
            </a>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section>
        <div className="px-4 py-10 md:px-20 bg-[#ffffff]">
          <div className="flex items-center my-10">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-sm font-semibold text-[#0577DD] whitespace-nowrap">
              ACCEPTED PAYMENT METHODS
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <LogoSlider logos={logos} />
        </div>
      </section>

      {/* App Section */}
      <section className="px-6 py-20 md:px-24 bg-blue-50">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0577DD]">SmaTutor Mobile App</h2>
            <p className="text-lg text-gray-700">Students can learn anywhere, tutors can manage sessions & grow their teaching careers — all from the app.</p>
            <div className="flex gap-4">
              <Image src="/appstore.png" alt="app store" width={150} height={50} />
              <Image src="/playstore.png" alt="play store" width={150} height={50} />
            </div>
          </motion.div>
          <div className="relative w-full overflow-hidden shadow-lg rounded-2xl h-[400px]">
            <Image src="/smatutor-app.jpg" alt="SmaTutor App" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-white md:px-24">
        <h2 className="text-3xl font-bold text-center text-[#0577DD] mb-12">FAQs</h2>
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="relative w-full overflow-hidden shadow-lg h-80 md:h-full rounded-2xl">
            <Image src="/smatutor-faq.jpg" alt="FAQ" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <FAQItem key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-20 md:px-24 bg-[#0577DD] text-white text-center overflow-hidden">
        {/* Blobs */}
        <motion.div className="absolute -top-20 -left-20 w-72 h-72 bg-[#8DC440] rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute top-1/2 right-[-100px] w-80 h-80 bg-white rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#8DC440] rounded-full blur-3xl opacity-25"
          animate={{ x: [0, 20, -20, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl font-bold leading-snug">
            Join as a Student or Tutor & Start Growing Today!
          </h2>
          <p className="text-lg text-white/90">
            SmaTutor is where learners achieve success and tutors build thriving teaching careers.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-10 py-4 text-lg font-bold bg-white text-[#0577DD] rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            🚀 Get Started Now
          </a>
</motion.div> </section> <Footer /> </div> ); }
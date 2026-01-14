import React from 'react'
import FeatureCard from '@/app/components/FeatureCard'
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaCode } from "react-icons/fa";
import { ImageTextBulletListSectionReverse } from '@/app/components/ImageTextBulletListSectionReverse'
import Footer from '@/app/components/Footer';

function PlatformDevelopment() {
  return (
    <div className='pt-24 text-black bg-white'>

        {/* Start Of Header */}

        <div className='px-5 md:px-24'>
        <div className="flex flex-col items-center space-y-6 text-center ">
        <p className="!text-sm !font-bold !text-[#A00927] pt-20 md:pt-0">OUR SOLUTIONS</p>
        <h1 className="!text-[#A00927] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
          Platform Development
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
        <FeatureCard
  icon={FaLaptopCode}
  title="Web Development"
  description="At Sharetek, we offer engaging and appealing web design that guarantees a positive first impression."
/>
<FeatureCard
  icon={FaMobileAlt}
  title="Mobile Application"
  description="Custom mobile application development services for both iOS and Android platforms."
/>
<FeatureCard
  icon={FaCode}
  title="Backend API Development"
  description="We offer backend development services for web, mobile, and desktop applications."
/>

      </div>
        </div>

      {/* End Of Header */}

      {/* Start Of Benefits */}

      <div className="flex flex-col items-center space-y-6 text-center py-14">
        <p className="!text-sm !font-bold !text-[#A00927] pt-20 md:pt-0">BENEFITS</p>
        <h1 className="!text-[#A00927] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">Why choose us for your <br /> development project?</h1>
        <p>Our custom software development services are end to-end and <br />they cover web, mobile, cloud, and desktop platforms. We <br />specialize in CRM, ERP, eCommerce, and more.</p>
      </div>

      {/* End Of Benefits */}

      {/* Start Of What Makes Us Different */}
      <div className='bg-gradient-to-t from-[#d5f3ff] to-white'>
              <ImageTextBulletListSectionReverse
  heading="What makes us different?"
  imageSrc="/electronic-device.jpg"
  imageAlt="electronic device laptop"
  listItems={[
    'We have a team of talented and passionate developers who love what they do and are always eager to learn new technologies and best practices.',
    'We follow agile project management methodologies, which means we deliver high-quality software in short iterations, with frequent feedback and collaboration with our clients.',
    'We provide maintenance and support services after the project is completed, to ensure your software runs smoothly and securely, and to address any issues or requests that may arise.',
    'We offer competitive and flexible pricing models based on your needs and budget.',
  ]} />
      </div>

       {/* End Of What Makes Us Different */}

             {/* Our Section */}
             
<section className="flex flex-col gap-10 pt-10 pb-10 md:pb-24 px-5 text-black md:px-24 md:flex-row bg-[#d5f3ff]">
  {[
    {
      icon: <FaLaptopCode size={40} className="text-[#A00927] hover:text-[#A00927]" />,
      title: "web development",
      text: `Our web design and development services are engaging, appealing, and web-built. They adopt a responsive approach to ensure that the website is viewed on any piece of technology, so the user can browse aptly with ease`,
    },
    {
      icon: <FaMobileAlt size={40} className="text-[#A00927] hover:text-[#A00927]" />,
      title: "mobile development",
      text: `Our mobile application development services are custom and secure. They ensure that the applications are user-friendly, visually appealing, and work seamlessly on both iOS and Android platforms.`,
    },
    {
      icon: <FaShoppingCart size={40} className="text-[#A00927] hover:text-[#A00927]" />,
      title: "e-commerce services",
      text: `Our e-commerce services help businesses improve their customer experience and drive sales forward by implementing first or third-party platforms or building custom e-commerce applications to spec.`,
    },
  ].map(({ icon, title, text }, i) => (
    <div key={i} className="flex flex-col items-center space-y-5 text-center">
      {icon}
      <h1 className="text-2xl font-bold capitalize">{title}</h1>
      <p className="text-sm lg:text-xs xl:text-sm">{text}</p>
    </div>
  ))}
</section>

      <Footer />

    </div>
  )
}

export default PlatformDevelopment


import React from "react";
import Footer from "../components/Footer";
import ContactUsForm from "./ContactUsForm";
import { FiPhone, FiMapPin, FiMessageSquare } from "react-icons/fi";

export const metadata = {
  title:
    "Contact Sharetek Group | IT Solutions Experts in Zimbabwe & South Africa",
  description:
    "Get in touch with our IT specialists for customized business solutions. Offices in Harare, Zimbabwe and Johannesburg, South Africa.",
  openGraph: {
    title: "Contact Sharetek Group | IT Solutions Experts",
    description:
      "Reach our technology specialists for tailored business solutions.",
    url: "https://www.sharetek.co.za/contact-us",
    siteName: "Sharetek Group",
  },
};

const ContactPage = () => {
  return (
    <section className="text-black bg-white pt-14">
      <div className="px-4 py-6 md:py-14 md:px-24">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left Column */}
          <div className="items-center text-center md:w-1/2 md:items-start md:text-start">
            <div className="flex flex-col items-center justify-center mb-6 md:flex-row md:justify-start">
              <div className="p-2 mr-4 bg-[#A00927] rounded-full">
                <FiMessageSquare className="text-xl text-white" />
              </div>
              <p className="text-sm font-bold text-[#A00927]">
                Let&apos;s talk
              </p>
            </div>
            <h1 className="text-3xl xl:text-[53px] font-bold lg:!text-4xl mb-6">
              Talk to our product analytics expert
            </h1>
            <p className="mb-6 text-gray-600">
              Our <strong>IT experts</strong> provide customized plans and
              exceed expectations with excellent solutions.
              <strong>Partner</strong> with us to optimize your{" "}
              <strong>Business</strong>.
            </p>

            <div className="w-full">
              <img
                src="/talk_to_us_lady.png"
                alt="Contact us lady"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <p className="my-6 text-gray-600">
              We are present in more than two African countries and know the
              problems that Africa faces, <strong>Talk to Us Today</strong>.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-3 rounded-full bg-primary/10">
                    <FiMapPin className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Harare, ZIM
                  </h3>
                </div>
                <p className="text-gray-600 ml-11">
                  13 Brentwood Ave, Groombridge, Harare, Zimbabwe
                </p>
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-center mt-3 ml-11">
                    <FiPhone className="mr-2 text-gray-400" />
                    <span className="text-gray-600">+263 86 880 08361</span>
                  </div>
                  <div className="flex items-center mt-3 ml-11">
                    <FiPhone className="mr-2 text-gray-400" />
                    <span className="text-gray-600">+263 78 956 6427</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-3 rounded-full bg-primary/10">
                    <FiMapPin className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Johannesburg, SA
                  </h3>
                </div>
                <p className="text-gray-600 ml-11">
                  12 Riversands Road, Beverly, Sandton, South Africa, 2191
                </p>
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-center mt-3 ml-11">
                    <FiPhone className="mr-2 text-gray-400" />
                    <span className="text-gray-600">+27 10 786 0259</span>
                  </div>
                  <div className="flex items-center mt-3 ml-11">
                    <FiPhone className="mr-2 text-gray-400" />
                    <span className="text-gray-600">+27 10 226 9343</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form (client component) */}
          <div className="md:w-1/2">
            <div className="h-full p-8 bg-[#A00927] rounded-lg shadow-md">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mx-5 my-6 overflow-hidden rounded-lg md:mx-24 h-60 md:my-14">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=13+Brentwood+Ave,+Groombridge,+Harare,+Zimbabwe&output=embed"
        ></iframe>
      </div>

      <Footer />
    </section>
  );
};

export default ContactPage;

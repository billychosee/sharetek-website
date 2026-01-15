"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("Sending message...");
    setIsError(false);

    try {
      const headers = {
        authtoken: "", // Add your token here
      };

      const bodyFormData = new FormData();
      bodyFormData.append("source", "sharetek_website");
      bodyFormData.append("status", "New");
      bodyFormData.append("email", formData.email);
      bodyFormData.append("description", formData.message);
      bodyFormData.append("name", "Unknown");
      bodyFormData.append("assigned", "Michelle Muhenyeri");

      const response = await fetch("https://erp.sharetekgroup.com/api/leads", {
        method: "POST",
        headers: headers,
        body: bodyFormData,
      });

      if (response.ok) {
        setStatusMessage("Your message was sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setIsError(true);
        setStatusMessage("There was a problem sending your message.");
      }
    } catch (err) {
      setIsError(true);
      setStatusMessage("There was a problem sending your message.");
    }
  };

  return (
    <div className="relative w-full">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0 opacity-100 bg-[#020626]"
        style={{
          backgroundImage: `url('/world_bg.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 w-full px-5 pt-10 text-gray-400 md:px-24 md:pt-24 ">
        {/* Top section with logo, text, and arrow */}
        <div className="flex flex-col items-center justify-between gap-5 px-0 mb-20 md:flex-row md:items-start group xl:px-5 lg:px-0">
          <div className="w-20 md:w-14">
            <a href="/">
              <img
                src="/sharetek-symbol.svg"
                alt="Sharetek Symbol"
                width={260}
                height={31}
                className="w-full h-auto"
              />
            </a>
          </div>
          <h1 className="w-full ml-0 text-xl font-bold text-center text-white transition-colors duration-300 cursor-pointer md:text-left xl:text-2xl lg:text-xl md:w-full group-hover:text-[#A00927] md:ml-48">
            Contact us today to embark on a journey toward seamless <br />{" "}
            communication and dynamic collaboration.
          </h1>
          <a href="/" className="hidden md:block">
            <ArrowUpRight
              className="mt-2 text-white transition-colors duration-300 cursor-pointer group-hover:text-[#A00927]"
              size={28}
            />
          </a>
        </div>

        {/* Three column section */}
        <div className="flex flex-col items-center justify-between gap-10 px-0 md:items-start md:flex-row md:gap-5 xl:px-5 lg:px-0">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col items-center w-full md:items-start md:w-auto">
            <h2 className="mb-4 text-xl font-bold text-white xl:text-xl lg:text-sm">
              Our Company
            </h2>
            <ul className="space-y-[25px] text-center md:text-left">
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="https://erp.sharetekgroup.com/recruitment/recruitment_portal"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center w-full md:items-start md:w-auto">
            <h2 className="mb-4 text-xl font-bold text-white xl:text-xl lg:text-sm">
              Contact Info
            </h2>
            <div className="flex flex-col items-center gap-5 md:items-start">
              <a href="/contact-us">
                <div className="flex items-start gap-3 mb-2 cursor-pointer hover:opacity-80">
                  <img
                    src="/smatech_t_logo.svg"
                    alt="Chat icon"
                    width={20}
                    height={20}
                    className="w-10 object"
                  />
                  <div>
                    <p className="font-medium">Chat with an expert</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs text-white">Online now</p>
                      <span className="w-2 h-2 rounded-full bg-[#00b956]"></span>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <FiPhone className="text-white" size={20} />
                <p>+263 86 880 08361</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-white" size={20} />
                <p>+263 78 956 6427</p>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-white" size={20} />
                <a
                  href="mailto:info@sharetekgroup.com"
                  className="hover:underline"
                >
                  info@sharetekgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-white" size={20} />
                <p>12 Riversands Road, Beverly, Sandton, South Africa, 2191</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 mt-5">
                <a
                  href="https://www.linkedin.com/company/Sharetekgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn
                    size={24}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  />
                </a>
                <a
                  href="https://x.com/Sharetekgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaXTwitter
                    size={24}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  />
                </a>
                <a
                  href="https://www.facebook.com/Sharetekgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF
                    size={24}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sharetek"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={24}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div className="flex flex-col items-center w-full md:items-start md:w-auto">
            <h2 className="mb-4 text-xl font-bold text-white xl:text-xl lg:text-sm">
              Get in Touch
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-3 text-white"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded resize-y"
                required
              />
              <button
                type="submit"
                className="w-full px-5 py-2 text-white transition rounded bg-[#A00927] hover:bg-[#27282C]"
              >
                Send
              </button>
              {statusMessage && (
                <p
                  className={`mt-2 text-sm text-center ${isError ? "text-red-500" : "text-green-500"}`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 pb-10 mt-20 text-sm text-center text-gray-300 border-t border-gray-400">
          © {new Date().getFullYear()} <strong>Sharetek</strong>. All rights
          reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;

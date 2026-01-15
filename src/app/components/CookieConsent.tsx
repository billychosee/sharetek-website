"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { FaCookieBite } from "react-icons/fa";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365 });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[600px] p-6 bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-6"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#0577DD] to-[#A00927] text-white text-2xl shadow-lg">
            <FaCookieBite />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900">We use cookies 🍪</h3>
            <p className="mt-1 text-sm text-gray-600">
              We use cookies to personalize content, improve your experience, and analyze traffic. 
              {/*  By continuing, you agree to our{" "}
              <a href="/privacy-policy" className="text-[#0577DD] underline">
                privacy policy
              </a>. */}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-medium text-gray-600 transition border border-gray-300 rounded-full hover:bg-gray-100"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#0577DD] to-[#A00927] shadow hover:opacity-90 transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}





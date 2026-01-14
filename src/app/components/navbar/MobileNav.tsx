"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, ICONS } from "./config";
import type { NavItem, DropdownItem } from "./types";
import { motion, AnimatePresence } from "framer-motion";

function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function MobileNav({ 
  isOpen, 
  onToggle 
}: { 
  isOpen: boolean; 
  onToggle: () => void 
}) {
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onToggle();
    }
  }, [onToggle]);

  useEffect(() => {
    if (!isOpen) setOpenDropdown(null);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClickOutside]);

  const renderDropdownItems = (items: readonly DropdownItem[]) => (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-[#A00927] pl-4 overflow-hidden"
    >
      {items.map((subItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block py-2.5 px-4 hover:bg-gray-50 rounded hover:text-[#A00927] text-sm"
            onClick={onToggle}
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="p-2 text-gray-700 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <ICONS.times size={24} /> : <ICONS.bars size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/30 backdrop-blur-md md:hidden"
          >
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 z-50 flex flex-col w-3/4 max-w-sm p-4 bg-white shadow-lg"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b">
                <Link href="/" onClick={onToggle}>
                  <span className="text-lg font-bold" style={{ color: 'rgb(160, 9, 39)' }}>
                    Sharetek
                  </span>
                </Link>
                <button 
                  onClick={onToggle} 
                  className="p-2 text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <ICONS.times size={20} />
                </button>
              </div>

              {/* Nav Items */}
              <ul className="flex flex-col flex-1 gap-1 font-semibold text-black">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href} className="border-b border-gray-100 last:border-0">
                      {hasDropdown(item) ? (
                        <>
                          <button
                            className={`flex items-center justify-between w-full py-3 px-4 hover:bg-gray-50 rounded ${
                              openDropdown === item.href ? "text-[#A00927]" : ""
                            }`}
                            onClick={() => setOpenDropdown(
                              openDropdown === item.href ? null : item.href
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <Icon 
                                className={`w-5 h-5 ${openDropdown === item.href ? "text-[#A00927]" : "text-gray-600"}`} 
                              />
                              <span>{item.label}</span>
                            </div>
                            {openDropdown === item.href ? <ICONS.chevronUp size={16} /> : <ICONS.chevronDown size={16} />}
                          </button>

                          <AnimatePresence>
                            {openDropdown === item.href && renderDropdownItems(item.dropdown.items)}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded hover:text-[#A00927]"
                          onClick={onToggle}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                        >
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Search Bar */}
              <form className="mt-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full py-2.5 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#A00927]"
                  />
                  <ICONS.search className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


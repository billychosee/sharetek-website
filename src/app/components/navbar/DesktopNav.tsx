"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, ICONS } from "./config";
import type { NavItem, DropdownItem } from "./types";
import { usePathname } from "next/navigation";

// The usePathname hook is a client-side hook specific to Next.js
// It may show a linter error in some editors but is correct for the Next.js framework.
function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function DesktopNav() {
  const [query, setQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname() || ''; // Handle potential null value from usePathname

  // Determine if a navigation item is "active" based on the current URL
  const getIsActive = (item: NavItem) => {
    if (!hasDropdown(item)) {
      return pathname === item.href;
    }

    if (item.label === "INDUSTRIES" && pathname.startsWith("/industries")) {
      return true;
    }
    
    // Check for dropdown links where the current path is a sub-page
    if (pathname.startsWith(item.href) && item.href !== '/') {
      return true;
    }

    return false;
  };

  const renderDropdown = (item: NavItem & { dropdown: { items: readonly DropdownItem[] } }) => (
    <ul
      className={`absolute ${activeDropdown === item.href ? 'block' : 'hidden'} group-hover:block bg-white shadow-lg rounded-md text-black font-normal w-56 z-50 py-2 transition-all duration-200 ease-out border border-gray-100`}
      onMouseEnter={() => setActiveDropdown(item.href)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {item.dropdown.items.map((subItem: DropdownItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block px-4 py-2.5 hover:bg-gray-50 hover:text-[#A00927] transition-colors text-sm"
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex items-center">
      <ul className="items-center justify-center flex-1 hidden gap-8 font-semibold text-black md:flex xl:gap-8 lg:gap-5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = getIsActive(item);
          const ChevronIcon = activeDropdown === item.href ? ICONS.chevronUp : ICONS.chevronDown;
          
          const isDropdownItem = hasDropdown(item);
          const isDropdownOnly = isDropdownItem && (item.label === "INDUSTRIES" || item.label === "PRODUCTS");

          // Determine the class name for the navigation item based on its active state
          const itemClassName = `flex flex-col items-center text-xs xl:text-xs lg:text-[10px] uppercase tracking-tight transition-colors ${isActive ? 'text-[#A00927]' : 'hover:text-[#A00927]'}`;
          const iconClassName = `w-6 h-6 mb-1.5 transition-colors ${isActive ? 'text-[#A00927]' : 'text-gray-400 hover:text-[#A00927]'}`;

          return (
            <li
              key={item.label} 
              className={`relative ${isDropdownItem ? 'group' : ''}`}
              onMouseEnter={() => isDropdownItem && setActiveDropdown(item.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {isDropdownOnly ? (
                // Render a div for dropdown-only items like Industries and Products
                <div
                  className={itemClassName}
                  onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                >
                  <Icon
                    className={iconClassName}
                  />
                  <span className="flex items-center">
                    {item.label}
                    <ChevronIcon className="w-3 h-3 ml-1 transition-transform" />
                  </span>
                </div>
              ) : (
                // Render a Link for all other items
                <Link
                  href={item.href}
                  className={itemClassName}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Icon
                    className={iconClassName}
                  />
                  {/* Add the chevron icon for dropdown links */}
                  <span className="flex items-center">
                    {item.label}
                    {isDropdownItem && <ChevronIcon className="w-3 h-3 ml-1 transition-transform" />}
                  </span>
                </Link>
              )}
              {isDropdownItem && renderDropdown(item)}
            </li>
          );
        })}
      </ul>

      <div className="hidden ml-8 md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="py-2 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-[#A00927] transition-all"
          />
          <ICONS.search className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
        </div>
      </div>
    </div>
  );
}




import { 
  FiHome, 
  FiInfo, 
  FiGrid, 
  FiBox, 
  FiUsers, 
  FiMail,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiGlobe
} from 'react-icons/fi';

export const NAV_ITEMS = [
  {
    label: "HOME",
    href: "/",
    icon: FiHome,
    iconClass: "text-current"
  },
  {
    label: "ABOUT US",
    href: "/about-us",
    icon: FiInfo,
    iconClass: "text-current"
  },
  {
    label: "SERVICES",
    href: "/services",
    icon: FiGrid,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "AI & Machine Learning", href: "/services/ai-and-machine-learning" },
        { label: "Cyber Security", href: "/services/cyber-security" },
        { label: "Software Development", href: "/services/software-development" }
      ] as const
    }
  },
  {
    label: "INDUSTRIES",
    href: "/industries",
    icon: FiGrid,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "Fintech", href: "/industries/fintech" },
        { label: "PropTech", href: "/industries/proptech" },
        { label: "EdTech", href: "/industries/edtech" },
        { label: "InsurTech", href: "/industries/insurtech" },
        { label: "Hospitality & Tourism", href: "/industries/hospitality-and-tourism" }
      ] as const
    }
  },
  {
    label: "PRODUCTS",
    href: "/products",
    icon: FiBox,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "SmatQR", href: "/products/smat-qr" },
        { label: "SmatProp", href: "/products/smat-prop" },
        { label: "Njere ERP", href: "/products/njere-erp" },
        { label: "SmatPay", href: "/products/smat-pay" },
        { label: "SmatAcces", href: "/products/smat-access" },
        { label: "SmaTutor", href: "/products/sma-tutor" },
        { label: "SmatSure", href: "/products/smat-sure" },
      ] as const
    }
  },
  {
    label: "CAREERS",
    href: "https://crm.sharetek.co.za",
    icon: FiUsers,
    iconClass: "text-current"
  },
  {
    label: "CONTACT",
    href: "/contact-us",
    icon: FiMail,
    iconClass: "text-current"
  }
] as const;

export const ICONS = {
  search: FiSearch,
  bars: FiMenu,
  times: FiX,
  chevronDown: FiChevronDown,
  chevronUp: FiChevronUp
} as const;





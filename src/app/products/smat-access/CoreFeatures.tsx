import {
    FaTachometerAlt,
    FaCheckCircle,
    FaUserCheck,
    FaCar,
    FaWhatsapp,
    FaHeadset
} from "react-icons/fa";

export interface WorkflowStep {
    stepNumber: number;
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
}

export interface Workflow {
    title: string;
    steps: WorkflowStep[];
}

export interface CoreFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
    workflow?: Workflow;
}

export const coreFeatures: CoreFeature[] = [
    {
        icon: <FaTachometerAlt className="w-6 h-6" />,
        title: "Seamless Operations",
        description: "A centralized platform for managing access and tracking entries reduces manual work and improves efficiency.",
        workflow: {
            title: "How Centralized Management Works",
            steps: [
                {
                    stepNumber: 1,
                    title: "Access Dashboard",
                    description: "Property manager logs into the unified SmatAccess dashboard",
                    imageSrc: "/acces-dashboard.jpg",
                    imageAlt: "SmatAccess dashboard login screen"
                },
                {
                    stepNumber: 2,
                    title: "Monitor All Properties",
                    description: "View real-time status of all access points across multiple properties",
                    imageSrc: "/multi-property-dashboard.png",
                    imageAlt: "Multi-property monitoring dashboard"
                },
                {
                    stepNumber: 3,
                    title: "Manage Instantly",
                    description: "Grant, revoke, or modify access permissions with one click",
                    imageSrc: "/access-management.png",
                    imageAlt: "Access permission management interface"
                }
            ]
        }
    },
    {
        icon: <FaCheckCircle className="w-6 h-6" />,
        title: "Security & Access Logs",
        description: "Maintain a digital audit trail of all entries and exits, ensuring full transparency and accountability across every property."
    },
    {
        icon: <FaUserCheck className="w-6 h-6" />,
        title: "Facial Recognition",
        description: "Enhance security for repeat access by enabling AI-powered tenant and staff identification.",
        workflow: {
            title: "Facial Recognition Process",
            steps: [
                {
                    stepNumber: 1,
                    title: "Initial Registration",
                    description: "Tenant's face is registered in the system during onboarding",
                    imageSrc: "/face-scanner-approach.png",
                    imageAlt: "Facial recognition registration process"
                },
                {
                    stepNumber: 2,
                    title: "Approach Scanner",
                    description: "Person approaches the facial recognition scanner at the entrance",
                    imageSrc: "/face-registration.png",
                    imageAlt: "Person approaching facial recognition scanner"
                },
                {
                    stepNumber: 3,
                    title: "AI Verification",
                    description: "System matches face against database and verifies identity",
                    imageSrc: "/face-verification.png",
                    imageAlt: "AI facial verification process"
                },
                {
                    stepNumber: 4,
                    title: "Access Granted",
                    description: "Door unlocks automatically for verified individuals",
                    imageSrc: "/door-unlock.png",
                    imageAlt: "Automatic door unlock confirmation"
                }
            ]
        }
    },
    {
        icon: <FaCar className="w-6 h-6" />,
        title: "Registration Plate Recognition",
        description: "Seamlessly control vehicle access with automatic number plate recognition—no manual checks, no delays.",
        workflow: {
            title: "Automatic Vehicle Access",
            steps: [
                {
                    stepNumber: 1,
                    title: "Vehicle Approaches",
                    description: "Car approaches the property gate with ANPR camera",
                    imageSrc: "/vehicle-approach.png",
                    imageAlt: "Vehicle approaching gate with ANPR camera"
                },
                {
                    stepNumber: 2,
                    title: "Plate Capture",
                    description: "High-resolution camera captures license plate image",
                    imageSrc: "/license-plate-capture.png",
                    imageAlt: "License plate being captured by camera"
                },
                {
                    stepNumber: 3,
                    title: "Database Check",
                    description: "System compares plate against authorized vehicle database",
                    imageSrc: "/database-verification.png",
                    imageAlt: "Database verification of license plate"
                },
                {
                    stepNumber: 4,
                    title: "Barrier Opens",
                    description: "Gate barrier automatically opens for authorized vehicles",
                    imageSrc: "/barrier-opens.png",
                    imageAlt: "Security barrier opening for authorized vehicle"
                }
            ]
        }
    },
    {
  icon: <FaWhatsapp className="w-6 h-6" />,
  title: "WhatsApp Integration",
  description:
    "Generate visitor access codes, approve entries, or receive real-time alerts directly through WhatsApp.",
  workflow: {
    title: "WhatsApp Visitor Access Flow",
    steps: [
      {
        stepNumber: 1,
        title: "Request Access",
        description: "Tenant initiates a visitor access request via WhatsApp.",
        imageSrc: "/whatsapp-step1.png", // screenshot 1
        imageAlt: "Tenant requesting access via WhatsApp",
      },
      {
        stepNumber: 2,
        title: "Provide Visitor Info",
        description: "Tenant inputs number of accesses and visitor name/contact.",
        imageSrc: "/whatsapp-step2.png", // screenshot 2
        imageAlt: "Tenant entering visitor details",
      },
      {
        stepNumber: 3,
        title: "Invitation Sent",
        description: "System sends invitation with access code and QR code link.",
        imageSrc: "/whatsapp-step3.png", // screenshot 3
        imageAlt: "Visitor receives WhatsApp invitation screenshot",
      },
      {
        stepNumber: 4,
        title: "Access Granted",
        description: "Visitor scans QR code at the entrance for immediate entry.",
        imageSrc: "/qr-code-scan.png",
        imageAlt: "Visitor scanning QR code",
      },
    ],
  },
},
  {
        icon: <FaHeadset className="w-6 h-6" />,
        title: "Maintenance Requests",
        description: "Users can log repair and maintenance requests instantly through the SmatAccess app or WhatsApp, ensuring faster response.",
        workflow: {
            title: "Quick Maintenance Request Process",
            steps: [
                {
                    stepNumber: 1,
                    title: "Issue Identified",
                    description: "Tenant notices maintenance issue (broken light, leaky faucet, etc.)",
                    imageSrc: "/maintenance-issue.png",
                    imageAlt: "Tenant identifying maintenance issue"
                },
                {
                    stepNumber: 2,
                    title: "WhatsApp Report",
                    description: "Tenant sends photo and description via WhatsApp to property management",
                    imageSrc: "/whatsapp-maintenance.png",
                    imageAlt: "Maintenance request sent via WhatsApp"
                },
                {
                    stepNumber: 3,
                    title: "Auto-Ticketing",
                    description: "System creates maintenance ticket and assigns to appropriate technician",
                    imageSrc: "/ticket-creation.jpg",
                    imageAlt: "Automatic maintenance ticket creation"
                },
                {
                    stepNumber: 4,
                    title: "Technician Access",
                    description: "Temporary access code generated for maintenance staff",
                    imageSrc: "/technician-access.jpg",
                    imageAlt: "Temporary access code for maintenance technician"
                }
            ]
        }
    }
];
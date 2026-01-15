// Device Data Structure and Configuration

export interface Device {
    title: string;
    imageSrc: string;
    modalImageSrc: string;
    modalDescription: string;
    details: string[];
}

export const deviceData: Device[] = [
    {
        title: "Biometric Scanners",
        imageSrc: "/biometricscanner.png",
        modalImageSrc: "/biometricscanner-view.png",
        modalDescription: "Implement secure and efficient access using fingerprint and facial recognition. Biometric scanning eliminates physical credentials, ensuring only authorized individuals can access restricted areas.",
        details: [
            "Fingerprint Scanners: Fast and accurate, our fingerprint devices are ideal for securing sensitive areas.",
            "Facial Recognition: Contactless, hygienic, and ideal for high-traffic locations; our facial recognition scanners provide a seamless experience for authorized personnel.",
            "High Accuracy: Our devices have a low false acceptance rate and false rejection rate, ensuring only the right individuals gain access."
        ]
    },
    {
        title: "RFID Access Readers",
        imageSrc: "/rfid-access-readers.png",
        modalImageSrc: "/rfid-access-readers.png",
        modalDescription: "Rapid and reliable access via high-frequency RFID cards or key fobs. Perfect for large organizations where speed and high throughput are essential for employee and visitor entry.",
        details: [
            "Multi-Frequency Support: Compatible with a wide range of RFID standards (e.g., 13.56MHz, 125kHz).",
            "Long Read Range: Allows for quick, drive-through or walk-through access without stopping.",
            "Seamless Integration: Easily connects to our Access Control Panels and software platform."
        ]
    },
    {
        title: "Turnstiles",
        imageSrc: "/turnstiles-gate-barriers.png",
        modalImageSrc: "/turnstiles-gate-barriers.png",
        modalDescription: "Robust physical barriers integrated with our access readers to control the flow of pedestrian traffic, ensuring strict one-way or authorized-only entry.",
        details: [
            "High Security: Prevents tailgating and unauthorized pedestrian access.",
            "High Throughput: Efficiently manages large volumes of foot traffic.",
            "Versatile Designs: Available in waist-height, full-height, and speed gate models to suit various environments."
        ]
    },
    {
        title: "Gate Barriers",
        imageSrc: "/gate-barriers.png",
        modalImageSrc: "/gate-barriers.png",
        modalDescription: "Automated physical barriers integrated with our access control systems to manage and secure vehicle entry and exit points.",
        details: [
            "Vehicle Control: Automated boom barriers for efficient parking and site access management.",
            "Enhanced Security: Secures perimeters and parking lots by preventing unauthorized vehicle entry.",
            "Advanced Integration: Works seamlessly with registration plate recognition (ANPR) and long-range readers."
        ]
    }
];

// Commented out devices for future use or reference
export const additionalDevices: Device[] = [
    {
        title: "QR Code Scanners",
        imageSrc: "/qr-code-scanners.png",
        modalImageSrc: "/qr-code-scanners.png",
        modalDescription: "Modern, contactless entry for visitors and temporary staff. QR codes are generated instantly through the SmatAccess platform or integrated with WhatsApp for easy distribution.",
        details: [
            "Visitor Management: Ideal for granting temporary, time-bound access codes to guests.",
            "Contactless Entry: Hygienic and fast entry process.",
            "Mobile-First: Uses codes displayed on a smartphone screen, eliminating physical credentials."
        ]
    },
    {
        title: "Access Control Panels",
        imageSrc: "/access-control-panels.png",
        modalImageSrc: "/access-control-panels.png",
        modalDescription: "The central nervous system for your access points. Our control panels manage door locks, relay inputs from readers, and communicate with the SmatAccess software platform.",
        details: [
            "Centralized Command: Manages multiple doors from a single secure point.",
            "Redundancy: Operates offline to maintain security during network outages.",
            "Modular Design: Scalable architecture to grow with your premises."
        ]
    },
    {
        title: "Mobile Credentials",
        imageSrc: "/mobile-credentials.png",
        modalImageSrc: "/mobile-credentials.png",
        modalDescription: "Use an employee or tenant's personal smartphone as their access credential. Secure, convenient, and eliminates the cost of physical cards.",
        details: [
            "App-Based Access: Secure access via the SmatAccess mobile app (Bluetooth or NFC).",
            "Remote Credential Management: Issue, revoke, and update credentials instantly from the central dashboard.",
            "Enhanced User Experience: Provides a convenient, modern access method."
        ]
    }
];
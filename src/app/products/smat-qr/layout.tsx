// src/app/products/smat-qr/layout.tsx
// This file is a Server Component by default, allowing it to export metadata.
export const metadata = {
    title: 'SmatQR | Contactless Digital Menu & Ordering System',
    description: 'Transform your restaurant operations with QR code menus, contactless ordering, and integrated payments for safer, more efficient customer service.',
    openGraph: {
        title: 'SmatQR | QR Code Menu Solution for Restaurants & Cafes',
        description: 'Go paperless with digital menus, instant waiter calls, and seamless payment processing - all accessible through a simple QR code scan.',
        url: 'https://smatechgroup.com/products/smatqr',
        siteName: 'SmaTech Group'
    }
};

export default function SmatQrLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
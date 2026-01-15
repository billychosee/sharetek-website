// app/products/smat-access/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SmatAccess | Complete Physical Access Control Solution',
  description: 'Revolutionize your security with SmatAccess, an integrated solution combining advanced software with purpose-built devices to manage and monitor all access points.',
  openGraph: {
    title: 'SmatAccess | Secure & Scalable Physical Access Control',
    description: 'Manage and monitor all access points with SmatAccess, providing enhanced security, real-time monitoring, and easy integration for various industries.',
    url: 'https://smatechgroup.com/products/smataccess',
    siteName: 'SmaTech Group'
  }
};

export default function SmatAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
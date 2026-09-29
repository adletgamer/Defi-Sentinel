import type { Metadata } from 'next';

import './styles.css';

export const metadata: Metadata = {
  title: 'DeFi Sentinel — Portfolio Security',
  description: 'Watch-only DeFi portfolio monitoring with Web3 SOC detections.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

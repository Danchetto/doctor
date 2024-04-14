import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import {
  Roboto, Philosopher, Prata, Red_Hat_Display,
} from 'next/font/google';
import '../globals.css';
import React from 'react';

// const inter = Inter({ subsets: ["latin"] });
// const font = PT_Serif({ subsets: ['latin', 'cyrillic'], weight: '400' });
const font = Roboto({ subsets: ['latin', 'cyrillic'], weight: '400' });

export const metadata: Metadata = {
  title: 'Dr. Petr Tuchin',
  description: 'Врач',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-gilroy">
        {children}
      </body>
    </html>
  );
}

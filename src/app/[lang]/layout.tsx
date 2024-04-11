import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { PT_Serif, Roboto, Philosopher, Prata } from 'next/font/google';
import '../globals.css';
import React from 'react';

// const inter = Inter({ subsets: ["latin"] });
// const font = PT_Serif({ subsets: ['latin', 'cyrillic'], weight: '400' });
const font = Prata({ subsets: ['latin', 'cyrillic'], weight: '400' });

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
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}

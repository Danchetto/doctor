import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
// eslint-disable-next-line camelcase
import {
  Montserrat,
} from 'next/font/google';
import '../globals.css';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

const font = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Dr. Petr Tuchin',
  description: 'Омологированный и коллегиированный врач в Испании',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/images/logo.png" />
      </Head>
      <body className={font.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-FRV8ZHJ713" />
    </html>
  );
}

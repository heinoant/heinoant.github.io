import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import DarkmodeButton from './components/darkmodeButton';

import { useState, useEffect } from 'react';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'antton heinonen',
  description: 'portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Navbar className="fixed w-full z-20 top-16 start-16" />
        {children}
        <DarkmodeButton className="absolute bottom-16 right-16 transition ease-in-out active:scale-90 duration-100" />
        <div className="noise"></div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import DarkmodeButton from './components/darkmodeButton';

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
        <div className="noise"></div>
        <div className="max-h-screen md:flex md:min-h-screen grid md:grid-cols-3 blur-[0.6px]">
          <Navbar className="md:flex md:basis-1/3 md:justify-end md:p-20 md:text-2xl" />
          {children}
        </div>
        <DarkmodeButton className="fixed text-2xl bottom-10 right-10 md:bottom-16 md:right-16 blur-[0.6px] transition ease-in-out hover:scale-[0.9] active:scale-[0.8] duration-200" />
      </body>
    </html>
  );
}

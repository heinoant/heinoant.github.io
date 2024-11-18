'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';

interface NavbarProps {
  className?: string;
}

const neueMachina = localFont({
  src: '../assets/PPNeueMachina-Ultrabold.otf',
});

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const currentPath = usePathname();

  return (
    <nav className={`${className}`}>
      <ul className="md:flex-col flex flex-wrap basis-4 justify-center">
        <li className="pb-7 px-1 hover:line-through">
          <Link
            className={`${neueMachina.className} md:hidden chromatic-text`}
            href="/"
            data-text="aheinonen"
          >
            aheinonen
          </Link>
          <Link
            className={`${neueMachina.className} text-5xl hidden md:block chromatic-text`}
            href="/"
            data-text="antton heinonen"
          >
            antton heinonen
          </Link>
        </li>
        <li className="md:hidden px-1 font-medium">/</li>
        <li
          className={`pb-7 px-1 font-medium hover:line-through ${
            currentPath === '/work' ? 'line-through opacity-70' : ''
          }`}
        >
          <Link href="/work">work</Link>
        </li>
        <li className="md:hidden px-1 font-medium">/</li>
        <li
          className={`pb-7 px-1 font-medium hover:line-through ${
            currentPath === '/about' ? 'line-through opacity-70' : ''
          }`}
        >
          <Link href="/about">about</Link>
        </li>
        <li className="md:hidden px-1 font-medium">/</li>
        <li
          className={`pb-7 px-1 font-medium hover:line-through ${
            currentPath === '/misc' ? 'line-through opacity-70' : ''
          }`}
        >
          <Link href="/misc">misc</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

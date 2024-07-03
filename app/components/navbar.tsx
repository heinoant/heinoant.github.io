'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const currentPath = usePathname();

  return (
    <nav className={`${className}`}>
      <ul className="p-10 md:flex-col flex flex-wrap justify-center">
        <li className="pb-7 px-1 hover:line-through">
          <Link className="md:hidden" href="/">
            aheinonen
          </Link>
          <Link className="hidden md:block" href="/">
            antton heinonen
          </Link>
        </li>
        <li className="md:hidden px-1">/</li>
        <li
          className={`pb-7 px-1 hover:line-through ${
            currentPath === '/work' ? 'line-through opacity-70' : ''
          }`}
        >
          <Link href="/work">work</Link>
        </li>
        <li className="md:hidden px-1">/</li>
        <li
          className={`pb-7 px-1 hover:line-through ${
            currentPath === '/about' ? 'line-through opacity-70' : ''
          }`}
        >
          <Link href="/about">about</Link>
        </li>
        <li className="md:hidden px-1">/</li>
        <li
          className={`pb-7 px-1 hover:line-through ${
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

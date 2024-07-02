//navbar
import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">antton heinonen</Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/work">work</Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

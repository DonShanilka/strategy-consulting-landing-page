'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4 md:px-8 border-b">
      <Link href="/" className="text-blue-600 font-bold text-xl">
        Ecliptica
      </Link>
      <nav className="space-x-6 text-sm">
        <Link href="/about" className="hover:underline">About Us</Link>
        <Link href="/services" className="hover:underline">Our Services</Link>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
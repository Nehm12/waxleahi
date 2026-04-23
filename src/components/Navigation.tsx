"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Qui sommes-nous ?" },
    { href: "/equipe", label: "Notre Équipe" },
    { href: "/localisations", label: "Localisations" },
    { href: "/application-mobile", label: "Application mobile" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-brand-dark text-brand-light shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <Image
              src="/logo.png"
              alt="WA XLE AHI Logo"
              width={80}
              height={80}
              className="rounded-md"
              priority
            />
            <span className="hidden sm:inline text-lg font-bold">WA XLE AHI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-orange transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-brand-orange/20 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-brand-orange/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 hover:bg-brand-orange/10 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

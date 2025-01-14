'use client';
import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

const NavLinks: React.FC = () => {
  const links: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex space-x-6">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleLinkClick(link.href)}
          className="relative text-gray-800 font-semibold hover:text-blue-500 transition"
        >
          {link.label}
          {/* Underline effect */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
        </button>
      ))}
    </nav>
  );
};

export default NavLinks;

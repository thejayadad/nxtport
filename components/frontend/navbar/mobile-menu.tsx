'use client';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../logo/logo';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after navigating
  };

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-white rounded-md shadow-sm hover:shadow-md text-gray-800 focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 bg-white text-gray-800 shadow-lg z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b h-24 flex items-center">
          <Logo name="theJayadad" shape="circle" iconText="J" />
        </div>

        {/* Links Section */}
        <nav className="p-4 space-y-4 text-lg font-semibold">
          <button
            onClick={() => handleLinkClick('#about')}
            className="block w-full text-left hover:text-gray-500"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('#experience')}
            className="block w-full text-left hover:text-gray-500"
          >
            Experience
          </button>
          <button
            onClick={() => handleLinkClick('#projects')}
            className="block w-full text-left hover:text-gray-500"
          >
            Projects
          </button>
          <button
            onClick={() => handleLinkClick('#contact')}
            className="block w-full text-left hover:text-gray-500"
          >
            Contact
          </button>
        </nav>

        {/* Footer Section */}
        <div className="absolute bottom-4 w-full text-center">
          <p className="text-sm text-gray-400">
            © 2025 TheJayadad. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

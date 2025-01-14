'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialIcon {
  icon: React.ReactNode; // Social media icon component
  href: string; // Link to the social media profile
}

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  links?: FooterLink[];
  socialIcons?: SocialIcon[];
  footerText?: string; // Text to display in the footer
  animation?: {
    direction?: 'left' | 'right' | 'up' | 'down'; // Animation direction
    duration?: number; // Duration of the animation
    delay?: number; // Delay before animation starts
  };
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = '#222', // Default dark background
  textColor = '#ffffff', // Default white text
  links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  socialIcons = [
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaGithub />, href: 'https://github.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
  ],
  footerText = '© 2025 My Website. All rights reserved.',
  animation = {
    direction: 'up',
    duration: 0.8,
    delay: 0.2,
  },
  className = '',
}) => {
  // Determine animation properties
  const getAnimationProps = () => {
    switch (animation.direction) {
      case 'left':
        return { x: -100, y: 0 };
      case 'right':
        return { x: 100, y: 0 };
      case 'up':
        return { x: 0, y: 100 };
      case 'down':
        return { x: 0, y: -100 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.footer
      className={`w-full ${className}`}
      style={{ backgroundColor }}
      initial={{
        opacity: 0,
        ...getAnimationProps(),
      }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: animation.duration,
        delay: animation.delay,
      }}
    >
      <div
        className="mx-auto max-w-screen-lg flex flex-col items-center py-4 px-4 space-y-4 text-center"
        style={{ color: textColor }}
      >
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:underline transition"
              style={{ color: textColor }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gray-400 transition"
              style={{ color: textColor }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-sm" style={{ color: textColor }}>
          {footerText}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

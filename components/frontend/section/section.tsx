'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  titleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  withAnimation?: boolean; // Toggle animation on/off
  animationDirection?: 'left' | 'right' | 'up' | 'down'; // Customize animation direction
}

const AboutSection: React.FC<SectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc = '/placeholder.png', // Default image
  titleColor = '#1e293b',
  backgroundColor = '#f9fafb',
  textColor = '#374151',
  className = '',
  withAnimation = false, // Default: no animation
  animationDirection = 'left', // Default animation direction
}) => {
  // Framer Motion Variants
  const motionVariants = {
    hidden: {
      opacity: 0,
      x: animationDirection === 'left' ? -100 : animationDirection === 'right' ? 100 : 0,
      y: animationDirection === 'up' ? -100 : animationDirection === 'down' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <div
    id='about'
    className="w-full h-full">
      <div
        className={`w-full mx-auto max-w-screen-lg py-16 px-6 ${className}`}
        style={{ backgroundColor }}
      >
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="flex-1">
            {withAnimation ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={motionVariants}
              >
                <Image
                  src={imageSrc}
                  alt="About Image"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            ) : (
              <Image
                src={imageSrc}
                alt="About Image"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {withAnimation ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={motionVariants}
              >
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: titleColor }}
                >
                  {title}
                </h2>
                {subtitle && (
                  <h3 className="text-xl font-medium mb-4 text-gray-500">
                    {subtitle}
                  </h3>
                )}
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: textColor }}
                >
                  {description}
                </p>
              </motion.div>
            ) : (
              <>
                <h2
                  className="text-4xl font-bold mb-4"
                  style={{ color: titleColor }}
                >
                  {title}
                </h2>
                {subtitle && (
                  <h3 className="text-xl font-medium mb-4 text-gray-500">
                    {subtitle}
                  </h3>
                )}
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: textColor }}
                >
                  {description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

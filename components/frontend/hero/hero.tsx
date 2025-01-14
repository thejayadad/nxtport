'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  backgroundColor: string;
  imageSrc: string;
  imageShape: 'circle' | 'square';
  title: string;
  titleColor: string;
  description: string;
  descriptionColor: string;
  buttons: {
    label: string;
    link: string;
    bgColor: string;
    textColor: string;
  }[];
  withAnimation?: boolean; // Optional prop to toggle animations
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundColor,
  imageSrc,
  imageShape,
  title,
  titleColor,
  description,
  descriptionColor,
  buttons,
  withAnimation = false,
}) => {
  // Define motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div
      className="h-[500px] flex flex-col items-center justify-center text-center p-6"
      style={{ backgroundColor }}
    >
      {/* Profile Image */}
      {withAnimation ? (
        <motion.img
          src={imageSrc}
          alt="Profile"
          className={`w-32 h-32 mb-6 border-4 border-blue-500 shadow-lg ${
            imageShape === 'circle' ? 'rounded-full' : 'rounded-md'
          }`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        />
      ) : (
        <Image
          src={imageSrc}
          alt="Profile"
          className={`w-32 h-32 mb-6 border-4 border-blue-500 shadow-lg ${
            imageShape === 'circle' ? 'rounded-full' : 'rounded-md'
          }`}
        />
      )}

      {/* Title */}
      {withAnimation ? (
        <motion.h1
          className="text-4xl font-extrabold"
          style={{ color: titleColor }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {title}
        </motion.h1>
      ) : (
        <h1 className="text-4xl font-extrabold" style={{ color: titleColor }}>
          {title}
        </h1>
      )}

      {/* Description */}
      {withAnimation ? (
        <motion.p
          className="text-lg mt-4"
          style={{ color: descriptionColor }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {description}
        </motion.p>
      ) : (
        <p className="text-lg mt-4" style={{ color: descriptionColor }}>
          {description}
        </p>
      )}

      {/* Buttons */}
      <div className="mt-6 space-x-4">
        {buttons.map((button, index) =>
          withAnimation ? (
            <motion.a
              key={index}
              href={button.link}
              className="px-6 py-3 rounded-lg font-semibold transition"
              style={{
                backgroundColor: button.bgColor,
                color: button.textColor,
              }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.2, duration: 0.4 },
                },
              }}
            >
              {button.label}
            </motion.a>
          ) : (
            <a
              key={index}
              href={button.link}
              className="px-6 py-3 rounded-lg font-semibold transition"
              style={{
                backgroundColor: button.bgColor,
                color: button.textColor,
              }}
            >
              {button.label}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default HeroSection;

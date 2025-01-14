'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  description: string;
  duration: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
  title: string;
  titleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  title,
  titleColor = '#1e293b',
  backgroundColor = '#f9fafb',
  textColor = '#374151',
  className = '',
}) => {
  // Framer Motion Variants
  const getMotionVariants = (direction: 'left' | 'right') => ({
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  });

  return (
    <div
    id='experience'
      className={`w-full  py-16 px-6 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="max-w-screen-lg mx-auto">
        {/* Section Title */}
        <h2
          className="text-4xl font-bold mb-12 text-center"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-200"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={getMotionVariants(index % 2 === 0 ? 'left' : 'right')}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full"></div>

              {/* Experience Card */}
              <div
                className={`bg-white p-6 rounded-lg shadow-md w-5/12 ${
                  index % 2 === 0 ? 'ml-8' : 'mr-8'
                }`}
              >
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{ color: titleColor }}
                >
                  {experience.title}
                </h3>
                <p className="text-lg font-medium mb-1" style={{ color: textColor }}>
                  {experience.company}
                </p>
                <p className="text-sm text-gray-500 mb-2">{experience.duration}</p>
                <p className="text-md leading-relaxed" style={{ color: textColor }}>
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

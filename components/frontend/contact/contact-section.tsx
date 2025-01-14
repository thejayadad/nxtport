'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ContactField {
  label: string;
  type: 'text' | 'email' | 'textarea'; // Supported input types
  placeholder?: string;
}

interface ContactSectionProps {
  title: string;
  description?: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonLabel?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  fields: ContactField[]; // Array of input fields
  animation?: {
    direction?: 'left' | 'right' | 'up' | 'down'; // Animation direction
    duration?: number; // Duration of the animation
    delay?: number; // Delay before animation starts
  };
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  titleColor = '#1e293b',
  descriptionColor = '#374151',
  backgroundColor = '#f9fafb',
  textColor = '#374151',
  buttonLabel = 'Send Message',
  buttonColor = '#2563eb',
  buttonTextColor = '#ffffff',
  fields,
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
    <motion.div

    id='contact'
      className={`w-full sm:mt-36 py-16 px-6 ${className}`}
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
      <div className="max-w-screen-md mx-auto text-center">
        {/* Title */}
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p
            className="text-lg mb-8"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        )}

        {/* Form */}
        <form className="space-y-6">
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.label}
                className="block text-left mb-1 font-medium"
                style={{ color: textColor }}
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.label}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  id={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg"
            style={{
              backgroundColor: buttonColor,
              color: buttonTextColor,
            }}
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactSection;

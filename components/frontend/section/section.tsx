import Image from 'next/image';
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  titleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
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
}) => {
  return (
    <div className='w-full'>
        <div
      className={`w-full mx-auto max-w-screen-lg py-16 px-6 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt="About Image"
            width={100}
            height={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
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
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;

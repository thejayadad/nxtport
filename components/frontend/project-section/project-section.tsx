'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  liveLink: string; // Link to the live project
  githubLink: string; // Link to the GitHub repository
}

interface ProjectSectionProps {
  title: string;
  titleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  projects: Project[];
  withBorder?: boolean; // Option to add a border to project cards
  animation?: {
    direction?: 'left' | 'right' | 'up' | 'down'; // Animation direction
    duration?: number; // Duration of the animation
    delay?: number; // Delay before animation starts
  };
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  titleColor = '#1e293b',
  backgroundColor = '#f9fafb',
  textColor = '#374151',
  projects,
  withBorder = false,
  animation = {
    direction: 'up', // Default direction
    duration: 0.8, // Default duration
    delay: 0.2, // Default delay
  },
  className = '',
}) => {
  // Determine the initial X or Y position based on the direction
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
    <div
    id='projects'
      className={`w-full h-[700px] py-16 px-6 ${className}`}
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

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg shadow-md bg-white ${
                withBorder ? 'border border-gray-300' : ''
              }`}
              initial={{
                opacity: 0,
                ...getAnimationProps(),
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: animation?.duration ?? 0.8, // Default duration
                delay: index * (animation?.delay ?? 0.2), // Default delay
              }}
            >
              {/* Project Image */}
              <Image
                height={100}
                width={100}
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Project Details */}
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: titleColor }}
              >
                {project.title}
              </h3>
              <p
                className="text-md leading-relaxed mb-4"
                style={{ color: textColor }}
              >
                {project.description}
              </p>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                  View Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

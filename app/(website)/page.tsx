import ContactSection from '@/components/frontend/contact/contact-section';
import ExperienceSection from '@/components/frontend/experience/experience';
import HeroSection from '@/components/frontend/hero/hero';
import ProjectSection from '@/components/frontend/project-section/project-section';
import AboutSection from '@/components/frontend/section/section';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className='h-full'>
        <HeroSection
      backgroundColor="linear-gradient(to bottom, #1e293b, #0f172a)"
      imageSrc="/zod.png"
      imageShape="circle"
      title="Hi, I'm John Doe"
      titleColor="#ccc"
      description="I create modern, scalable web applications."
      descriptionColor="#d1d5db"
      buttons={[
        {
          label: 'View My Work',
          link: '#projects',
          bgColor: '#2563eb',
          textColor: '#ffffff',
        },
        {
          label: 'Contact Me',
          link: '#contact',
          bgColor: '#4b5563',
          textColor: '#ffffff',
        },
      ]}
      withAnimation={true} // Enable animations

    />
 <AboutSection
      title="About Me"
      subtitle="Who I Am"
      description="I am a full-stack web developer passionate about building modern, scalable, and user-friendly web applications. I specialize in JavaScript, React, and Node.js, and have experience with a variety of other tools and frameworks."
      imageSrc="/zod.png"
      titleColor="#1e293b"
      backgroundColor="#f3f4f6"
      textColor="#374151"
        withAnimation={true}
  animationDirection="down"
    />
   <ExperienceSection
      title="My Experience"
      titleColor="#1e293b"
      backgroundColor="#fff"
      textColor="#374151"
      experiences={[
        {
          title: 'Frontend Developer',
          company: 'TechCorp',
          description: 'Built and optimized scalable UI components using React and Tailwind CSS.',
          duration: 'Jan 2020 - Dec 2022',
        },
        {
          title: 'Backend Developer',
          company: 'DevSolutions',
          description: 'Developed REST APIs and microservices using Node.js and Express.',
          duration: 'Jan 2018 - Dec 2019',
        },
        {
          title: 'Fullstack Intern',
          company: 'StartupHub',
          description: 'Contributed to the development of a web application using the MERN stack.',
          duration: 'Jun 2017 - Dec 2017',
        },
      ]}
    />
<ProjectSection
  title="My Projects"
  titleColor="#1e293b"
  backgroundColor="#fff"
  textColor="#374151"
  withBorder={true}
  animation={{
    direction: 'up', // Slide in from the left
    duration: 1, // 1-second animation
    delay: 0.1, // Stagger delay between cards
  }}
  projects={[
    {
      title: 'E-commerce Website',
      description:
        'A modern e-commerce platform with integrated payment gateway and product management.',
      imageSrc: '/zod.png',
      liveLink: 'https://ecommerce.example.com',
      githubLink: 'https://github.com/username/ecommerce',
    },
    {
      title: 'Portfolio Website',
      description:
        'A sleek portfolio showcasing my design and development projects.',
        imageSrc: '/zod.png',
        liveLink: 'https://portfolio.example.com',
      githubLink: 'https://github.com/username/portfolio',
    },
    {
      title: 'Blog Platform',
      description:
        'A fully-featured blog platform with markdown support and comment functionality.',
        imageSrc: '/zod.png',
        liveLink: 'https://blog.example.com',
      githubLink: 'https://github.com/username/blog',
    },
  ]}
/>
<ContactSection
  title="Get in Touch"
  description="Feel free to reach out for collaborations or just a friendly chat."
  titleColor="#1e293b"
  descriptionColor="#374151"
  backgroundColor="#fff"
  textColor="#374151"
  buttonLabel="Send"
  buttonColor="#2563eb"
  buttonTextColor="#ffffff"
  fields={[
    { label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Message', type: 'textarea', placeholder: 'Write your message here' },
  ]}
  animation={{
    direction: 'up',
    duration: 1,
    delay: 0.1,
  }}
/>

</div>

  );
};

export default App;

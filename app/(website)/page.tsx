import ExperienceSection from '@/components/frontend/experience/experience';
import HeroSection from '@/components/frontend/hero/hero';
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
    </div>

  );
};

export default App;

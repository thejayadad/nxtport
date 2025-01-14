import HeroSection from '@/components/frontend/hero/hero';
import React from 'react';

const App: React.FC = () => {
  return (
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
  );
};

export default App;

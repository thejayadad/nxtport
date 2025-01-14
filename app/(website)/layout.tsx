import Footer from '@/components/frontend/footer/footer';
import Navbar from '@/components/frontend/navbar/navbar';
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer
  backgroundColor="#0f172a"
  textColor="#f1f5f9"
  links={[
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]}
  socialIcons={[
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaTwitter/>, href: 'https://twitter.com' },
    { icon: <FaGithub />, href: 'https://github.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
  ]}
  footerText="© 2025 Dev Portfolio. Built with ❤️ and React."
  animation={{
    direction: 'up',
    duration: 1,
    delay: 0.1,
  }}
/>
    </div>
  )
}

export default layout
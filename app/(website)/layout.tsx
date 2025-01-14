import Navbar from '@/components/frontend/navbar/navbar';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout
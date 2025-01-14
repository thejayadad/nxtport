import React from 'react'
import MobileMenu from './mobile-menu'
import Logo from '../logo/logo'

const Navbar = () => {
  return (
    <header className='border-b w-full h-24'>
      <div className='mx-auto max-w-screen-lg px-4 flex justify-between w-full items-center h-full'>
        <div>
        <Logo name="theJayadad" shape="circle" iconText="J" />
        </div>
        <div className='block lg:hidden'>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Navbar
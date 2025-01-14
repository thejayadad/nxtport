import React from 'react';
import MobileMenu from './mobile-menu';
import Logo from '../logo/logo';
import NavLinks from './navlinks';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-24  shadow-md z-50">
      <div className="mx-auto max-w-screen-lg px-4 flex justify-between w-full items-center h-full">
        {/* Logo */}
        <div>
          <Logo name="theJayadad" shape="circle" iconText="J" />
        </div>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <MobileMenu />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:block">
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

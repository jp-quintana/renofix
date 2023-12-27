import React from 'react';
import ModeToggle from './mode-toggle';

const Nav = () => {
  return (
    <header className="fixed top-0 z-20 w-full">
      <div className="flex items-center justify-between px-10">
        <p className="text-[20px] font-bold">Logo</p>
        {/* <Image
      src={"/images/logo.png"}
      alt="logo"
      width={60}
      height={30}
      className="object-contain"
    /> */}
        <nav>
          <ul className="flex gap-[60px] py-[30px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Nav;

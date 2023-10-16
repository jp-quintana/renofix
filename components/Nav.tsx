import React from "react";

const Nav = () => {
  return (
    <header>
      <div className="nav-container flex justify-between">
        <p>Logo</p>
        <nav>
          <ul className="flex gap-[10px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

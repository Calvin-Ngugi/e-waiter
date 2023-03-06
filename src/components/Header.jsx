import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <div className="flex items-center gap-2">
            <img src="img/logo.png" alt="logo" className="w-8 object-cover" />
            <p className="text-headingColor text-xl font-bold">E-waiter</p>
        </div>

        <ul className="flex gap-8 items-center">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Service</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

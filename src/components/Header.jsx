import { motion } from "framer-motion";
import React from "react";
import {MdShoppingBasket} from "react-icons/md"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={'/'} className="flex items-center gap-2">
            <img src="img/logo.png" alt="logo" className="w-8 object-cover" />
            <p className="text-headingColor text-xl font-bold">E-waiter</p>
        </Link>

        <div className="flex gap-7">
        <ul className="flex gap-8 items-center">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
        </ul>

        <div className="relative flex items-center cursor-pointer">
          <MdShoppingBasket className="text-textColor text-2xl"/>
          <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <motion.img whileTap={{scale:0.6}} src="img/avatar.png" alt="user-profile" className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;

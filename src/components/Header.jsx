import React, { useState } from "react";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 px-16 bg-primary">
      {/* desktop & tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="img/logo.png" alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">E-waiter</p>
        </Link>

        <div className="flex gap-7">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex gap-8 items-center"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : "img/avatar.png"}
              alt="user-profile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-primary shadow-xl flex flex-col rounded-lg absolute top-12 right-0"
              >
                {user && user.email === "ncalvin67@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      onClick={() => setIsMenu(false)}
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full justify-between items-center">
      <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src="img/logo.png" alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">E-waiter</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : "img/avatar.png"}
            alt="user-profile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-primary shadow-xl flex flex-col rounded-lg absolute top-12 right-0"
            >
              {user && user.email === "ncalvin67@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    onClick={() => setIsMenu(false)}
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col gap-5 px-4 py-2">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
                  Menu
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
                  About
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">
                  Service
                </li>
              </ul>

              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

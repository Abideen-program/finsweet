import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { clx } from "../utils/clx";
import Button from "../Button/Button";

const listClasses = clx(
  "text-white lg:text-black lg:text-xs font-semibold py-2 px-4 cursor-pointer lg:hover:text-[#662E91]"
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenuHandler = () => {
    return setShowMenu(false);
  };

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden w-full h-[50px] lg:flex items-center px-10">
        <div className="w-[100px]">
          <img src="./images/logo.png" alt="logo" className="object-contain" />
        </div>

        <div className="ml-auto w-[55%]">
          <ul className="flex items-center justify-between">
            <li className={listClasses}>Home</li>
            <li className={listClasses}>Product</li>
            <li className={listClasses}>Pricing</li>
            <li className={listClasses}>About Us</li>
            <li className={listClasses}>Blog</li>
            <li className={listClasses}>Contact</li>
            <li>
              <Button className="text-white bg-[#1D2130]">
                Free Trial
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden w-full h-[50px] flex items-center justify-between px-6">
        <div className="w-[100px]">
          <img src="./images/logo.png" alt="logo" />
        </div>

        {showMenu && (
          <div className="relative z-10">
            <ul className="flex flex-col items-center justify-evenly h-[100vh] w-[250px] bg-[#662E91] fixed top-0 right-0">
              <FaTimes
                className="text-xl text-[#fff] cursor-pointer absolute top-3 left-2"
                onClick={hideMenuHandler}
              />
              <li className={listClasses}>Home</li>
              <li className={listClasses}>Product</li>
              <li className={listClasses}>Pricing</li>
              <li className={listClasses}>About Us</li>
              <li className={listClasses}>Blog</li>
              <li className={listClasses}>Contact</li>
              <li
                className={`${listClasses} rounded-lg bg-[#1D2130] text-white`}
              >
                Free Trial
              </li>
            </ul>
          </div>
        )}

        <FaBars
          className="text-xl text-[#662E91] cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;

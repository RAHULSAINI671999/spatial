
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo1 from "../assets/logo1.png"
 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-2xl  shadow-lg shadow-indigo-500/50 text-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-12 "
                src={logo1}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-10">
              {/* <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300"
              >
                Home
              </Link> */}
              <Link
                to="/toolkit"
                className="ml-4 px-3 py-2 rounded-md text-lg font-medium "
              >
              Creator Toolkit
              </Link>
              <Link
                to="/blog"
                className="ml-4 px-3 py-2 rounded-md text-lg font-medium "
              >
               Blog
              </Link>
              <Link
                to="/support"
                className="ml-4 px-3 py-2 rounded-md text-lg font-medium text-lg"
              >
               Support
              </Link>
              <Link
                to="/login"
                className="ml-4 px-3 py-2 rounded-md text-lg font-medium bg-white text-gray-900 "
              >
                Login
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white"
            >
            
            </Link>
            <Link
              to="/toolkit"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
               Creator Toolkit 
            </Link>
            <Link
              to="/blog"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
           Blog
            </Link>
            <Link
              to="/support"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white"
            >
         Support
            </Link>
            
            <Link
              to="/login"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium bg-white text-gray-900 hover:bg-gray-100"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;



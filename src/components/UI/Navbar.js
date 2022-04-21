import React, { useState } from 'react';

import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const [isOPen, setIsOpen] = useState(false);

  return (
    <nav className="sticky right-0 left-0 top-0 bg-black overflow-x-hidden z-10 sm:h-auto sm:py-1 sm:px-5">
      <div className="overflow-x-hidden p-1 sm:px-2 lg:p-2">
        <div className="relative h-auto w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOPen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-between">
            <div className="flex-shrink">
              <img
                className="block lg:hidden h-14 w-auto"
                src={Logo}
                alt="DOJO"
              ></img>
              <img
                className="hidden lg:block lg:h-12 sm:w-full"
                src={Logo}
                alt="DOJO"
              ></img>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex ">
                <NavLink
                  to="/"
                  className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  About
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Places
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Menu
                </NavLink>

                <NavLink
                  to="/reservation"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Book a Table
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOPen && <div className="sm:hidden fixed inset-x-0 inset-y-50 bg-black" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-white text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            About
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Places
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Our Menu
          </NavLink>

          <NavLink
            to="/reservation"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Book a Table
          </NavLink>
        </div>
      </div>}
      
    </nav>
  );
}

export default Navbar;
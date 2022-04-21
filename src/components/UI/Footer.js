import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-black text-zinc-400 sm:px-4 sm:justify-around sm:items-start">
      <div className="sm:flex sm:flex-row sm:justify-between sm:py-2">
        <div className="w-40 m-auto pt-5">
          <img src={logo} alt="DOJO" className="w-26 sm:w-30"/>
        </div>
        <div className="flex flex-col justify-around items-center py-4 sm:flex-row  sm:items-center sm:ml-40">
          <Link to="" className="my-2 sm:m-2">
            Home
          </Link>
          <Link to="" className="my-2 sm:m-2">
            ABOUT
          </Link>
          <Link to="" className="my-2 sm:m-2">
            PLACES
          </Link>
          <Link to="" className="my-2 sm:m-2">
            MENU
          </Link>
        </div>
      </div>
      <div className='p-2 py-4 text-xl m-auto border-t text-zinc-200 sm:w-full sm:mx-0 sm:border-t sm:text-center'>
        <p>ALL RIGTHS RESERVED &copy;Code-lvr</p>
      </div>
    </footer>
  );
}

export default Footer;
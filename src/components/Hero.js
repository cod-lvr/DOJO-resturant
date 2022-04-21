import React from "react";
import { Link } from 'react-router-dom';

import Play from "../assets/svg/play.svg";
import arrow from "../assets/svg/arrow.svg";
import calender from "../assets/svg/calendar.svg";
import video from "../assets/vid.mp4";

const Hero = () => {
  return (
    <section className="reletive p-4 pb-2 h-auto bg-center bg-hero-pattern-mob max-w-none  flex flex-col items-center justify-between overflow-hidden sm:h-screen sm:bg-hero-pattern-desk">
      <div className="absolute inset-x-0 top-10 w-full h-100 sm:inset-0">
        <video
          frameBorder="0"
          autoPlay
          loop
          muted
          className="object-cover w-full h-100 object-center opacity-40  min-h-full max-w-none  sm:w-5/6"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center justify-center mt-36 z-0 sm:flex-row sm:mt-60 lg:mt-40 sm:w-full sm:justify-between sm:px-6 ">
        <div className="w-full sm:w-4/6 text-center sm:text-left">
          <p className="text-lg font-Taur text-zinc-300 sm:text-xl">DOJO MAKES</p>
          <h1 className="text-3xl font-bold leading-9 mt-10 text-zinc-300 sm:leading-loose sm:ml-2 sm:text-4xl sm:tracking-widest">
            A BEST DELESIOUS FOOD WITH BEST LOCATIONS.
          </h1>
        </div>
        <div className="reletive text-white my-20 z-0">
          <button className="flex  flex-row items-center justify-between text-zinc-400">
            <span>SHOW REEL</span>
            <span>
              <img src={Play} alt="calender" className="w-10 ml-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="reletive z-0 sm:w-9/12 sm:absolute sm:right-0 sm:top-full lg:w-7/12">
        <Link to="/reservation" className="flex flex-row items-center justify-between rounded bg-yellow-600 hover:bg-yellow-700 px-10 py-4 font-bold text-sm w-full sm:py-5 sm:px-8">
          <span>
            <img src={calender} alt="calender" className="w-5" />
          </span>
          <span className="mx-2 text-zinc-200">BOOK A TABLE NOW</span>
          <span>
            <img src={arrow} alt="arrow" className="w-5" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import image from "../assets/photos/about.jpg";
import Button from "./UI/Button";

const About = () => {
  return (
    <section className="p-4  text-zinc-400 bg-top h-full bg-content-pattern-mob sm:h-50 sm:p-4">
      <div className="text-center my-6 text-zinc-200 sm:text-left">
        <div className="w-20 bg-yellow-600 h-1 m-auto sm:m-6 sm:mb-0"></div>
        <h1 className="text-2xl tracking-high sm:text-xl sm:font-bold sm:ml-6 mt-2">ABOUT</h1>
      </div> 
      <div className=" p-2 bg-stone-900 flex flex-col justify-between sm:flex-row sm:h-80 sm:p-2 lg:p-4">
        <div className="p-1 sm:pt-4 sm:w-10/12 lg:pt-0 lg:w-6/12">
          <img src={image} alt="resturant" className="w-full object-cover"></img>
        </div>
        <div className="text-justify p-1 my-2 sm:pl-2 sm:w-8/12 lg:pl-4 lg:w-6/12">
          <p className="mb-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default About;

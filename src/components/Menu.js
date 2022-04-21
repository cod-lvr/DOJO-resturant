import React from 'react';
import image from "../assets/photos/menu-1-.png";
import image2 from "../assets/photos/menu-2-.png";
import image3 from "../assets/photos/menu-3-.png";

const Menu = () => {
  return (
    <section className="sm:reletive p-4  text-zinc-400 bg-top h-full sm:p-9 bg-black">
      <div className="text-center my-6 text-zinc-200">
        <div className="w-20 bg-yellow-600 h-1 m-auto "></div>
        <h1 className="text-2xl tracking-high  sm:text-xl sm:font-bold mt-2">
          OUR MENU
        </h1>
        <p className="text-sm w-25 my-5 text-zinc-400 sm:text-sm">
          has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="sm:flex-row sm:flex  sm:justify-around sm:h-90 sm:p-4 bg-stone-900 items-center">
        <div className="p-2">
          <div className="p-1 sm:w-full">
            <img
              src={image}
              alt="resturant"
              className="w-30 sm:w-100"
            ></img>
          </div>
        </div>
        <div className="p-2  my-2">
          <div className="p-1 w-fit">
            <img
              src={image2}
              alt="resturant"
              className="w-30 sm:w-100"
            ></img>
          </div>
        </div>
        <div className="p-2">
          <div className="p-1 w-fit">
            <img
              src={image3}
              alt="resturant"
              className="w-30 sm:w-100"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-30 mt-10 text-center p-1 sm:w-50">
        <button className="m-auto w-22 bg-stone-900 p-2 text-lg">See Full Menu</button>
      </div>
    </section>
  );
}

export default Menu;
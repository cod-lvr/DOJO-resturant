import React from "react";
import Button from "./UI/Button";
import headPlaces from "../assets/photos/head-places.jpg";
import placeOne from "../assets/photos/place-one.jpg";


const Places = () => {
  return (
    <section className="p-4 text-zinc-400  bg-top h-100 bg-black sm:h-100">
      <div className="text-center my-6 text-zinc-200 sm:text-right sm:mr-5">
        <div className="w-20 bg-yellow-600 h-1 m-auto sm:-mr-0 sm:w-28"></div>
        <h1 className="text-2xl tracking-high  sm:text-xl sm:font-bold mt-2">
          OUR PLACES
        </h1>
      </div>
      <div className="flex flex-col h-full">
        <div className="hidden sm:block sm:-mb-80 sm:h-full sm:object-center sm:opacity-60">
          <img
                src={headPlaces}
                alt="resturant"
                className="w-100 object-cover"
              ></img>
        </div>
        <div  className="flex flex-col sm:justify-around h-fit my-4 sm:flex-row sm:items-center z-0 sm:p-10">
            <div className="bg-stone-900 p-2 sm:mr-10 sm:p-3">
             <div className="p-1 w-fit">
              <img
                src={placeOne}
                alt="resturant"
                className="w-100 object-cover"
              ></img>
            </div>
            <div className="text-center my-3 text-zinc-200 sm:text-left sm:p-1">
              <div className="w-20 bg-yellow-600 h-1 m-auto sm:ml-0"></div>
              <h1 className="text-2xl tracking-high mt-1">place one</h1>
            </div>
            <div className="text-justify p-1">
              <p className="mb-2 text-zinc-400">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here'.
              </p>
              <Button />
            </div>
          </div>
          <div className="bg-stone-900 p-2 mt-4 sm:mt-0">
            <div className="sm:p-1 w-fit ">
              <img
                src={placeOne}
                alt="resturant"
                className="w-100 object-cover"
              ></img>
            </div>
            <div className="text-center my-3 text-zinc-200 sm:text-left sm:p-1">
              <div className="w-20 bg-yellow-600 h-1 m-auto sm:ml-0"></div>
              <h1 className="text-2xl tracking-high mt-1">place Two</h1>
            </div>
            <div className="text-justify p-1">
              <p className="mb-2 text-zinc-400">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here'.
              </p>
              <Button />
            </div> 
          </div>
       </div>
       
      </div>
      <p className="text-center text-sm text-parg-cl py-3">
        MORE PLACES COMMING SOON...
      </p>
    </section>
  );
};

export default Places;

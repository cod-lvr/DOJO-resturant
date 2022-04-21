import React from 'react';
import image from '../assets/photos/ig.jpg'


const BookTable = () => {
    return (
       <section className="p-4 bg-top h-full bg-contact-pattern-mob sm:p-8 sm:h-100 sm:bg-contact-pattern-desk sm:object-center">
           <div className="text-center my-6 text-zinc-200">
                <div className="w-20 bg-yellow-600 h-1 m-auto"></div>
                <h1 className="text-2xl tracking-high mt-2">RESERVATION</h1>
                <p className="text-zinc-400">check your table now, book without waiting</p>
            </div>
           <div className="bg-stone-900 h-100 p-3 px-1 flex items-center sm:flex-row justify-center sm:justify-around">
               <div className="text-zinc-200 flex">
                    <form>
                        <div className="flex flex-col">
                            <label htmlFor="date" className="my-2">Date</label>
                            <input type="date" id="date" className="py-2 px-3"/>
                        </div>
                        <div className="flex flex-col my-5">
                            <label htmlFor="time" className="my-2">Time</label>
                            <input type="number" id="time" className="py-2 px-3"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="people" className="my-2">number of people</label>
                            <input type="number" id="people" className="py-2 px-3"/>
                        </div>
                        <div className="my-5 text-center">
                            <button className="bg-yellow-600 py-4 px-3 uppercase">reserve now</button>
                        </div>
                    </form>
                </div>
                <div className="hidden sm:block sm:w-5/12">
                   <img src={image} alt="reservation" />
                </div>
           </div>
       </section>
    )
}

export default BookTable;
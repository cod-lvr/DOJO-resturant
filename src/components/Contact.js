import React from "react";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="p-4 bg-top h-100 bg-contact-pattern-mob sm:p-8 sm:h-100 sm:bg-contact-pattern-desk sm:object-contain">
      <div className="text-center my-6 text-zinc-200">
        <div className="w-20 bg-yellow-600 h-1 m-auto"></div>
        <h1 className="text-2xl tracking-high mt-2">CONTACT</h1>
      </div>
      <div className="text-justify p-1 text-sm my-8 text-zinc-400 sm:w-100 sm:py-30 sm:m-auto lg:w-9/12">
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages.
        </p>
      </div>
      <div className="text-center mb-6 sm:w-52 sm:m-auto sm:pt-8">
        <Link to="/reservation" className="rounded bg-yellow-600 hover:bg-yellow-700 px-1 py-4 font-bold text-sm w-full text-zinc-200">
          RESERVE A TABLE
        </Link>
      </div>
    </section>
  );
};

export default Contact;

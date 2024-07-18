import React from "react";
import { IoIosArrowForward } from 'react-icons/io';

export const ChatUI = () => {
  return (
    <section className="relative h-[90vh]">
      <div className="flex items-center justify-center pt-24 flex-col">
        <img src="/assets/images/logo.png" alt="logo" className="h-56 w-56" />
        <p className="text-white font-bold text-center">The best AI in the town The best AI in the town</p>
      </div>
      <div className="absolute bottom-7 w-full flex justify-center">
        <div className="relative w-[90vw] lg:w-[40vw] md:w-[40vw] mb-4">
          <input
            type="text"
            placeholder="Message LexAI"
            className="border rounded-lg bg-white px-4 pr-10 m-0 resize-none h-[5vh] w-full focus-visible:ring-0"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-2">
            <IoIosArrowForward className="h-7 w-7 text-white rounded-md rotate-[-90deg] bg-black" />
          </button>
        </div>
      </div>
    </section>

  )
};
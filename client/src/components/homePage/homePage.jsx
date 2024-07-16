import React from "react";

export const HomePage = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-[#212529]">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 space-y-6 sm:space-y-9 px-4 sm:px-0">
          <h1 className="text-white text-5xl font-bold leading-tight text-center sm:text-left">
            Pakistan’s<br />
            1st Legal Chatbot
          </h1>
          <p className="text-white text-xl text-center sm:text-left">
            Lexa is reshaping legal consultation in Pakistan, offering instantaneous AI-assisted guidance. Designed with precision for legal professionals and law students. Embrace the future of legal expertise with Lexa, your 24/7 digital legal assistant.
          </p>
          <button className="bg-white text-black border border-white rounded-full px-6 py-2 transition-all duration-300 ease-in-out block mx-auto sm:mx-0">
            Get Started
          </button>
        </div>
        <div className="w-full sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 flex justify-center items-center !pt-11 sm:pt-0 py-7">
          <img src="/assets/images/home.png" alt="home-image" className="h-auto max-h-80 sm:max-h-full max-w-full"/>
        </div>
      </div>
    </section>
  );
};

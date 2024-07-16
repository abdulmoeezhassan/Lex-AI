import React from "react";
import { aboutUsContent } from "../../constants/about";
import { Footer } from "../footer/footer";

export const AboutUs = () => {
  return (
    <section className="bg-[#212529] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white font-bold text-center text-4xl mb-8">About Us</h1>
        {aboutUsContent.map((section, index) => (
          <div
            key={index}
            className="about-us-section bg-white rounded-lg shadow-lg mb-6 p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <h2 className="text-black font-bold text-2xl mb-4">{section.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: section.text }}
              className="text-black text-lg leading-relaxed"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

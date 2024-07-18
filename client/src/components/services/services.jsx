import React from "react";
import { Servies } from "../../constants/services";
import { Footer } from "../footer/footer";
export const Services = () => {
  return (
    <section className="bg-[#212529]">
      <div>
        <div>
          <h1 className="text-3xl text-white font-bold text-center">Main Serives We Provide</h1>
          <p className="text-xl text-white text-center pt-2">Each service feature highlights the key benefit and the value it brings to the users, whether they are legal professionals or students.</p>
        </div>
        <div className="flex items-center justify-center pt-9">
          <div className="lg:w-[60%] md:lg-w-[60%] w-[95%]">
            {Servies.map((ser, index) => (
              <div
                key={index}
                className="about-us-section bg-white rounded-lg shadow-lg mb-6 p-6 transition duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <img className="mb-4" src={ser.image} alt="img"/>
                <h1 className="text-black font-bold text-3xl ">{ser.heading}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: ser.description }}
                  className="text-black text-lg leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
import React, { useState } from "react";
import { Contact } from "../../constants/contact";
import { Footer } from "../footer/footer";
import axios from "axios";
export const ContactUs = () => {

  const [formData, setFromData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    fullNameError: '',
    emailError: '',
    messageError: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({ ...prevData, [name]: value }))
  };

  const ValidateFrom = () => {
    let isValid = true;
    setErrors({ fullNameError: '', emailError: '', messageError: '' })
    if (formData.fullName.trim() === "") {
      setErrors((prevErros) => ({ ...prevErros, fullNameError: 'Please Enter You full Name' }));
      isValid = false;
    }
    if (formData.email.trim() === "") {
      setErrors((prevErros) => ({ ...prevErros, emailError: 'Please Enter You Email' }));
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, emailError: "Please enter a valid email address" }));
      isValid = false;
    }
    if (formData.message.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, messageError: "Please write your message" }));
      isValid = false;
    }
    return isValid;
  }
  const handleSubmit = async (event) => {
    if (!ValidateFrom()) {
      return;
    }
    try {
      const SubmitForm = await axios.post(`${process.env.REACT_APP_SERVER}`, formData);
      if (SubmitForm) {
        console.log("Form Submitted Successfully");
      }
      else {
        console.log("Error is Submitting Form");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <div>
        <h1 className="text-5xl font-bold text-white text-center pt-[2vw]">Contact Us</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center flex-col pt-[2vw]">
          {Contact.map((contact, index) => (
            <div key={index} className="flex flex-col">
              <label className="pb-4 pt-4 text-xl font-bold text-white">{contact.label}</label>
              <input
                type="text"
                placeholder={contact.placeholder}
                className={`lg:w-[25vw] md:w-[58vw] w-[65vw] ${contact.label === 'Message' ? 'h-[15vw]' : 'h-11'} rounded-lg border border-gray-300 p-3 focus:outline-none`}
                value={
                  contact.name === 'fullName'
                    ? formData.fullName
                    : contact.name === 'email'
                      ? formData.email
                      : formData.message
                }
                name={contact.name}
                onChange={handleChange}
              />
              {errors[`${contact.name}Error`] && (
                <span className="text-red-500 text-sm pt-2">{errors[`${contact.name}Error`]}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-10">
          <button type="submit" className="text-white border rounded-lg px-10 py-5 text-2xl hover:bg-slate-400 hover:duration-300 hover:ease-out">
            Submit
          </button>
        </div>
      </form>
      <div className="pt-[25vh] lg:pt-0 md:pt-[30vw]">
        <Footer />
      </div>
    </section>
  );
};

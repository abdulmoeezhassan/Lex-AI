import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { HomePage } from "./components/homePage/homePage";
import { Footer } from "./components/footer/footer";
import { AboutUs } from "./components/aboutUs/aboutUs";
import { Services } from "./components/services/services";
import { ChatUI } from "./components/chatUI/chatUI";
import { AdminDashboard } from "./components/adminDashbard/adminDashboard";
import { ContactUs } from "./components/contactUs/contactUs";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Navbar />
          <HomePage />
          <Footer />
        </div>} />
        <Route path="/About" element={<div>
          <Navbar />
          <AboutUs /> 
          <Footer />
        </div>} />
        <Route path="/Services" element={<div>
          <Navbar />
          <Services />
        </div>} />
        <Route path="/Chat" element={<div>
          <Navbar />
          <ChatUI />
        </div>} />
        <Route path="/Admin" element={<div>
        <AdminDashboard/>
        </div>} />
        <Route path="/Contact Us" element={<div>
        <Navbar />
        <ContactUs/>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

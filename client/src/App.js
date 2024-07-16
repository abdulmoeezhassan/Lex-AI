import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { HomePage } from "./components/homePage/homePage";
import { Footer } from "./components/footer/footer";
export const App = () => {
  return (
    <div className="bg-[#212529] h-[100vh]" >
      <Navbar />
      <HomePage/>
      <Footer/>
    </div>
  );
}

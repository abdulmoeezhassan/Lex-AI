import React from "react";
import { Navbar } from "./components/navbar/navbar";
import { HomePage } from "./components/homePage/homePage";
export const App = () => {
  return (
    <div className="bg-[#212529] h-[100vh]" >
      <Navbar />
      <HomePage/>
    </div>
  );
}

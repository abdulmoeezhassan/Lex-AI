import React from "react";
import { NavbarItems } from "../../constants/navbar";

export const Navbar = () => {
  
    const CLIENT_ID = process.env.CLIENT_ID;
    const initializeGoogleSignIn = () => {
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init({
          client_id: CLIENT_ID,
          scope: 'profile email'
        });

        auth2.attachClickHandler(document.getElementById('googleSignInBtn'), {}, (googleUser) => {
          const profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId());
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
        }, (error) => {
          console.log(JSON.stringify(error, undefined, 2));
        });
      });
    };

  return (
    <section>
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between">
        <div className="lg:pl-[40px] md:pl-[40px] pl-0">
          <img src={NavbarItems.logo} alt="Logo" className="w-20 h-15" />
        </div>
        <div className="space-x-8">
          {
            NavbarItems.items.map((nav, index) => (
              <a href={nav.href} key={index} className="text-white">{nav.title}</a>
            ))
          }
        </div>
        <div className=" lg:pr-[40px] md:pr-[40px] pr-0 pt-4 lg:pt-0 md:pt-0 flex items-center" onClick={initializeGoogleSignIn}>
          <button id="googleSignInBtn" className="text-white hover:bg-white hover:text-black border border-white rounded-3xl   px-6 py-2 transition-all duration-300 ease-in-out">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};
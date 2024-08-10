import React, { useEffect, useState } from "react";
import { NavbarItems } from "../../constants/navbar";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

export const Navbar = () => {
  const [user, setUser] = useState(null);  
  const [profile, setProfile] = useState(null); 

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Token Response:", tokenResponse);
      setUser(tokenResponse);  
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const createUser = async (profileData) => {
    try {
      const response = await axios.post('http://localhost:3002/api/user/createuser', profileData);
      if (response.status === 201) {
        console.log("User created successfully");
      } else {
        console.log("Error in creating user");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (profile) {
      createUser(profile);
    }
  }, [profile]);  // This useEffect will trigger whenever profile state changes

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          console.log("Profile Data:", res.data);
          setProfile(res.data);
        })
        .catch((err) => console.log("Error fetching profile:", err));
    }
  }, [user]);  // This useEffect triggers when the user state changes

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null); 
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
        <div className="lg:pr-[40px] md:pr-[40px] pr-0 pt-4 lg:pt-0 md:pt-0 flex items-center">
          {profile ? (
            <div className="flex flex-row">
              <img src={profile.picture} alt={profile.name} className="w-10 h-10 rounded-full" />
              <button onClick={logOut} className="text-white hover:bg-white hover:text-black border border-white rounded-3xl px-6 py-2 transition-all duration-300 ease-in-out ml-4">
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={login} id="googleSignInBtn" className="text-white hover:bg-white hover:text-black border border-white rounded-3xl px-6 py-2 transition-all duration-300 ease-in-out">
              Sign In
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

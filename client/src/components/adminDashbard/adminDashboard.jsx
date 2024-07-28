import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { admin } from "../../constants/constants";
import { Footer } from "../footer/footer";  

export const AdminDashboard = () => {
  return (
    <section className="min-h-screen bg-gray-800 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between">
        <div className="lg:pl-9 md:pl-9 p-0 pt-5">
          <img src="/assets/images/logo.png" alt="App logo" className="w-20 h-15" />
        </div>
        <div className="pt-6">
          <input
            placeholder="Search Here"
            type="text"
            className="block lg:w-[40vw] md:w-[40vw] sm:w-[50vw] w-[70vw] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-row gap-4 lg:pr-9 md:pr-9 sm:p-0 pt-6 cursor-pointer">
          <FontAwesomeIcon icon={faBell} style={{ color: 'white', fontSize: '24px' }} />
          <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '24px' }} />
          <img src="/assets/images/united-kingdom.png" alt="flag-icon" className="h-[24px]" />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col p-5 cursor-pointer">
        <h1 className="text-white text-3xl mb-6 font-bold">Overview</h1>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-5">
          <div className="lg:w-1/3 md:w-1/3 w-full bg-white text-black p-5 rounded-lg shadow-lg hover:translate-y-3 duration-300">
            <h1 className="text-xl font-semibold mb-2">Searches</h1>
            <p className="text-2xl mb-4">31</p>
            <hr />
            <div className="flex items-center mt-2">
              <span className="text-blue-300 text-xl">15%</span>
              <span className="ml-2">increase vs last month</span>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full bg-white text-black p-5 rounded-lg shadow-lg hover:translate-y-3 duration-300">
            <h1 className="text-xl font-semibold mb-2">Sign ups</h1>
            <p className="text-2xl mb-4">240</p>
            <hr />
            <div className="flex items-center mt-2">
              <span className="text-blue-300 text-xl">5%</span>
              <span className="ml-2">decrease vs last month</span>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full bg-white text-black p-5 rounded-lg shadow-lg hover:translate-y-3 duration-300">
            <h1 className="text-xl font-semibold mb-2">Open Issues</h1>
            <p className="text-2xl mb-4">21</p>
            <hr />
            <div className="flex items-center mt-2">
              <span className="text-blue-300 text-xl">12%</span>
              <span className="ml-2">increase vs last month</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white text-3xl mb-6 font-bold text-center">Users Info</h1>
      <div className="text-black flex items-center justify-center p-4 hover:translate-y-3 duration-300 cursor-pointer">
        <table className="border-collapse border border-white rounded-xl w-[90vw] lg:w-3/4 shadow-lg">
          <thead className="bg-white">
            <tr>
              <th className="border border-black p-3 rounded-tl-xl">Name</th>
              <th className="border border-black p-3">Email</th>
              <th className="border border-black p-3 rounded-tr-xl">Latest Search</th>
            </tr>
          </thead>
          <tbody className="bg-gray-700">
            {admin.map((admin, index) => (
              <tr key={index} className="border border-white bg-white rounded-tl-xl">
                <td className="border border-black p-3">{admin.name}</td>
                <td className="border border-black p-3">{admin.email}</td>
                <td className="border border-black p-3">{admin.latestSearch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </section>
  );
};

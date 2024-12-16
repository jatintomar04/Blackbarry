import React from 'react';
import bgnew from '../assets/Newcomplaints.jpg'
import Navbar from './Navbar';
import Footer from './Footer';

const Newcomplaints = () => {
  return (
    <>
    <Navbar/>
      <div className="flex h-[90vh] bg-cover bg-center h-screen flex items-center justify-center"  style={{ backgroundImage: `url(${bgnew})` }}>
        <div className="rounded-xl p-4 border-2 items-center justify-center flex flex-col bg-gradient-to-t from-blue-900 via-purple-500 to-indigo-600 shadow-lg shadow-black">
          <input className="bg-black rounded p-2 my-3 w-[600px]" placeholder="Name" type="text" />
          <input className="bg-black rounded p-2 my-3 w-[600px]" placeholder="E-mail" type="text" />
          <input className="bg-black rounded p-2 my-3 w-[600px]" placeholder="Device name" type="text" />
          <textarea className="bg-white rounded p-2 my-3 h-[100px] w-[600px]" placeholder="Description"></textarea>
          <label htmlFor="file-upload" className="w-[600px] cursor-pointer inline-block rounded-md bg-white px-4 py-2 text-black hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Browse Photo
          </label>
          <input type="file" id="file-upload" className="hidden" accept="image/*" />
          <div id="file-name" className="mt-4 text-gray-700"></div>
          <button className="my-3 bg-black border-[1px] text-white rounded-xl p-2 w-[300px] flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-105">
            <span>Submit Complaint   </span>
            <svg className="w-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Newcomplaints;

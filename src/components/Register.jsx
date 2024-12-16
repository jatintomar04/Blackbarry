import React from 'react';
import bg from '../assets/background.webp';
import repair from '../assets/repair.webp';
import Footer from './Footer';
import Plainnav from './Plainnav';

const Register = () => {
  return (
    <div
      className="flex flex-col justify-between h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
     <Plainnav/>
      <div className='flex w-full'>
        {/* Form Section */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center">
        <div className="rounded-xl w-full sm:w-[360px] p-4 border-2 flex flex-col items-center justify-center bg-gradient-to-t from-blue-900 via-purple-500 to-indigo-600 shadow-lg shadow-black">
          <input
            className="bg-black rounded p-2 my-3 text-white w-full sm:w-[300px]"
            placeholder="Name"
            type="text"
          />
          <input
            className="bg-black rounded p-2 my-3 text-white w-full sm:w-[300px]"
            placeholder="E-mail"
            type="email"
          />
          <input
            className="bg-black rounded p-2 my-3 text-white w-full sm:w-[300px]"
            placeholder="Password"
            type="password"
          />
          <input
            className="bg-black rounded p-2 my-3 text-white w-full sm:w-[300px]"
            placeholder="Confirm Password"
            type="password"
          />
          <button className="my-3 bg-black border-[1px] text-white rounded-xl p-2 w-full sm:w-[300px] flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-105">
            <span>Register</span>
            <svg
              className="w-3 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center">
        <img
          className="w-[350px] sm:w-[300px] border-[3px] rounded-full shadow-lg shadow-white"
          src={repair}
          alt="Repair illustration"
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
      
};

export default Register;

import React from 'react';
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/register');
  };





  return (
    <>
      <div className="flex items-center justify-between px-4 h-[60px] w-full bg-black">

        <img 
          className="h-9 w-auto" 
          src={logo} 
          alt="Logo"
        />
    
        <div className="flex justify-between bg-black text-white w-[600px]">
          <a 
            className="pb-1 border-b-2 border-transparent transition-all duration-300 hover:border-blue-600 hover:pb-2" 
            href="#"
          >
            Products
          </a>
          <a 
            className="pb-1 border-b-2 border-transparent transition-all duration-300 hover:border-blue-600 hover:pb-2" 
            href="#"
          >
            Services
          </a>
          <a 
            className="pb-1 border-b-2 border-transparent transition-all duration-300 hover:border-blue-600 hover:pb-2" 
            href="#"
          >
            Solution
          </a>
          <a 
            className="pb-1 border-b-2 border-transparent transition-all duration-300 hover:border-blue-600 hover:pb-2" 
            href="#"
          >
            Contact Us
          </a>
          <a 
            className="pb-1 border-b-2 border-transparent transition-all duration-300 hover:border-blue-600 hover:pb-2" 
            href="#"
          >
            Support
          </a>
        </div>
        <button 
          onClick={handleSignInClick}
          className="border-[1.5px] text-white rounded-md p-1 w-30 flex items-center justify-center transform transition-all duration-300 hover:scale-110"
          aria-label="register"
        >
          <span>Register</span>
          <svg 
            className="w-3 ml-2" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3" 
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Navbar;
import React from 'react';
import loginbg from '../assets/login.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
  
    const handleloginClick = () => {
      navigate('/complaints');
    };

  return (
     <>
 
    <div className="flex flex-col justify-between h-[100vh] bg-cover bg-center"style={{ backgroundImage: `url(${loginbg})` }}>
    <Navbar/>
      <div className="w-[100%] p-4 flex flex-col items-center justify-center">
        <div className="rounded-xl w-[360px] p-4 border-2 items-center justify-center flex flex-col bg-gradient-to-t from-blue-900 via-purple-500 to-indigo-600 shadow-lg shadow-black">
          {/* E-mail input */}
          <input
            className="bg-black rounded p-2 my-3 text-white w-[300px]"
            placeholder="E-mail"
            type="email"  // Updated to email for better validation
          />
          {/* Password input */}
          <input
            className="bg-black rounded p-2 my-3 text-white w-[300px]"
            placeholder="Password"
            type="password"  // Updated to password for better security
          />
          {/* Login button */}
          <button onClick ={handleloginClick} className="my-3 bg-black border-[1px] text-white rounded-xl p-2 w-[300px] flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-105">
            <span>Login</span>
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
      <Footer/>
    </div>
   
    </>
  );
};

export default Login;

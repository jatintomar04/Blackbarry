import React from 'react'
import Navbar from './Navbar'
import video from '../assets/Devices.mp4'
import Cards from './Cards'
import Contact from './Contact'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const navigate = useNavigate();

const handleSignInClick = () => {
  navigate('/login');
};


  return (
    <>
    <Navbar/>
      <div className="h-[88vh] w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-[60px] left-0 w-full h-[88vh] object-cover"
        aria-label="Video background showing devices"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="p-8 relative z-10 flex flex-col justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to Blackbarry</h1>
        <p className="w-[520px] text-sm my-2">
          "At Blackbarry Mobile Repair, we specialize in providing fast, reliable, and affordable repair services for all your mobile devices. Whether you need a screen replacement, battery repair, or troubleshooting for software issues, our experienced technicians are here to help. We use high-quality parts and offer a quick turnaround time to ensure your device gets back to you in perfect working condition. With our commitment to customer satisfaction and transparent pricing, you can trust us to handle all your mobile repair needs. Get in touch with us today for expert repairs and unbeatable service!"
        </p>
        <button onClick={handleSignInClick}
          className="border-[1.5px] bg-black text-white rounded-md p-1 w-[120px] flex items-center justify-center transform transition-all duration-300 hover:scale-110"
          aria-label="Sign in button"
        > 
          <span>  Login </span>
          <svg
            className="w-3 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
         
        </button>
      </div>
    </div>
    <Cards />
    <Contact/>
    <Footer/>
    </>
  )
}

export default Dashboard
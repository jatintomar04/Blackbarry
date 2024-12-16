import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logoutnav from './Logoutnav';
import Footer from './Footer';

const Mycomplaint = () => {
  const navigate =useNavigate()
const handlestatus = () => {
  navigate("/status");
};
 
  return (
    <div> <div class="container bg-blue-600 h-[100vh] w-[100%]  flex justify-between flex-col">
      <Logoutnav/>
    <div className='p-4'>
    <div class=" rounded-lg bg-black shadow-sm shadow-white h-20 w-full flex justify-between items-center px-20 "  >
      <p class="text-white">id</p>
      <p class="text-white">Date</p>
      <p class="text-white">Phone</p>
      <p class="text-white">Status</p>

    </div>
    <div class=" bg-black rounded-lg shadow-lg shadow-white  h-20 w-full flex justify-between items-center px-20 mt-1 "  >
      <p class="text-white">01</p>
      <p class="text-white">15-12-2024</p>
      <p class="text-white">Blackbarry m2</p>
      <button onClick={handlestatus} class="border-[1.5px] text-white rounded-md p-1 w-30 flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-110  ">
        <span>In process</span>
        <svg class="w-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

    </div>
    </div>
    <Footer/>
  </div></div>
  )}

export default Mycomplaint
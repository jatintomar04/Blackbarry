import React from 'react';
import { useNavigate } from 'react-router-dom'
import Logoutnav from './Logoutnav';
import Footer from './Footer';


const Complaints = () => {
  const navigate =useNavigate();


const handlecomplain = () => {
  navigate("/mycomplaint");
};


const handlenewcomplaints = () => {
  navigate("/newcomplaints");
};




  return (
    
    <div class="bg-gradient-to-t from-slate-900 via-slate-400 to-neutral-900 h-screen flex flex-col items-center justify-between">
      <Logoutnav/>
    
  <div>  <div className="flex items-center justify-center flex-col h-[400px] w-[600px] p-6 rounded-lg shadow-lg shadow-white bg-black">
      
      {/* Button 1 */}
      <button onClick={handlecomplain} className="my-3 border-[1.5px] text-white rounded-xl p-2 w-[400px] flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-110">
        <span>My complaint</span>
        <svg
          className="w-3 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

      {/* Button 2 */}
      <button onClick={handlenewcomplaints} className="my-3 border-[1.5px] text-white rounded-xl p-2 w-[400px] flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-110">
        <span>Rise new complaints</span>
        <svg
          className="w-3 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

      </div> 
      </div>
      <Footer/>
     
      </div>


  );
};

export default Complaints;

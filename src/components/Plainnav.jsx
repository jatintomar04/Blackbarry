import React from 'react'
import logo from "../assets/logo.png"

const Plainnav = () => {
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
          </div>
        </>
  )
}

export default Plainnav
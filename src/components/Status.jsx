import React from 'react'
import phone from '../assets/1.webp'
import Footer from './Footer'
import Logoutnav from './Logoutnav'

const Status = () => {
  return (
   
    <div>
         <Logoutnav/>
         <div class="container bg-blue-600 h-[auto] w-[100%] p-4 px-20 flex justify-center flex-col">
              <div class=" rounded-lg bg-black shadow-sm shadow-white h-40 w-full flex justify-between items-center px-20 "  >
               <span>
                <p class="text-white">id-1</p>
                <h1 class="text-white my-3 text-2xl">Blackbarry m2</h1>
                <button class=" [1.5px] border-2 text-white rounded-md p-1 w-30 flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-110  ">
                  <span>resolve</span>
                  <svg class="w-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
               </span>
              
                <div class="h-28 w-28 bg-blue-600 rounded] bg-cover bg-center"   style={{ backgroundImage: `url(${phone})` }}></div>
              </div>

              <div class=" bg-black rounded-lg  w-full flex flex-col justify-between items-center p-5 mt-3 "  >
               

                <p class="text-white">comment</p>


                <div class=" bg-black border-2    mt-4 rounded-lg   w-1/2 flex justify-between items-center p-4  "  >
                  <span>
                    <p class="text-white text-xs">Date:(15-12-24) Time:03.15pm</p>
                    <h1 class="text-white my-3 text-lg">.Please repair my phone ASAP!</h1>
                    <p class="text-white text-xs">user</p>
                    
                   </span>
                </div>

                <div class=" bg-black border-2 mt-4 rounded-lg  w-1/2 flex justify-between items-center p-4 mt-3 "  >
                  <span>
                    <p class="text-white text-xs">Date:(15-12-24) Time:04.12pm</p>
                    <h1 class="text-white my-3 text-lg">.We are working on that</h1> <p class="text-white text-xs">staff</p>
                   </span>
                </div>

                <input class="bg-white border-2  border-black  h-10  w-full rounded  p-2 mt-3" placeholder ="Type something" type="text"/>

                

              </div>

              <button class="mt-4 border-2 bg-black text-white rounded-md p-2 w-30 flex items-center justify-center rounded-md transform transition-all duration-300 hover:scale-95  ">
                <span>Close complaint</span>
               
              </button>
              </div>
              <Footer/>
           
    </div>
  )
}

export default Status
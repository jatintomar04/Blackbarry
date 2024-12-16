import React from 'react';
import card1 from '../assets/1.webp'
import card2 from '../assets/2.jpg'
import card3 from '../assets/3.jpg'

const Cards = () => {
  return (
    <div className="p-6 flex items-center justify-center bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-t from-blue-900 via-purple-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-[320px]">
          <img className="rounded h-[180px] object-cover" src={card1} alt="BlackBerry Key2 LE" />
          <h2 className="text-lg my-2 font-semibold text-black">Your Trusted Mobile Service Provider</h2>
          <p className="text-sm text-center">"Your Trusted Mobile Service Provider" is dedicated to offering reliable and high-quality mobile services tailored to meet your communication needs. Whether you're looking for the latest smartphones, flexible data plans, or exceptional customer service, we provide solutions that cater to every individual and business.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-t from-blue-900 via-purple-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-[320px]">
          <img className="rounded h-[180px] object-cover" src={card2} alt="Mobile Plans" />
          <h2 className="text-lg my-2 font-semibold text-black">Unlimited Plans for Every Need</h2>
          <p className="text-sm text-center">"Unlimited Plans for Every Need" offers flexible and affordable mobile plans designed to suit a wide range of lifestyles and requirements. Whether you're a heavy data user, a frequent traveler, or simply need a reliable connection for everyday communication, our unlimited plans have you covered.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-t from-blue-900 via-purple-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-[320px]">
          <img className="rounded h-[180px] object-cover" src={card3} alt="Stay Connected" />
          <h2 className="text-lg my-2 font-semibold text-black">Stay Connected Anywhere, Anytime</h2>
          <p className="text-sm text-center">"Stay Connected Anywhere, Anytime" ensures that you’re never out of touch, no matter where life takes you. Our reliable mobile network offers uninterrupted service across cities, remote areas, and even international locations. Whether you're on the go, at home, or traveling abroad, we provide the tools you need to stay in touch.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
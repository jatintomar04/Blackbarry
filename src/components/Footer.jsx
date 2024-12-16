import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black p-3 w-[100%]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Branding */}
        <img className="h-6 w-auto" src={logo} alt="Blackberry Logo" />
    
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a className="text-[30px]" href="https://wa.me" aria-label="WhatsApp">
            <i className="ri-whatsapp-line"></i>
          </a>
          <a className="text-[30px]" href="https://instagram.com" aria-label="Instagram">
            <i className="ri-instagram-line"></i>
          </a>
          <a className="text-[30px]" href="https://facebook.com" aria-label="Facebook">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a className="text-[30px]" href="https://youtube.com" aria-label="YouTube">
            <i className="ri-youtube-fill"></i>
          </a>
          <a className="text-[30px]" href="https://linkedin.com" aria-label="LinkedIn">
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </div>         
      </div>
    </footer>
  );
}

export default Footer;

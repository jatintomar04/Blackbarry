import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Connect with Us</h2>
        
        <div className="lg:flex lg:space-x-16">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
      
          {/* Contact Info */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h3>
            <p className="text-gray-600 mb-2">Feel free to reach out via any of the following methods:</p>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 10l4-4m0 0l-4-4m4 4H6" />
                </svg>
                <span className="text-gray-700">Email: Blackbarry@example.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 10l4-4m0 0l-4-4m4 4H6" />
                </svg>
                <span className="text-gray-700">Phone: +1 (550) 123-727</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700">Address: E-skill web</span>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1618891185094!2d75.87861157385511!3d22.722223427472645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd459640dc01%3A0xbb667eabc0340784!2sE-Skills%20Web%20%7C%20Full%20Stack%20Development%20Mern%20Mean%20Python%20Web%20Design%20Training%20In%20Indore!5e0!3m2!1sen!2sin!4v1733827545304!5m2!1sen!2sin"
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 border-0 rounded-md" 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

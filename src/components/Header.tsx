import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = {
    "Hair Services": [
      "Classic Haircut",
      "Fade & Taper",
      "Beard Trim",
      "Mustache Styling",
      "Hair Wash & Style",
      "Hair Coloring"
    ],
    "Premium Services": [
      "Hot Towel Treatment",
      "Face Massage",
      "Eyebrow Shaping",
      "Hair Styling",
      "Consultation",
      "Express Service"
    ]
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo Only */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="The Freshmen Barbershop" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-black hover:text-gray-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
              About
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium flex items-center space-x-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Menu Dropdown */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white border border-gray-100 rounded-2xl shadow-2xl py-6 px-8 mt-3 backdrop-blur-sm"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-black mb-2 font-serif">Our Services</h2>
                    <div className="w-12 h-0.5 bg-black mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-black font-serif">Hair Services</h3>
                      </div>
                      <div className="space-y-2">
                        {services["Hair Services"].map((service, index) => (
                          <a 
                            key={index}
                            href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex items-center text-gray-600 hover:text-black transition-all duration-300 text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-black transition-colors duration-300"></div>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-black font-serif">Premium Services</h3>
                      </div>
                      <div className="space-y-2">
                        {services["Premium Services"].map((service, index) => (
                          <a 
                            key={index}
                            href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex items-center text-gray-600 hover:text-black transition-all duration-300 text-sm font-medium py-2 px-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-black transition-colors duration-300"></div>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <a 
                        href="#booking"
                        className="inline-flex items-center justify-center bg-black text-white text-center py-3 px-8 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book Your Appointment
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#gallery" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
              Gallery
            </a>
            <a href="#booking" className="text-gray-600 hover:text-black transition-colors duration-300 font-medium">
              Booking
            </a>
            <button className="border-2 border-black text-black font-semibold px-6 py-2 text-sm rounded-lg hover:bg-black hover:text-white transition-all duration-300">
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-black hover:text-gray-600 transition-colors duration-300 font-medium py-2">
                Home
              </a>
              <a href="#about" className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2">
                About
              </a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-4 space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-black text-sm flex items-center">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        Hair Services
                      </h4>
                      {services["Hair Services"].map((service, index) => (
                        <a 
                          key={index}
                          href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-gray-500 hover:text-black transition-colors duration-200 text-sm py-1 ml-8"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-black text-sm flex items-center">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        Premium Services
                      </h4>
                      {services["Premium Services"].map((service, index) => (
                        <a 
                          key={index}
                          href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-gray-500 hover:text-black transition-colors duration-200 text-sm py-1 ml-8"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#gallery" className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2">
                Gallery
              </a>
              <a href="#booking" className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2">
                Booking
              </a>
              <button className="border-2 border-black text-black font-semibold w-full py-3 mt-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

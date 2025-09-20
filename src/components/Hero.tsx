import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Content */}
      <div className="relative z-10 container-luxury w-full">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content (Mobile First, then 60% on desktop) */}
          <div className="text-center lg:text-left flex flex-col justify-center lg:col-span-6 order-1 lg:order-1">
            {/* Elegant Subtitle - Blue Accent */}
            <div className="mb-6 md:mb-8 lg:mb-10 fade-in-luxury">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-widest" style={{ color: '#123f9a' }}>
                THE FRESHMEN BARBERSHOP
              </p>
            </div>
            
            {/* Main Title - Blue and Red Accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black mb-4 md:mb-6 lg:mb-8 fade-in-luxury leading-tight font-display">
              <span style={{ color: '#123f9a' }}>Best Barbershop</span>
              <br />
              <span style={{ color: '#ff0000' }}>in Mississauga</span>
            </h1>
            
            {/* Elegant Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 fade-in-luxury leading-relaxed">
              Best barbers to give you the best men's haircuts from classic cuts to clean fades and sharp beards.
            </p>
            
            {/* CTA Buttons - Blue and Red Accent */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 fade-in-luxury justify-center lg:justify-start">
              <button 
                className="text-sm md:text-base px-6 md:px-8 py-2 md:py-3 border-2 font-semibold rounded-lg hover:scale-105 transform transition-all duration-500 ease-out w-full sm:w-auto"
                style={{ 
                  borderColor: '#123f9a', 
                  color: '#123f9a',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#123f9a';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#123f9a';
                }}
              >
                Book Your Appointment
              </button>
              <button 
                className="font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:scale-105 transform transition-all duration-500 ease-out text-sm md:text-base w-full sm:w-auto text-white"
                style={{ backgroundColor: '#ff0000' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#cc0000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ff0000';
                }}
              >
                View Our Services
              </button>
            </div>
          </div>
          
          {/* Right Column - Video (Mobile Second, then 40% on desktop) */}
          <div className="order-2 lg:order-2 lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-md mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury-xl">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/vid1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

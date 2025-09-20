import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-32 sm:pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#123f9a]/20 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-[#ff0000]/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#123f9a]/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-[#ff0000]/20 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
          {/* Left Column - Text Content (60%) */}
          <div className="text-left flex flex-col justify-center lg:col-span-6 order-1 lg:order-1">
            {/* Main Title */}
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-white mb-4 fade-in-luxury leading-tight">
              <span className="text-white">THE</span>
              <br />
              <span className="text-[#123f9a] freshmen-glow freshmen-glow-mobile">FRESHMEN</span>
              <br />
              <span className="text-white">BARBERSHOP</span>
            </h1>
            
            {/* Subtitle right under headline with underline */}
            <div className="mb-6 lg:mb-8 fade-in-luxury">
              <div className="relative inline-block">
                <p className="font-condensed text-base sm:text-xl md:text-2xl lg:text-3xl text-[#ff0000] tracking-widest uppercase font-medium whitespace-nowrap">
                  Best Barbershop in Mississauga
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#ff0000]"></div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8 lg:mb-10 fade-in-luxury">
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-white max-w-2xl leading-relaxed font-light">
                Best barbers to give you the best men's haircuts from classic cuts to clean fades and sharp beards.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start fade-in-luxury">
              <button className="btn-luxury-outline text-lg px-8 py-4 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto font-medium">
                Book Your Appointment
              </button>
              <button className="bg-[#ff0000] text-white font-semibold py-4 px-8 hover:bg-[#cc0000] transition-all duration-300 text-lg w-full sm:w-auto uppercase tracking-wide">
                View Our Services
              </button>
            </div>
          </div>
          
          {/* Right Column - Video (40%) */}
          <div className="order-2 lg:order-2 lg:col-span-4 mb-8 lg:mb-0">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              <div className="aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/10">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

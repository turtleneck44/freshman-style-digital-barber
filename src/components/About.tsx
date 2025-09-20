import React from "react";

const About = () => {
  // Use the actual images from the public folder
  const imgiImages = [
    "/imgi_28_91273985_890308014724053_9084689863751011578_n.jpg",
    "/imgi_29_91508539_1031237737259773_3158859722929790590_n.jpg",
    "/imgi_30_91112175_793531424468514_7739180485424798523_n.jpg",
    "/imgi_31_90088672_115060690114029_2775280927924311927_n.jpg",
    "/imgi_32_89041857_141581543761454_7948278722813866830_n.jpg",
    "/imgi_33_84176926_126404842139727_6389121118071636171_n.jpg",
    "/imgi_34_87290756_243427273341896_1749125842832917965_n.jpg",
    "/imgi_35_85011411_493529434641689_6264903484247845515_n.jpg",
    "/imgi_36_84691260_158181368973567_3198901910180450919_n.jpg"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif">
                Crafting Excellence
                <br />
                <span className="text-gray-600">Since Day One</span>
              </h2>
              <div className="w-16 h-1 bg-black mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At The Freshmen Barbershop, we believe that every haircut is an art form. 
              Our master barbers bring decades of experience and passion to every cut, 
              ensuring that each client leaves looking and feeling their absolute best.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From classic cuts to modern fades, we specialize in precision and style. 
              Our commitment to excellence has made us Mississauga's premier destination 
              for men's grooming and barbering services.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">5000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {imgiImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <img 
                    src={image}
                    alt={`Barbershop work ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

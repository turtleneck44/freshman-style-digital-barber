import React from "react";

const Gallery = () => {
  const galleryImages = [
    "/imgi_16_91273985_890308014724053_9084689863751011578_n.jpg",
    "/imgi_17_91508539_1031237737259773_3158859722929790590_n.jpg", 
    "/imgi_19_90088672_115060690114029_2775280927924311927_n.jpg",
    "/imgi_20_81025569_200651197776916_358128557657755946_n.jpg",
    "/imgi_21_84176926_126404842139727_6389121118071636171_n.jpg",
    "/imgi_22_71169799_678335836008415_5061821967977212452_n.jpg"
  ];

  return (
    <section id="gallery" className="section-luxury bg-luxury-white">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <div className="divider-luxury mb-6"></div>
          <h2 className="text-heading text-5xl md:text-6xl font-bold text-luxury-black mb-6">
            Our Work
          </h2>
          <p className="text-elegant text-xl text-luxury-gray-600 max-w-3xl mx-auto">
            Witness the artistry and precision that defines The Freshmen Barbershop. 
            Each cut tells a story of excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-luxury-xl transition-all duration-700">
              <div className="aspect-square">
                <img 
                  src={image}
                  alt={`The Freshmen Barbershop work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/20 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <span className="text-luxury-black text-display text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-luxury-outline">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

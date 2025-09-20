import React from "react";

const ClientFavorites = () => {
  const services = [
    { name: "Signature Skin Fade", price: "$65", description: "Our most requested cut" },
    { name: "Beard Sculpting", price: "$45", description: "Complete beard transformation" },
    { name: "Royal Shave", price: "$55", description: "Hot towel luxury experience" },
    { name: "Classic Taper", price: "$40", description: "Timeless professional look" },
    { name: "Precision Line-Up", price: "$30", description: "Sharp, clean definition" },
    { name: "Executive Cut", price: "$70", description: "Premium styling package" }
  ];

  return (
    <section className="section-luxury bg-luxury-gray-50">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <div className="divider-luxury mb-6"></div>
          <h2 className="text-heading text-5xl md:text-6xl font-bold text-luxury-black mb-6">
            Client Favorites
          </h2>
          <p className="text-elegant text-xl text-luxury-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular services, each crafted to perfection 
            by our master barbers.
          </p>
          <button className="text-caps text-luxury-gold hover:text-luxury-gold-dark transition-colors duration-300 font-semibold">
            View All Services →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-luxury text-center group hover:shadow-luxury-xl transition-all duration-700">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-luxury-black text-display text-2xl font-bold">
                    {service.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-heading text-xl font-semibold text-luxury-black mb-2">
                    {service.name}
                  </h3>
                  <p className="text-body text-luxury-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-luxury-gold mb-6">
                    {service.price}
                  </div>
                </div>
                <button className="btn-luxury w-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFavorites;

import React from "react";

const Services = () => {
  const services = [
    {
      title: "Classic Haircuts",
      image: "/imgi_11_252384074_574994277063870_2485778152758426250_n.jpg",
      description: "Timeless cuts tailored to your face shape and lifestyle",
      price: "From $45"
    },
    {
      title: "Beard Styling", 
      image: "/imgi_12_252771713_282199597133679_5086509177736838354_n.jpg",
      description: "Expert beard trimming, shaping, and maintenance",
      price: "From $35"
    },
    {
      title: "Precision Line-Ups",
      image: "/imgi_13_251654760_490119868696860_1679475347648029215_n.jpg", 
      description: "Sharp, clean lines that define your look",
      price: "From $25"
    },
    {
      title: "Hot Towel Shaves",
      image: "/imgi_14_126219099_371117753965106_3177830084668400583_n.jpg",
      description: "Traditional wet shave with premium products",
      price: "From $40"
    }
  ];

  return (
    <section id="services" className="section-luxury bg-luxury-white">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <div className="divider-luxury mb-6"></div>
          <h2 className="text-heading text-5xl md:text-6xl font-bold text-luxury-black mb-6">
            Our Services
          </h2>
          <p className="text-elegant text-xl text-luxury-gray-600 max-w-3xl mx-auto">
            Each service is delivered with the precision and care that defines 
            The Freshmen Barbershop experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="card-luxury group hover:shadow-luxury-xl transition-all duration-700">
              <div className="aspect-[4/3] mb-8 overflow-hidden rounded-xl">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-heading text-2xl font-semibold text-luxury-black">
                    {service.title}
                  </h3>
                  <span className="text-luxury-gold font-semibold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-body text-luxury-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="btn-luxury-outline w-full">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

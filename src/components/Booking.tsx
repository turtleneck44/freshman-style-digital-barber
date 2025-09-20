import React from "react";

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-section text-primary-black mb-8">
          Ready for Your Next Cut?
        </h2>
        <p className="text-subtitle text-primary-gray-dark mb-12 max-w-2xl mx-auto">
          Book your appointment today and experience the Freshman difference. 
          Our master barbers are ready to give you the perfect look.
        </p>
        <a href="#booking" className="btn-primary text-lg px-12 py-5">
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Booking;

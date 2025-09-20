import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Alexander Thompson",
      role: "Business Executive",
      image: "/imgi_51_26382726_185485262199579_3818160582511558656_n.jpg",
      rating: 5,
      text: "Freshman Barbershop has completely transformed my grooming routine. The attention to detail and luxury experience is unmatched. I've never felt more confident."
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      image: "/imgi_52_25009746_865670480302878_9030998089434923008_n.jpg",
      rating: 5,
      text: "The master barbers here are true artists. Every cut is perfect, and the atmosphere makes you feel like royalty. This is grooming elevated to an art form."
    },
    {
      name: "David Chen",
      role: "Investment Banker",
      image: "/imgi_57_25006922_217676738773543_8674217569927823360_n.jpg",
      rating: 5,
      text: "From the moment you walk in, you know you're in for something special. The service, the quality, the entire experience is absolutely exceptional."
    },
    {
      name: "James Wilson",
      role: "Tech Entrepreneur",
      image: "/imgi_58_24845215_1854354804677738_843310721126105088_n.jpg",
      rating: 5,
      text: "I've been to many barbershops, but none compare to Freshman. The luxury touches and attention to detail make every visit a memorable experience."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-luxury-black mb-6">
            What Our Clients
            <span className="block text-luxury-gold">Say About Us</span>
          </h2>
          <div className="divider-gold w-24 h-1 mx-auto mb-8"></div>
          <p className="text-xl text-luxury-charcoal font-elegant max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the gentlemen who have 
            experienced the Freshman difference.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="card-luxury p-12 text-center">
              <div className="w-20 h-20 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-10 h-10 text-luxury-gold" />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-luxury-gold fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl font-elegant text-luxury-charcoal mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold/20"
                />
                <div className="text-left">
                  <h4 className="text-xl font-display font-semibold text-luxury-black">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-luxury-charcoal font-elegant">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 border border-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-luxury-gold" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-luxury-gold/20 hover:bg-luxury-gold/30 border border-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-luxury-gold" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial 
                    ? "bg-luxury-gold" 
                    : "bg-luxury-gold/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-luxury-gold mb-2">500+</div>
            <p className="text-luxury-charcoal font-elegant">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-luxury-gold mb-2">4.9</div>
            <p className="text-luxury-charcoal font-elegant">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-luxury-gold mb-2">98%</div>
            <p className="text-luxury-charcoal font-elegant">Client Retention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

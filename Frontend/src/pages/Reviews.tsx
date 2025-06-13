// import React, { useEffect } from "react";

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "SAMARTH ANKUSH",
    location: "Mumbai",
    rating: 5,
    quote:
      "Bought a leather wallet, shoes, and belt from Pistu top notch quality, stylish, and durable! Totally worth it",
  },
  {
    name: "SIDDHI SHIRSATH",
    location: "Delhi",
    rating: 5,
    quote:
      "Got a leather wallet from Pistu for my dad’s birthday , he loved it! The quality and craftsmanship were amazing. His smile said it all! ❤✨",
  },
  {
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 4,
    quote:
      "I've owned many leather goods, but PISTU stands apart. The quality is undeniable, and the designs are timeless.",
  },
];

const CustomerStories: React.FC = () => {
  return (

    <div className="bg-transparent py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#3A2E25]" style ={{fontFamily : "font5"}}>Customer Stories</h2>
      <p className="text-lg mt-4 text-[#3A2E25]" style ={{fontFamily : "font6"}}>
        Hear from those who have made PISTU a part of their journey.
      </p>
      <div className="w-20 h-0.5 bg-[#A37853] mx-auto mt-6 mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-tl-4xl rounded-br-4xl shadow-2xl p-6 text-left mt-2 mb-7 "
          >
            <div className="flex mb-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="text-[#A37853] text-lg">★</span>
              ))}
              {testimonial.rating < 5 && (
                <span className="text-gray-300 text-lg">★</span>
              )}
            </div>
            <p className="italic text-[#3A2E25] mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="text-md text-[#3A2E25] " style ={{fontFamily : "font6"}}>{testimonial.name}</p>
              <p className="text-sm text-[#3A2E25] opacity-70" style ={{fontFamily : "font6"}}>{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;

import React from "react";

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    quote:
      "The craftsmanship is exceptional. My Oxford shoes from PISTU have not only withstood daily wear but have developed a beautiful patina over time.",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    quote:
      "The attention to detail is remarkable. Every stitch, every edge — perfection. The wallet I purchased is both beautiful and practical.",
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
    <div className="bg-[#d7b788] py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-serif text-[#3A2E25]" style ={{fontFamily : "font5"}}>Customer Stories</h2>
      <p className="text-lg mt-4 text-[#3A2E25]" style ={{fontFamily : "font6"}}>
        Hear from those who have made PISTU a part of their journey.
      </p>
      <div className="w-20 h-0.5 bg-[#A37853] mx-auto mt-6 mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-xl p-6 text-left "
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

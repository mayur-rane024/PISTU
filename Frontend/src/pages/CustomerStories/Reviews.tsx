import React from "react";
import testimonials from "./Customer_Stories.json"; // Adjust the path if needed

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

const CustomerStories: React.FC = () => {
  return (
    <div className="bg-transparent py-16 px-6 md:px-20 text-center">
      <h2
        className="text-4xl md:text-5xl font-serif text-[#3A2E25]"
        style={{ fontFamily: "font5" }}
      >
        Customer Stories
      </h2>
      <p
        className="text-lg mt-4 text-[#3A2E25]"
        style={{ fontFamily: "font6" }}
      >
        Hear from those who have made PISTU a part of their journey.
      </p>
      <div className="w-20 h-0.5 bg-[#A37853] mx-auto mt-6 mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={index}
            className="bg-white rounded-tl-4xl rounded-br-4xl shadow-2xl p-6 text-left mt-2 mb-7 flex flex-col justify-between h-full"
          >
            {/* Top Section: Rating and Quote */}
            <div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-[#A37853] text-lg">★</span>
                ))}
                {testimonial.rating < 5 &&
                  Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                    <span key={i} className="text-gray-300 text-lg">★</span>
                  ))}
              </div>
              <p className="italic text-[#3A2E25] mb-2">"{testimonial.quote}"</p>
            </div>

            {/* Bottom Section: Name and Location aligned to bottom */}
            <div className="mt-auto">
              <p
                className="text-md text-[#3A2E25]"
                style={{ fontFamily: "font6" }}
              >
                {testimonial.name}
              </p>
              <p
                className="text-sm text-[#3A2E25] opacity-70"
                style={{ fontFamily: "font6" }}
              >
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;

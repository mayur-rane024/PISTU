import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "./../../public/feature/About1.jpg";
import img2 from "./../../public/feature/About2.jpg";
import img3 from "./../../public/feature/About3.jpg";
import img4 from "./../../public/feature/About4.jpg";


const images = [img1, img2, img3, img4];

function About() {
  const [startIndex, setStartIndex] = useState(0);

  const rotateLeft = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const rotateRight = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const getVisibleImages = () => {
    return [
      images[(startIndex - 1 + images.length) % images.length],
      images[startIndex % images.length],
      images[(startIndex + 1) % images.length],
      images[(startIndex + 2) % images.length],
    ];
  };

  const visibleImages = getVisibleImages();

  return (
    <section
      id="about"
      className="min-h-screen w-full grid grid-rows-1 md:grid-rows-2 gap-8 items-center px-6 md:px-16 py-12 bg-white"
    >
      {/* Image Carousel */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={rotateLeft}>
          <ChevronLeft size={32} />
        </button>

        <div className="relative overflow-hidden w-[600px] h-[200px]">
          <div
            key={startIndex} // force transition on state change
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: "translateX(-25%)", // center the second image
              width: "160%", // more space for off-screen images
            }}
          >
            {visibleImages.map((img, idx) => {
              const isBlurred = idx === 0 || idx === 3;
              return (
                <img
                  key={idx}
                  src={img}
                  alt={`carousel-${idx}`}
                  className={`w-auto h-[300px] object-cover rounded-xl transition-all duration-300 ${
                    isBlurred ? "blur-sm opacity-50 scale-90" : "scale-100"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <button onClick={rotateRight}>
          <ChevronRight size={32} />
        </button>
      </div>

      {/* About Text */}
      <div className="text-center md:text-left space-y-6">
        <h2
          className="text-4xl text-gray-800"
          style={{ fontFamily: "font5" }}
        >
          About PISTU
        </h2>
        <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }}>
          PISTU - Pigment Art and Design Studio - was born from a passion for
          leather craftsmanship and a desire to create products that stand the
          test of time. Our journey began in a small workshop in Delhi, where
          our founder first fell in love with the art of leatherworking.
        </p>
        <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }}>
          Today, our mission remains unchanged: To create timeless, handcrafted
          leather products that combine art, craftsmanship, and luxury,
          elevating everyday essentials into extraordinary pieces.
        </p>
        <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }}>
          Each PISTU creation is a testament to the skill of our artisans, the
          quality of our materials, and our unwavering commitment to excellence.
        </p>
        <button className="mt-4 px-6 py-3 bg-transparent text-[#3A2A1B] border-[#3A2A1B] rounded-3xl border-1 hover:bg-[#d7b788] transition shadow-md">
          Our Story
        </button>
      </div>
    </section>
  );
}

export default About;

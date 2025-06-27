// src/pages/Home.tsx

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { desktopImages, mobileImages } from "./carouselImages";
import { useAutoSlider } from "../../Hooks/useAutoSlider"; // optional

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useAutoSlider(desktopImages.length, setCurrentIndex, 3000);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? desktopImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="home" className="relative">
      <div className="relative w-full h-[89vh] overflow-hidden mt-20">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {desktopImages.map((img, i) => (
            <img
              key={`desktop-${i}`}
              src={img}
              alt={`Slide ${i}`}
              className="hidden md:block w-full h-full flex-shrink-0 object-cover"
            />
          ))}
          {mobileImages.map((img, i) => (
            <img
              key={`mobile-${i}`}
              src={img}
              alt={`Mobile Slide ${i}`}
              className="block md:hidden w-full h-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CTA Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-end mb-14 text-center px-4">
          <button className="rounded-4xl bg-white/10 backdrop-blur-md text-[#d7b788] px-6 py-3 font-medium shadow-lg hover:bg-[#d7b788] hover:text-[#000] transition">
            Explore Collection
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl p-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#d7b788] shadow-md hover:bg-[#d7b788] hover:text-[#000] transition"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl p-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#d7b788] shadow-md hover:bg-[#d7b788] hover:text-[#000] transition"
        >
          <FiChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-[#d7b788] scale-125" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

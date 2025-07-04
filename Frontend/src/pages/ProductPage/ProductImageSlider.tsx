import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="">
      {/* Mobile Slider */}
      <div className="md:hidden relative">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-[60vh] object-cover rounded-2xl"
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl p-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#d7b788] shadow-md hover:bg-[#d7b788] hover:text-[#000] transition"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl p-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#d7b788] shadow-md hover:bg-[#d7b788] hover:text-[#000] transition"
        >
          <FiChevronRight />
        </button>
        {/* Dots for mobile slider */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-1 h-1 rounded-full ${
                currentImage === index ? 'bg-[#d7b788]' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-start">
        {/* Thumbnail column */}
        <div className="flex flex-col  space-y-4 mr-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 rounded-xl cursor-pointer ${
                currentImage === index ? 'border-2 p-1 border-[#3A2E25]' : ''
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        {/* Main image and navigation buttons */}
        <div className="relative bg-white ">
          <img
            src={images[currentImage]}
            alt="Product"
            className="w-[45vw] h-[85vh] p-5 rounded-l-xl"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl p-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#d7b788] shadow-md hover:bg-[#d7b788] hover:text-[#000] transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl p-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#d7b788] shadow-md hover:bg-[#d7b788] hover:text-[#000] transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlider;
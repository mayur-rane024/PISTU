import React, { useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [magnifier, setMagnifier] = useState({
    visible: false,
    x: 0,
    y: 0,
    imageX: 0,
    imageY: 0,
  });
  const imageRef = useRef<HTMLImageElement>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only show magnifier if within image bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMagnifier({
          visible: true,
          x: e.clientX, // Use exact cursor position
          y: e.clientY, // Use exact cursor position
          imageX: (x / rect.width) * 100,
          imageY: (y / rect.height) * 100,
        });
      } else {
        setMagnifier((prev) => ({ ...prev, visible: false }));
      }
    }
  };

  const handleMouseLeave = () => {
    setMagnifier((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="w-full md:w-1/2">
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
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? 'bg-[#d7b788]' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-start">
        {/* Thumbnail column */}
        <div className="flex flex-col space-y-4 mr-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-20 rounded-xl cursor-pointer ${
                currentImage === index ? 'border-2 border-[#3A2E25]' : ''
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        {/* Main image and navigation buttons */}
        <div className="relative">
          <div className="relative">
            <img
              ref={imageRef}
              src={images[currentImage]}
              alt="Product"
              className="w-[40vw] h-[80vh] object-contain rounded-l-4xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
            {magnifier.visible && (
              <div
                className="absolute w-32 h-32 rounded-full border-2 border-[#d7b788] pointer-events-none overflow-hidden"
                style={{
                  left: magnifier.x - 64, // Center magnifier on cursor
                  top: magnifier.y - 64,  // Center magnifier on cursor
                  backgroundImage: `url(${images[currentImage]})`,
                  backgroundSize: `${imageRef.current?.width! * 2}px ${imageRef.current?.height! * 2}px`,
                  backgroundPosition: `${magnifier.imageX}% ${magnifier.imageY}%`,
                }}
              />
            )}
          </div>
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
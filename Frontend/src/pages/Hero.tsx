import { useState, useEffect, type SetStateAction } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Desktop images
import img1 from "./../assets/Home1.jpg";
import img2 from "./../assets/Home2.jpg";
import img3 from "./../assets/Home3.jpg";

// Mobile images
import mImg1 from "./../assets/Home1-mobile.jpg";
import mImg2 from "./../assets/Home2-mobile.jpg";
import mImg3 from "./../assets/Home3-mobile.jpg";

const desktopImages = [img1, img2, img3];
const mobileImages = [mImg1, mImg2, mImg3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? desktopImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
  };

  const goToImage = (i: SetStateAction<number>) => {
    setCurrentIndex(i);
  };

  return (
    <section id="home" className="relative">
      <div className="relative w-full h-[89vh] mt-20">
        {/* Desktop Image */}
        <img
          src={desktopImages[currentIndex]}
          alt="Desktop Wallpaper"
          className="hidden md:block w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        />

        {/* Mobile Image */}
        <img
          src={mobileImages[currentIndex]}
          alt="Mobile Wallpaper"
          className="block md:hidden w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-120 px-4">
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

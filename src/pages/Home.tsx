import { useState, useEffect } from "react";
import img1 from "./../assets/Home1.jpg";
import img2 from "./../assets/Home2.jpg";
import img3 from "./../assets/Home3.jpg";

const images = [img1, img2, img3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home ">
      <div className="relative w-full h-[89vh] mt-20">
        {/* Background Image (sliding) */}
        <img
          src={images[currentIndex]}
          alt="Wallpaper"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: 1 }}
        />

        {/* Dark Transparent Overlay */}
        <div className="absolute inset-0 bg-black/40 " />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-30 px-4">
          {/* <h1
            className="text-white text-5xl md:text-[60px] mb-4 m-40"
            style={{ fontFamily: "font5", opacity: 0.65 }}
          >
            Leather <span className="px-1">|</span> Craft{" "}
            <span className="px-2">|</span> Accessories
          </h1>
          <p
            className="text-white text-lg md:text-xl mb-6"
            style={{ fontFamily: "font6", opacity: 0.5 }}
          >
            A symphony of craft and luxury
          </p> */}
          <button className="rounded-4xl bg-white/10 backdrop-blur-md text-[#d7b788] px-6 py-3 font-medium shadow-md hover:bg-[#d7b788] hover:text-[#000] transition">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

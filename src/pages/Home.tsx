import img from "./../assets/Home1.jpg";
import { ArrowDown } from "lucide-react";

const Home = () => {
    return(
        <section id="home">
        <div className="relative w-full h-screen">
          {/* Background Image */}
          <img
            src={img}
            alt="Wallpaper"
            className="w-full h-full object-cover "
          />

          {/* Dark Transparent Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-52 px-4">
            <h1
              className="text-white text-5xl md:text-[60px] mb-4 m-40"
              style={{ fontFamily: "font5" ,opacity: 0.6 }}
            >
              Leather <span className="px-1">|</span> Craft{" "}
              <span className="px-2">|</span> Accessories
            </h1>
            <p className="text-white text-lg md:text-xl mb-6 " style={{ fontFamily: "font6" ,opacity: 0.5  }}>
              A symphony of craft and luxury
            </p>
            <button className="rounded-4xl bg-white/10 backdrop-blur-md text-[#d7b788] px-6 py-3 font-medium shadow-md hover:bg-[#d7b788] hover:text-[#000] transition">
              Explore Collection
            </button>
          </div>
          {/* <a href="#products"><ArrowDown  className=" absolute left-1/2 top-6/7 text-white animate-bounce" /></a> */}
        </div>
      </section>
    )
}

export default Home;
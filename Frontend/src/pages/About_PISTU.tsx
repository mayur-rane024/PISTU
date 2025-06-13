import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const About_Pistu = () => {
  return (
    <div className="mt-10 min-h-screen flex items-center justify-center bg-[#fdf2e3] px-80 py-10 w-full bg-transparent p-8 text-gray-800 flex-col rounded-lg text-center">
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute mt-55 left-0 top-0 w-1/5 h-auto opacity-60"
      />
      <img
        alt="mandala right"
        src="./mandala-right.png"
        className="absolute mt-55 right-0 top-0 w-1/5 h-auto opacity-60"
      />

      <Navbar />

      <h1
        className="text-3xl text-[#342b24] font-bold mb-6 mt-4"
        style={{ fontFamily: "font5" }}
      >
        About Us
      </h1>

      <p className="mb-4 text-[#5e4c3f] text-lg" style={{ fontFamily: "font6" }}>
        Welcome to the epitome of luxury and craftsmanship in the world of leather.
      </p>

      <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-6 mt-3"></div>

      <div className="px-20 text-[#5e4c3f] text-sm" style={{ fontFamily: "font6" }}>
        <p className="mb-4">
          At <strong>PISTU</strong>, we are more than just a brand. We are a high-quality leather company committed to excellence, dedicated to the artistry of leather crafting, and passionate about providing you with products made from the finest materials nature has to offer.
        </p>
        <p className="mb-4">
          Every PISTU creation is a testament to timeless style, durability, and unmatched attention to detail — all handcrafted with heart and heritage.
        </p>
        <p className="mb-4">
          Our legacy is built on sustainability, elegance, and the desire to connect you with artisanal stories through every product we deliver.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About_Pistu;

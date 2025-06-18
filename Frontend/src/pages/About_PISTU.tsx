import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const About_Pistu = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#fdf2e3] px-4 sm:px-8 md:px-20 lg:px-80 py-10 w-full text-gray-800 flex-col rounded-lg text-center">
        <img
          alt="mandala left"
          src="./mandala-left.png"
          className="absolute left-0 top-0 w-1/12 sm:w-1/6 h-auto opacity-60 hidden sm:block"
        />
        <img
          alt="mandala right"
          src="./mandala-right.png"
          className="absolute right-0 top-0 w-1/12 sm:w-1/6 h-auto opacity-60 hidden sm:block"
        />

        <h1
          className="text-2xl sm:text-3xl text-[#342b24] font-bold mb-6 mt-4"
          style={{ fontFamily: "font5" }}
        >
          About Us
        </h1>

        <p
          className="mb-4 text-[#5e4c3f] text-base sm:text-lg max-w-2xl"
          style={{ fontFamily: "font6" }}
        >
          Welcome to the epitome of luxury and craftsmanship in the world of
          leather.
        </p>

        <div className="w-32 sm:w-40 h-0.5 bg-[#A37853] mx-auto mb-6 mt-3"></div>

        <div
          className="px-4 sm:px-10 md:px-20 text-[#5e4c3f] text-xs sm:text-sm max-w-3xl"
          style={{ fontFamily: "font6" }}
        >
          <p className="mb-4">
            At <strong>PISTU</strong>, we are more than just a brand. We are a
            high-quality leather company committed to excellence, dedicated to
            the artistry of leather crafting, and passionate about providing you
            with products made from the finest materials nature has to offer.
          </p>
          <p className="mb-4">
            Every PISTU creation is a testament to timeless style, durability,
            and unmatched attention to detail — all handcrafted with heart and
            heritage.
          </p>
          <p className="mb-4">
            Our legacy is built on sustainability, elegance, and the desire to
            connect you with artisanal stories through every product we deliver.
          </p>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-transparent px-4 sm:px-8 md:px-20 lg:px-80 py-10 w-full text-gray-800 flex-col rounded-lg text-center relative">
        <h1
          className="text-2xl sm:text-3xl font-bold mb-6 mt-4"
          style={{ fontFamily: "font5" }}
        >
          Vision & Mission
        </h1>

        <div className="w-32 sm:w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

        <div className="px-4 sm:px-10 md:px-25 max-w-3xl">
          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2"
            style={{ fontFamily: "font5" }}
          >
            Vision
          </h2>
          <div
            className="text-xs sm:text-sm"
            style={{ fontFamily: "font6" }}
          >
            <p className="mb-2">
              Our vision is to craft unique, handmade leather goods that tells a
              story of care and passion in every stitch, ensuring lasting
              quality and individuality.
            </p>
          </div>

          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2"
            style={{ fontFamily: "font5" }}
          >
            Mission
          </h2>
          <div
            className="text-xs sm:text-sm"
            style={{ fontFamily: "font6" }}
          >
            <p className="mb-2">
              Our mission is to celebrate the heritage of skilled artisans,
              ensuring the legacy of traditional craftsmanship while providing
              tasteful individuals with unique, high quality leather goods that
              reflect authenticity, style and a commitment to ethical
              production.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About_Pistu;
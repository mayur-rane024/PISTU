import { Carousel } from "./../components/ui/carousel.tsx";
import img1 from "./../feature/About1.jpg";
import img2 from "./../feature/About2.jpg";
import img3 from "./../feature/About3.jpg";
import img4 from "./../feature/About4.jpg";

const slideData = [
  {
    title: "Heritage Craftsmanship",
    button: "Explore Collection",
    src: img1,
  },
  {
    title: "Modern Aesthetics",
    button: "Discover Style",
    src: img2,
  },
  {
    title: "Timeless Leather",
    button: "Shop Now",
    src: img3,
  },
  {
    title: "Bespoke Luxury",
    button: "Learn More",
    src: img4,
  },
];

function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full grid grid-rows-1 md:grid-rows-2 gap-8 items-center px-6 md:px-16 py-12 bg-[#fff9f1]"
    >
      {/* Carousel Section */}
      <div className="w-full flex justify-center ">
        <Carousel slides={slideData} />
      </div>

      {/* About Text Section */}
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-4xl text-gray-800" style={{ fontFamily: "font5" }}>
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
        {/* more text... */}
        <button className="mt-4 px-6 py-3 bg-transparent text-[#3A2A1B] border-[#3A2A1B] rounded-4xl border-1 hover:bg-[#d7b788] transition shadow-md">
          Our Story
        </button>
      </div>
    </section>
  );
}

export default About;

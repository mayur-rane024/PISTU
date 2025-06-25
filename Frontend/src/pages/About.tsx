import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="h-[80vh] w-full flex items-center justify-center px-9 sm:px-4 md:px-16 py-12 bg-transparent"
    >
      
      <div className="text-center space-y-6 max-w-3xl">
        <h2 className="text-4xl text-[#342b24]" style={{ fontFamily: "font5" }}>
          About PISTU
        </h2>
        <p className="text-[#654f2f] text-md" style={{ fontFamily: "font6" }}>
          PISTU - Pigment Art and Design Studio - was born from a passion for
          leather craftsmanship and a desire to create products that stand the
          test of time. Our journey began in a small workshop in Delhi, where
          our founder first fell in love with the art of leatherworking.
        </p>
        <p className="text-[#654f2f] text-md" style={{ fontFamily: "font6" }}>
          Today, our mission remains unchanged: To create timeless, handcrafted
          leather products that combine art, craftsmanship, and luxury,
          elevating everyday essentials into extraordinary pieces.
        </p>
        <p className="text-[#654f2f] text-md" style={{ fontFamily: "font6" }}>
          Each PISTU creation is a testament to the skill of our artisans, the
          quality of our materials, and our unwavering commitment to excellence.
        </p>

        <Link to="/about-pistu" className="inline-block">
          <button className="mt-4 px-6 py-3 bg-transparent text-[#3A2A1B] border-[#3A2A1B] rounded-4xl border hover:bg-[#d7b788] transition shadow-md">
            Our Story
          </button>
        </Link>
      </div>
    </section>
  );
}

export default About;

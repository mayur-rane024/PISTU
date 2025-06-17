import { Carousel } from "../../components/ui/carousel.tsx";
import img1 from "../../feature/About1.jpg";
import img2 from "../../feature/About2.jpg";
import img3 from "../../feature/About3.jpg";
import img4 from "../../feature/About4.jpg";

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

function BestSeller() {
  return (
    <>
      {/* Carousel Section */}
      <div className="text-center text-4xl md:text-5xl">
        {" "}
        <h2 className="text-4xl text-[#342b24] mt-15" style={{ fontFamily: "font5" }}>
          Best Sellors
        </h2>
              <div className="w-20 h-0.5 bg-[#A37853] mx-auto mt-6 mb-10"></div>

      </div>
      <div className="w-full flex justify-center mt-10 mb-30">
        <Carousel slides={slideData} />
      </div>
    </>
  );
}

export default BestSeller;

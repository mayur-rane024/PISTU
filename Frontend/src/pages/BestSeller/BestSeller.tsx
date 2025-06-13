import { Carousel } from "../../components/ui/carousel.tsx";
import img1 from "../../feature/About1.jpg"
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

function BestSeller()  {
    return (<>{/* Carousel Section */}
      <div className="w-full flex justify-center mt-10 mb-16">
        <Carousel slides={slideData} />
      </div></>
         

    );
}
 
export default BestSeller;




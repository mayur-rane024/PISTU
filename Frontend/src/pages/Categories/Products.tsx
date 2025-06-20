import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import slugify from "slugify";
import img1 from "../../feature/About5.jpg";
import gloves from "../../feature/gloves-2.jpg";

// Placeholder product data for the selected category
const products = [
  { name: "Belt", price: "$27.90", image: img1, hoverImage: gloves },
  {
    name: "Rustic gathered top BEIGE",
    price: "$27.90 - $35.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Hover+Beige+Top",
  },
  {
    name: "Rustic gathered top ECRU",
    price: "$27.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Hover+Ecru+Top",
  },
  {
    name: "Striped short sleeve T-shirt BROWN",
    price: "$17.90 - $45.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Hover+Brown+T-Shirt",
  },
  {
    name: "Striped short sleeve T-shirt PALE BLUE",
    price: "$17.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Hover+Pale+Blue+T-Shirt",
  },
  {
    name: "T-shirt with cowboy and heart graphic FADED BLUE",
    price: "$35.90 - $47.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Hover+Faded+Blue+T-Shirt",
  },
];

// Categories for the buttons
const categories = [
  { name: "All Category", path: "/category" },
  { name: "Belts", path: "/category/belts" },
  { name: "Bags", path: "/category/bags" },
  { name: "Purse", path: "/category/purse" },
  { name: "Gloves", path: "/category/gloves" },
  { name: "Jeans", path: "/category/jeans" },
  { name: "Dresses", path: "/category/dresses" },
  { name: "Vests", path: "/category/vests" },
  { name: "Shorts", path: "/category/shorts" },
];

const CategoryProducts = () => {
  const { categoryName } = useParams();

  // Fallback categoryName if undefined (for /products route)
  const currentCategory = categoryName ?? "all";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow p-8 px-8">
        <div className="flex overflow-x-auto space-x-4 pt-20 pb-8">
          {categories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {products.map((product, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <Link
                to={`/category/${currentCategory}/${slugify(product.name, { lower: true })}`}
                key={index}
                className=""
              >
                <div
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-800 relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={isHovered ? product.hoverImage : product.image}
                    alt={product.name}
                    className="w-full h-[320px] object-cover transition-opacity duration-800"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                </div>
                <div className="mt-3">
                  <h2
                    className="text-md text-[#3A2E25] text-justify"
                    style={{ fontFamily: "font5" }}
                  >
                    {product.name}
                  </h2>
                  <p
                    className="text-sm text-black mt-1.5 text-justify"
                    style={{ fontFamily: "font6" }}
                  >
                    {product.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryProducts;

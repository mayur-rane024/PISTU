import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import img1 from "../../feature/About5.jpg";

const categories = [
  { name: "Belt", image: img1 },
  { name: "Purse", image: img1 },
  { name: "Wallet", image: img1 },
  { name: "Bag", image: img1 },
  { name: "Hat", image: img1 },
  { name: "Scarf", image: img1 },
];

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF2E3] mt-20">
      <Navbar />
      <main className="flex-grow p-8 px-28 py-10">
        <h1 className="text-4xl font-semibold text-[#4d3716] text-center mb-8">
          Our Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link to={`/products/${category.name.toLowerCase()}`}>
            <div
              key={index}
              className="bg-white rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative cursor-pointer"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[285px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/50 rounded-lg"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0  py-2">
                <h2
                  className="text-3xl font-bold text-[#3A2E25] text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {category.name}
                </h2>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
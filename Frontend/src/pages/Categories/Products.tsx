import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import slugify from "slugify";
import Navbar from "../Navbar";
import Footer from "../Footer";
import img1 from "../../feature/About5.jpg";
import gloves from "../../feature/gloves-2.jpg";
import home1 from "../../assets/Home1.jpg";
import home2 from "../../assets/Home2.jpg";
import home3 from "../../assets/Home3.jpg";
import { FaRegHeart, FaHeart } from "react-icons/fa";

// Hero images for each category
const categoryHeroImages: { [key: string]: string } = {
  belts: home1,
  purse: home2,
  gloves: home3,
  dresses: home1,
  default: home2,
};

// Define the Product type
interface Product {
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  category: string;
  gender: string;
}

// Define props for ProductCard
interface ProductCardProps {
  product: Product;
  categoryLabel: string;
}

const ProductCard = ({ product, categoryLabel }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Link
      to={`/category/${product.category}/${slugify(product.name, {
        lower: true,
      })}`}
      className="group"
    >
      <div
        className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-800 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault(); // prevent navigation
            setLiked(!liked);
            if (!liked) {
              alert(`${product.name} has been added to your wishlist.`);
            } else {
              alert(`${product.name} has been removed from your wishlist.`);
            }
          }}
          className="absolute top-2 right-2 z-10 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 cursor-pointer transition-colors"
        >
          {liked ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-white text-lg" />
          )}
        </button>

        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/20 rounded-lg" />
      </div>

      <div className="mt-3">
        <h2 className="text-md text-[#3A2E25]" style={{ fontFamily: "font5" }}>
          {product.name}
        </h2>
        <p
          className="text-xs text-gray-600 mt-1 capitalize"
          style={{ fontFamily: "font5" }}
        >
          {categoryLabel}
        </p>
        <p
          className="text-sm text-black mt-1.5"
          style={{ fontFamily: "font6" }}
        >
          {product.price}
        </p>
      </div>
    </Link>
  );
};

// Product Data
const products: Product[] = [
  {
    name: "Belt",
    price: "$27.90",
    image: img1,
    hoverImage: gloves,
    category: "belts",
    gender: "men",
  },
  {
    name: "Leather Purse",
    price: "$29.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Purse",
    category: "purse",
    gender: "women",
  },
  {
    name: "Black Gloves",
    price: "$19.90",
    image: gloves,
    hoverImage: "https://via.placeholder.com/300x320?text=Gloves",
    category: "gloves",
    gender: "women",
  },
  {
    name: "Rustic gathered top BEIGE",
    price: "$27.90 - $35.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Beige+Top",
    category: "dresses",
    gender: "men",
  },
  {
    name: "Rustic gathered top ECRU",
    price: "$27.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Ecru+Top",
    category: "dresses",
    gender: "women",
  },
  {
    name: "T-shirt with cowboy graphic",
    price: "$35.90",
    image: img1,
    hoverImage: "https://via.placeholder.com/300x320?text=Cowboy+Tshirt",
    category: "dresses",
    gender: "men",
  },
];

// Categories
interface Category {
  name: string;
  path: string;
}

const categories: Category[] = [
  { name: "All Category", path: "/category" },
  { name: "Belts", path: "/category/belts" },
  { name: "Purse", path: "/category/purse" },
  { name: "Gloves", path: "/category/gloves" },
  { name: "Dresses", path: "/category/dresses" },
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $20", min: 0, max: 20 },
  { label: "$20 - $30", min: 20, max: 30 },
  { label: "Over $30", min: 30, max: Infinity },
];

const CategoryProducts = () => {
  const { categoryName } = useParams<{ categoryName?: string }>();
  const navigate = useNavigate();
  const currentCategory = categoryName ?? "";
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = e.target.value;
    navigate(path);
  };

  const parsePrice = (price: string): number => {
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  const filteredProducts: Product[] =
    currentCategory === ""
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === currentCategory.toLowerCase()
        );

  const finalProducts = filteredProducts.filter(
    (product) =>
      (selectedGender === "all" ||
        product.gender.toLowerCase() === selectedGender.toLowerCase()) &&
      parsePrice(product.price) >= selectedPriceRange.min &&
      parsePrice(product.price) <= selectedPriceRange.max
  );

  const heroImage =
    categoryHeroImages[currentCategory.toLowerCase()] ||
    categoryHeroImages.default;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="w-full h-[500px] relative">
        <img
          src={heroImage}
          alt={`${currentCategory || "All"} Category Hero`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1
            className="text-6xl font-bold text-white capitalize"
            style={{ fontFamily: "font5" }}
          >
            {currentCategory ? currentCategory.replace("-", " ") : "All"}{" "}
            Collections
          </h1>
        </div>
      </section>

      {/* Gender Filter */}
      <section className="w-full py-6 bg-white">
        <div className="flex ml-8 gap-8">
          {["All", "MEN", "WOMEN"].map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedGender(gender.toLowerCase())}
              className={`text-2xl ${
                selectedGender === gender.toLowerCase()
                  ? "font-bold text-black border-b-2 border-black"
                  : "text-gray-600"
              } pb-2 hover:text-black transition-colors`}
              style={{ fontFamily: "font5" }}
            >
              {gender}
            </button>
          ))}
        </div>
      </section>

      <main className="flex-grow pr-8  pb-4 flex flex-col">
        <div className="flex  gap-10">
          {/* Sidebar Filters */}
          <aside className="w-64 hidden  bg-gray-200 md:block">
            <div className="sticky  top-24 pl-8 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-3 my-2">CATEGORIES</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <Link
                      to={category.path}
                      key={index}
                      className={`text-sm ${
                        category.path === `/category/${categoryName}` ||
                        (category.path === "/category" &&
                          currentCategory === "")
                          ? "text-black font-medium"
                          : "text-gray-700"
                      } hover:text-black hover:font-medium transition-colors`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Ranges */}
              <div>
                <h3 className="text-lg font-semibold mb-3">PRICE RANGE</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPriceRange(range)}
                      className={`text-sm text-left ${
                        selectedPriceRange.label === range.label
                          ? "text-black font-medium"
                          : "text-gray-700"
                      } hover:text-black hover:font-medium transition-colors`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <section className="flex-1">
            {/* Mobile Category Dropdown */}
            <div className="md:hidden mb-6">
              <select
                value={
                  currentCategory ? `/category/${currentCategory}` : "/category"
                }
                onChange={handleCategoryChange}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                style={{ fontFamily: "font5" }}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category.path}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {finalProducts.length === 0 ? (
              <p className="text-gray-500">
                No products found in this category.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {finalProducts.map((product, index) => {
                  const categoryLabel: string =
                    categories.find((cat) =>
                      cat.path.toLowerCase().includes(product.category)
                    )?.name || product.category;

                  return (
                    <ProductCard
                      key={index}
                      product={product}
                      categoryLabel={categoryLabel}
                    />
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryProducts;

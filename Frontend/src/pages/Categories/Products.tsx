import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import home1 from "../../assets/Home1.jpg";
import home2 from "../../assets/Home2.jpg";
import home3 from "../../assets/Home3.jpg";
import ProductData from "./Products.json";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "./ProductCard";
import type { Product } from "./productTypes";
import { parsePrice } from "./parsePrice";
import { categories } from "./categoryConstants";

const categoryHeroImages: { [key: string]: string } = {
  belts: home1,
  purse: home2,
  gloves: home3,
  dresses: home1,
  default: home2,
};

const CategoryProducts = () => {
  const [products] = useState<Product[]>(ProductData);

  const { categoryName } = useParams<{ categoryName?: string }>();
  const currentCategory = categoryName ?? "";

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Final filters
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([33]);
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  // Temporary filters
  const [tempGender, setTempGender] = useState("all");
  const [tempCategories, setTempCategories] = useState<string[]>([]);
  const [tempPrice, setTempPrice] = useState<number[]>([33]);

  // Sync temp values on first render
  useEffect(() => {
    setTempGender(selectedGender);
    setTempCategories(selectedCategories);
    setTempPrice(price);
  }, []);

  const applyFilters = () => {
    setSelectedGender(tempGender);
    setSelectedCategories(tempCategories);
    setPrice(tempPrice);
    setIsPriceFilterActive(true);
    setShowMobileFilters(false);
  };

  const filteredProducts: Product[] =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.some((selectedPath) => {
            const selectedCategory = selectedPath.split("/").pop()?.toLowerCase();
            return product.category.toLowerCase() === selectedCategory;
          })
        );

  const finalProducts = filteredProducts.filter((product) => {
    const productPrice = parsePrice(product.price);
    return (
      (selectedGender === "all" ||
        product.gender.toLowerCase() === selectedGender.toLowerCase()) &&
      (!isPriceFilterActive || productPrice <= price[0])
    );
  });

  const heroImage =
    categoryHeroImages[currentCategory.toLowerCase()] || categoryHeroImages.default;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative">
        <img
          src={heroImage}
          alt={`${currentCategory || "All"} Category Hero`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white capitalize"
            style={{ fontFamily: "font5" }}
          >
            {currentCategory ? currentCategory.replace("-", " ") : "All"} Collections
          </h1>
        </div>
      </section>

      {/* Gender Filter */}
      <section className="w-full py-4 sm:py-6 bg-white">
        <div className="flex justify-center sm:justify-start ml-4 sm:ml-8 gap-4 sm:gap-8">
          {["All", "MEN", "WOMEN"].map((gender) => (
            <button
              key={gender}
              onClick={() => setTempGender(gender.toLowerCase())}
              className={`text-lg sm:text-xl md:text-2xl ${
                tempGender === gender.toLowerCase()
                  ? "font-bold text-[#3A2E25] border-b-2 border-[#3A2E25]"
                  : "text-[#5e4c3f]"
              } pb-1 sm:pb-2 hover:text-[#3A2E25] transition-colors`}
              style={{ fontFamily: "font5" }}
            >
              {gender}
            </button>
          ))}
        </div>
      </section>

      <main className="flex-grow px-4 sm:px-8 pb-4 flex flex-col">
        {/* Mobile filter toggle */}
        <div className="sm:hidden flex justify-end mb-4">
          <button
            className="px-4 py-2 border text-sm rounded-md text-[#3A2E25] border-[#3A2E25]"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            {showMobileFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          {/* Sidebar Filters */}
          {(showMobileFilters || window.innerWidth >= 640) && (
            <ScrollArea className="sm:block sm:w-[15vw] w-full border p-4 rounded-md">
              {/* Category Filter */}
              <div>
                <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3">CATEGORIES</h3>
                <div className="flex flex-col gap-2 overflow-auto pr-1 my-4">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-800"
                    >
                      <input
                        type="checkbox"
                        checked={tempCategories.includes(category.path)}
                        onChange={() =>
                          setTempCategories((prev) =>
                            prev.includes(category.path)
                              ? prev.filter((c) => c !== category.path)
                              : [...prev, category.path]
                          )
                        }
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mt-4">
                <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3">PRICE RANGE</h3>
                <div className="text-sm mb-4 text-gray-600">
                  Showing products under ₹{tempPrice[0]}
                </div>
                <Slider
                  value={tempPrice}
                  max={100}
                  step={1}
                  onValueChange={(value) => setTempPrice(value)}
                />
              </div>

              {/* Apply Button */}
              <div className="mt-6">
                <button
                  onClick={applyFilters}
                  className="w-full bg-[#3A2E25] text-white py-2 rounded-md text-sm hover:bg-[#2c211a] transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </ScrollArea>
          )}

          {/* Products */}
          <section className="flex-1">
            {finalProducts.length === 0 ? (
              <p className="text-gray-500 text-sm sm:text-base">
                No products found in this category.
              </p>
            ) : (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

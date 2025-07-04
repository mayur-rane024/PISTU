// CategoryProducts.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";

import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";

import { getCategories } from "../../functions/categoryService";
import { fetchProductsByFilters } from "../../functions/productService";

import home1 from "../../assets/Home1.jpg";
import home2 from "../../assets/Home2.jpg";
import home3 from "../../assets/Home3.jpg";

const categoryHeroImages: { [key: string]: string } = {
  belts: home1,
  purse: home2,
  gloves: home3,
  dresses: home1,
  default: home2,
};

const CategoryProducts = () => {
  const { categoryName } = useParams<{ categoryName?: string }>();
  const currentCategory = categoryName ?? "";

  const [categories, setCategories] = useState<{ name: string }[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(false);

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([100]);
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  const [tempGender, setTempGender] = useState(selectedGender);
  const [tempCategories, setTempCategories] =
    useState<string[]>(selectedCategories);
  const [tempPrice, setTempPrice] = useState<number[]>(price);

  // Sync temp states with applied filters
  useEffect(() => {
    setTempGender(selectedGender);
    setTempCategories(selectedCategories);
    setTempPrice(price);
  }, [selectedGender, selectedCategories, price]);

  // Fetch categories
  useEffect(() => {
    const fetchCats = async () => {
      setCategoriesLoading(true);
      try {
        const cats = await getCategories();
        setCategories(cats);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
      setCategoriesLoading(false);
    };
    fetchCats();
  }, []);

  // Apply filters
  const applyFilters = () => {
    setSelectedGender(tempGender);
    setSelectedCategories(tempCategories);
    setPrice(tempPrice);
    setIsPriceFilterActive(true);
    setShowMobileFilters(false);
  };

  // Fetch products
  useEffect(() => {
    const categoriesToFilter =
      selectedCategories.length > 0
        ? selectedCategories
        : currentCategory !== "" && currentCategory !== "all"
        ? [currentCategory]
        : "all";

    const fetchFilteredProducts = async () => {
      setProductsLoading(true);
      try {
        const filteredProducts = await fetchProductsByFilters(
          categoriesToFilter,
          selectedGender,
          isPriceFilterActive ? price[0] : undefined
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
      setProductsLoading(false);
    };

    fetchFilteredProducts();
  }, [
    currentCategory,
    selectedGender,
    price,
    isPriceFilterActive,
    selectedCategories,
  ]);

  const categoriesWithPaths = categories.map((cat) => ({
    name: cat.name,
    path: slugify(cat.name, { lower: true }),
  }));

  const heroImage =
    categoryHeroImages[currentCategory.toLowerCase()] ||
    categoryHeroImages.default;

  const renderFilters = () => (
    <>
      <div>
        <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3">
          CATEGORIES
        </h3>
        {currentCategory && currentCategory !== "all" ? (
          <p className="text-sm text-gray-600">
            Category filter disabled when viewing a specific category.
          </p>
        ) : (
          <div className="flex flex-col gap-2 overflow-auto pr-1 my-4 max-h-[200px]">
            {categoriesLoading ? (
              <p>Loading categories...</p>
            ) : (
              categoriesWithPaths.map((category, index) => (
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
              ))
            )}
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3">
          PRICE RANGE
        </h3>
        <div className="text-sm mb-4 text-gray-600">
          {isPriceFilterActive ? (
            <>Showing products under ₹{tempPrice[0]}</>
          ) : (
            <>Apply filters to refine results</>
          )}
        </div>
        <Slider
          value={tempPrice}
          max={100}
          step={1}
          onValueChange={(value) => setTempPrice(value)}
        />
      </div>

      <div className="mt-6">
        <button
          onClick={applyFilters}
          className="w-full bg-[#3A2E25] text-white py-2 rounded-md text-sm hover:bg-[#2c211a] transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
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
            {currentCategory ? currentCategory.replace("-", " ") : "All"}{" "}
            Collections
          </h1>
        </div>
      </section>

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
        <div className="sm:hidden flex justify-end mb-4">
          <button
            className="px-4 py-2 border text-sm rounded-md text-[#3A2E25] border-[#3A2E25]"
            onClick={() => setShowMobileFilters(true)}
          >
            Show Filters
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <div className="hidden sm:block sm:w-[15vw]">
            <ScrollArea className="border p-4 rounded-md">
              {renderFilters()}
            </ScrollArea>
          </div>

          <section className="flex-1">
            {productsLoading ? (
              <p>Loading products...</p>
            ) : products.length === 0 ? (
              <p className="text-gray-500 text-sm sm:text-base">
                No products found in this category.
              </p>
            ) : (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => {
                  const categoryLabel: string =
                    categories.find(
                      (cat) =>
                        cat.name.toLowerCase() ===
                        product.category.toLowerCase()
                    )?.name || product.category;

                  return (
                    <ProductCard
                      key={product.name + index}
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

      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-h-[90%] p-4 rounded-lg overflow-y-auto relative">
            <button
              onClick={() => setShowMobileFilters(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
            >
              ×
            </button>
            {renderFilters()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CategoryProducts;

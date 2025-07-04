import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { useWishlist } from "../../Context/wishlistContext";
import { addToCart } from "../../functions/cartService";
import type { CartItem } from "../../types/cartItem";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductDetailsProps {
  name: string;
  price: number;
  discount?: number;
  description: string;
  detailedDescription: string;
  colors: string[];
  images: string[];
  stock: string; // Added stock field
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  discount = 0,
  description,
  detailedDescription,
  colors,
  stock,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null); // Tracks which section is open
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = wishlist.some((product) => product.name === name);
  const discountedPrice = price - (price * discount) / 100;

  const handleColorSelect = (imgUrl: string) => {
    setSelectedColor(imgUrl);
  };

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!selectedColor) {
      alert("Please select a color variant before adding to cart.");
      return;
    }

    const productToAdd: CartItem = {
      name,
      price: discountedPrice,
      image: selectedColor,
      quantity,
    };

    const success = await addToCart(productToAdd);
    console.log(success);

    if (success) alert(`${name} added to cart!`);
    else alert("Failed to add to cart");
  };

  const handleBuyProduct = () => {
    if (selectedColor) {
      alert(`Proceeding to buy ${quantity} x ${name}!`);
    } else {
      alert("Please select an image variant first!");
    }
  };

  const handleAddToWishlist = () => {
    if (isWishlisted) {
      removeByName(name);
      alert(`${name} removed from wishlist!`);
    } else {
      const productToAdd = {
        id: Math.random(),
        name,
        image: colors[0],
        price: discountedPrice,
      };
      addToWishlist(productToAdd);
      alert(`${name} added to wishlist!`);
    }
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShowCopiedPopup(true);
      setTimeout(() => setShowCopiedPopup(false), 2000); // Hide popup after 2 seconds
    });
  };

  const removeByName = (productName: string) => {
    const item = wishlist.find((p) => p.name === productName);
    if (item) removeFromWishlist(item.id);
  };

  // write a function to log the value of "stock"
  // const logStockValue = () => {
  //   console.log("Stock value:", stock);
  // };
  // logStockValue();

  //   console.log("Product:", product);
  console.log("Stock:", stock);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Function to format text with line breaks
  const formatTextWithBreaks = (text: string) => {
    console.log("Input text:", text); // Debug the input
    if (!text || typeof text !== "string")
      return <span>No content available</span>;
    const lines = text.split("\n").filter((line) => line.trim().length > 0); // Filter out empty lines
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        <br />
      </React.Fragment>
    ));
  };

  return (
   <ScrollArea className="w-full md:w-[90vw] h-[80vh] overflow-y-auto scrollbar-hide">
  <div className="p-4 w-full max-w-full box-border bg-[#ffffff] rounded-r-xl min-h-[80vh] relative">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={handleShare}
            className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            title="Share Product"
          >
            <RiShareForwardLine className="text-xl text-[#3A2E25]" />
          </button>
          <button
            onClick={handleAddToWishlist}
            className="w-11 h-11 mr-4 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            title="Add to Wishlist"
          >
            {isWishlisted ? (
              <FaHeart className="text-xl text-red-500" />
            ) : (
              <FaRegHeart className="text-xl text-[#3A2E25]" />
            )}
          </button>
        </div>
        <h2 className="text-2xl md:text-4xl" style={{ fontFamily: "font5" }}>
          {name}
        </h2>
        <div className="border-b-2 mt-4"></div>

        <p className="text-xl md:text-2xl font-bold text-[#342b24] mt-2">
          ₹{discountedPrice.toFixed(2)}{" "}
          {discount > 0 && (
            <span className="text-gray-500 font-medium text-base md:text-lg line-through ml-1">
              ₹{price.toFixed(2)}
            </span>
          )}
          {discount > 0 && (
            <span className="ml-5 text-green-600 text-sm font-semibold">
              <u>({discount}% Savings)</u>
            </span>
          )}
        </p>
        <div>MRP incl. of all taxes</div>

        {/* Variant Selection */}
        <div className="mt-4 flex items-center">
          <p
            className="text-md font-bold text-gray-700 mr-3"
            style={{ fontFamily: "font6" }}
          >
            Variants:
          </p>
          <div className="flex space-x-3">
            {colors.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => handleColorSelect(imgUrl)}
                className={`w-15 h-15 border-2 rounded-lg overflow-hidden ${
                  selectedColor === imgUrl
                    ? "border-black scale-110"
                    : "border-[#3A2E25]"
                } transition-transform duration-200`}
              >
                <img
                  src={imgUrl}
                  alt={`Variant ${idx + 1}`}
                  className="w-full h-full object-cover p-1 rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mt-4 flex items-center">
          <label
            htmlFor="quantity"
            className="text-md font-bold text-gray-700 mr-3"
            style={{ fontFamily: "font6" }}
          >
            Quantity:
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border border-gray-300 rounded-sm px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3A2E25]"
            disabled={stock === "Out of Stock"}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
          <span
            className={`ml-5 ${
              stock === "In Stock" ? "text-green-600" : "text-red-500"
            } font-semibold`}
          >
            ({stock})
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <button
            onClick={handleBuyProduct}
            className="w-full md:w-1/2 bg-[#3A2E25] text-white py-2 rounded-xl hover:bg-[#806552] cursor-pointer"
            disabled={stock === "Out of Stock"} // Disable button when out of stock
          >
            Buy Product
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full md:w-1/2 border border-[#3A2E25] text-[#3A2E25] py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer"
            disabled={stock === "Out of Stock"} // Disable button when out of stock
          >
            Add To Cart
          </button>
        </div>

        {/* Product Description */}
        <div className="mt-6 border border-gray-300 rounded-t-sm ">
          <div
            className="flex justify-between items-center cursor-pointer p-2"
            onClick={() =>
              setActiveSection(
                activeSection === "description" ? null : "description"
              )
            }
          >
            <h2
              className="text-lg text-[#3A2E25]"
              style={{ fontFamily: "font5" }}
            >
              Product Description
            </h2>
            {activeSection === "description" ? (
              <FiChevronUp className="text-[#3A2E25]" />
            ) : (
              <FiChevronDown className="text-gray-600" />
            )}
          </div>
          <AnimatePresence>
            {activeSection === "description" && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sectionVariants}
              >
                <div className="p-2 text-sm mb-3 text-[#3A2E25]">
                  {formatTextWithBreaks(description)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Details */}
        <div className=" border border-gray-300 border-t-0 rounded-b-sm ">
          <div
            className="flex justify-between items-center cursor-pointer p-2"
            onClick={() =>
              setActiveSection(activeSection === "details" ? null : "details")
            }
          >
            <h2
              className="text-lg text-[#3A2E25]"
              style={{ fontFamily: "font5" }}
            >
              Product Details
            </h2>
            {activeSection === "details" ? (
              <FiChevronUp className="text-gray-600" />
            ) : (
              <FiChevronDown className="text-gray-600" />
            )}
          </div>
          <AnimatePresence>
            {activeSection === "details" && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sectionVariants}
              >
                <div className="p-2 text-[#3A2E25]">
                  {formatTextWithBreaks(detailedDescription)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Copied Popup */}
        <AnimatePresence>
          {showCopiedPopup && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Link copied to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from "../../Context/wishlistContext";
import {addToCart} from "../../functions/cartService"
import type { CartItem } from "../../types/cartItem";

interface ProductDetailsProps {
  name: string;
  price: number;
  discount?: number;
  description: string;
  colors: string[];       // moved to top level
  images: string[];       // existing
}


const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  discount = 0,
  description,
  colors,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

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

  const removeByName = (productName: string) => {
    const item = wishlist.find((p) => p.name === productName);
    if (item) removeFromWishlist(item.id);
  };

  return (
    <div className="p-4 w-full md:w-[60vw] bg-white rounded-r-4xl min-h-[80vh] relative">
      <button
        onClick={handleAddToWishlist}
        className="absolute top-4 right-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
        title="Add to Wishlist"
      >
        {isWishlisted ? (
          <FaHeart className="text-xl text-red-500" />
        ) : (
          <FaRegHeart className="text-xl text-[#3A2E25]" />
        )}
      </button>

      <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>

      <p className="text-xl md:text-2xl font-bold text-[#342b24]">
        ₹{discountedPrice.toFixed(2)}{" "}
        {discount > 0 && (
          <span className="text-gray-500 font-medium text-base md:text-lg line-through ml-2">
            ₹{price.toFixed(2)}
          </span>
        )}
        {discount > 0 && (
          <span className="ml-2 text-green-600 text-sm font-semibold">
            ({discount}% OFF)
          </span>
        )}
      </p>

      {/* Variant Selection */}
      <div className="mt-4">
        <p>Selected Variant: {selectedColor ? "Selected" : "None"}</p>
        <div className="flex space-x-3 mt-2">
          {colors.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => handleColorSelect(imgUrl)}
              className={`w-14 h-14 border-2 rounded-lg overflow-hidden ${
                selectedColor === imgUrl ? "border-black scale-110" : "border-gray-300"
              } transition-transform duration-200`}
            >
              <img src={imgUrl} alt={`Variant ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="mt-4">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Quantity:
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border border-gray-300 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3A2E25]"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <button
          onClick={handleBuyProduct}
          className="w-full md:w-1/2 bg-[#3A2E25] text-white py-2 rounded-xl hover:bg-[#806552] cursor-pointer"
        >
          Buy Product
        </button>
        <button
          onClick={handleAddToCart}
          className="w-full md:w-1/3 border border-[#3A2E25] text-[#3A2E25] py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 cursor-pointer"
        >
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-6 text-sm text-gray-600">
        <ul className="list-disc list-inside space-y-1">
          <li>Free returns within 15 days. Click for detailed information</li>
          <li>{description}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

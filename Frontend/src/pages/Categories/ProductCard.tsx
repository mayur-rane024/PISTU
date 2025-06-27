import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import slugify from "slugify";
import type { ProductCardProps } from "./productTypes";

const ProductCard = ({ product, categoryLabel }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Link
      to={`/category/${product.category}/${slugify(product.name, { lower: true })}`}
      className="group"
    >
      <div
        className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
            alert(
              `${product.name} has been ${
                liked ? "removed from" : "added to"
              } your wishlist.`
            );
          }}
          className="absolute top-2 right-2 z-10 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 transition-colors"
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
          className="w-full h-[35vh] sm:h-[45vh] md:h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/20 rounded-lg" />
      </div>

      <div className="mt-2 px-2">
        <h2 className="text-xs sm:text-sm md:text-lg text-[#3A2E25] truncate" style={{ fontFamily: "font5" }}>
          {product.name}
        </h2>
        <p className="text-xs sm:text-sm border-t-2 border-[#3A2E25] text-[#5e4c3f] mt-1 capitalize" style={{ fontFamily: "font6" }}>
          {categoryLabel}
        </p>
        <p className="text-xs sm:text-sm text-black mt-1" style={{ fontFamily: "font6" }}>
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;

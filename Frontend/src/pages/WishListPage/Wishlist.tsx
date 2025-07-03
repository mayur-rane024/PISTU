import React from "react";
import { useWishlist } from "../../Context/wishlistContext"; // Adjust path as needed
import Navbar from "../Navbar";
import Footer from "../Footer";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf8f3]">
      <Navbar />

      <main className="flex-grow pt-24 px-4 md:px-10">
        <h1 className="text-3xl font-bold text-[#3A2E25] mb-6 text-center">
          Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-gray-600 text-center mt-20">
            <p className="text-lg">No items in your wishlist.</p>
          </div>
        ) : (
          
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-10">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-xl p-4 relative flex flex-col"
              >
                {/* Remove button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 text-2xl font-bold cursor-pointer text-[#3A2E25] hover:text-[#806552]"
                  aria-label={`Remove ${product.name} from wishlist`}
                  title="Remove from Wishlist"
                >
                  <IoClose />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-56 object-content rounded-lg"
                />

                <div className="mt-3 flex-grow">
                  <h2
                    className="text-sm md:text-base text-[#3A2E25] font-semibold truncate"
                    style={{ fontFamily: "font5" }}
                  >
                    {product.name}
                  </h2>
                  <p
                    className="text-sm border-t-2 border-[#3A2E25] mt-1 pt-1"
                    style={{ fontFamily: "font6" }}
                  >
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </p>
                </div>

                <button className="mt-4 w-full border border-[#3A2E25] text-[#3A2E25] py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  Buy Product
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WishlistPage;

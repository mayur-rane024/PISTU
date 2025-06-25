import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSidebar from "./CartSidebar";
import img1 from "../../feature/feature-1.avif";
import Navbar from "../Navbar";
import Footer from "../Footer";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      image: img1,
      name: "Naruto Shippuden: Gamakage Jiraiya",
      category: "Oversized Shirts",
      price: 1699,
      size: "XS",
      quantity: 1,
      selected: true,
    },
    {
      image: img1,
      name: "Cotton-Linen Shirt: Venus",
      category: "Cotton Linen Shirts",
      price: 1699,
      size: "S",
      quantity: 1,
      selected: true,
    },
    {
      image: img1,
      name: "Looney Tunes: The End",
      category: "Graphic Tees",
      price: 699,
      size: "S",
      quantity: 2,
      selected: true,
    },
  ]);

  const handleItemChange = (
    index: number,
    changes: Partial<(typeof cartItems)[0]>
  ) => {
    const updated = [...cartItems];
    updated[index] = { ...updated[index], ...changes };
    setCartItems(updated);
  };

  const total = cartItems
    .filter((item) => item.selected)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <Navbar/>
      <div className="container mx-auto p-4 bg-white flex flex-col pt-28 md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <p>Please select address.</p>
            <button className="text-teal-700 font-semibold">ADD</button>
          </div>
          <div className="border rounded-md">
            <div className="p-4 flex items-center gap-2 border-b font-semibold text-green-700">
              <input
                type="checkbox"
                checked={cartItems.every((item) => item.selected)}
                onChange={(e) =>
                  setCartItems(
                    cartItems.map((item) => ({
                      ...item,
                      selected: e.target.checked,
                    }))
                  )
                }
              />
              <span>
                {cartItems.filter((i) => i.selected).length}/{cartItems.length}{" "}
                ITEMS SELECTED
              </span>
              <span className="text-black"> (₹{total})</span>
            </div>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                name={item.name}
                category={item.category}
                price={item.price}
                size={item.size}
                quantity={item.quantity}
                selected={item.selected}
                onToggleSelect={() =>
                  handleItemChange(index, { selected: !item.selected })
                }
                onSizeChange={(newSize) =>
                  handleItemChange(index, { size: newSize })
                }
                onQuantityChange={(newQty) =>
                  handleItemChange(index, { quantity: newQty })
                }
                onRemove={() =>
                  setCartItems(cartItems.filter((_, i) => i !== index))
                }
                onMoveToWishlist={() => alert("Moved to wishlist")}
              />
            ))}
          </div>
        </div>
        <CartSidebar cartItems={cartItems} />
      </div>
      <Footer/>
    </>
  );
};

export default CartPage;

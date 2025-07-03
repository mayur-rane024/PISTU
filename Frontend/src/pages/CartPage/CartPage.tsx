import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSidebar from "./CartSidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { getCartItems, removeFromCart } from "../../functions/cartService";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartItems();
      setCartItems(items.map(item => ({ ...item, selected: true })));
    };
    fetchCart();
  }, []);

  const handleItemChange = (id: string, changes: Partial<any>) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, ...changes } : item))
    );
  };

  const handleRemove = async (id: string) => {
    await removeFromCart(id);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems
    .filter((item) => item.selected)
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 bg-white flex flex-col pt-28 md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <div className="border rounded-md">
            <div className="p-4 flex items-center gap-2 border-b font-semibold text-green-700">
              <input
                type="checkbox"
                checked={cartItems.every((item) => item.selected)}
                onChange={(e) =>
                  setCartItems(cartItems.map(item => ({ ...item, selected: e.target.checked })))
                }
              />
              <span>
                {cartItems.filter(i => i.selected).length}/{cartItems.length} ITEMS SELECTED
              </span>
              <span className="text-black"> (₹{total})</span>
            </div>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity || 1}
                selected={item.selected}
                onToggleSelect={() => handleItemChange(item.id, { selected: !item.selected })}
                onQuantityChange={(newQty) => handleItemChange(item.id, { quantity: newQty })}
                onRemove={() => handleRemove(item.id)}
                onMoveToWishlist={() => alert("Moved to wishlist")}
              />
            ))}
          </div>
        </div>
        <CartSidebar cartItems={cartItems} />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;

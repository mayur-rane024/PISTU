import React from "react";
import Navbar from "../Navbar";
import { useCart } from "./CartContext";

const CartComponent: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const deliveryAddress = "123 Main St, City, Country"; // Static for now, can be dynamic
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = +(total * 0.07).toFixed(2);
  const finalTotal = +(total + gst).toFixed(2);

  const handleQuantityChange = (articleNumber: string, qty: number) => {
    updateQuantity(articleNumber, qty);
  };

  const handleRemove = (articleNumber: string) => {
    removeFromCart(articleNumber);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-8 px-4 mt-24 md:px-20">
        {/* Address Block */}
        <div className="bg-white shadow-md p-4 rounded mb-6 border">
          <h2 className="font-semibold text-lg text-teal-700">Deliver To:</h2>
          <p className="text-gray-700">{deliveryAddress}</p>
          <p className="text-sm text-gray-500">
            Estimated delivery by <span className="font-medium">24 Jun</span>
          </p>
        </div>

        {/* Item Count Summary */}
        <div className="text-sm font-semibold text-green-700 mb-3">
          <input type="checkbox" checked readOnly className="mr-2" />
          {cartItems.length}/2 ITEMS SELECTED (<span className="text-green-600">₹ {finalTotal}</span>)
        </div>

        {/* Cart Items & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={${item.articleNumber}-${item.color}}
                  className="flex flex-col md:flex-row bg-white border shadow-sm rounded p-4"
                >
                  <input type="checkbox" defaultChecked className="mr-2 self-start" />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-4 rounded"
                  />
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="text-sm text-gray-500">Color: {item.color}</p>
                      </div>
                      <p className="text-right font-semibold text-gray-800">
                        ₹ {item.price} <br />
                        <span className="text-xs text-gray-500 font-normal">MRP incl. of all taxes</span>
                      </p>
                    </div>

                    {/* Size and Quantity */}
                    <div className="flex gap-4">
                      <div className="text-sm">
                        <label htmlFor={size-${index}} className="font-medium mr-2">
                          Size:
                        </label>
                        <select
                          id={size-${index}}
                          defaultValue={item.size || "L"}
                          className="border rounded px-2 py-1"
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                      <div className="text-sm">
                        <label htmlFor={qty-${index}} className="font-medium mr-2">
                          Qty:
                        </label>
                        <select
                          id={qty-${index}}
                          value={item.qty}
                          onChange={(e) => handleQuantityChange(item.articleNumber, parseInt(e.target.value))}
                          className="border rounded px-2 py-1"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-1">
                      Estimated Delivery by <span className="font-semibold text-black">24 Jun</span>
                    </p>

                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => handleRemove(item.articleNumber)}
                        className="border px-4 py-1 rounded font-semibold text-sm hover:bg-gray-100"
                      >
                        REMOVE
                      </button>
                      <button className="border px-4 py-1 rounded font-semibold text-sm hover:bg-gray-100">
                        MOVE TO WISHLIST
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right: Summary */}
          <div className="bg-white shadow-md p-6 rounded space-y-4 border">
            <h2 className="text-lg font-semibold text-center">PLACE ORDER</h2>
            <div className="bg-purple-100 p-3 rounded text-center text-sm text-purple-800">
              YOU ARE MISSING OUT ON!
              <br />
              Save an additional ₹242 by adding membership to your cart.
              <button className="ml-2 px-3 py-1 mt-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                ADD
              </button>
            </div>

            <div className="border-t pt-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Cart Total (Excl. of all taxes)</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST</span>
                <span>₹ {gst}</span>
              </div>
              <div className="flex justify-between text-gray-400 line-through">
                <span>Shipping Charges</span>
                <span>₹ 50</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Shipping Charges</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>₹ {finalTotal}</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition-all">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
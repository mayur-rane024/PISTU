import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Item {
  id: number;
  name: string;
  image: string;
  size?: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  estimatedDelivery: string;
}

interface CartProps {
  items: Item[];
  deliveryAddress: string;
  total: number;
  onRemoveItem?: (id: number) => void;
  onMoveToWishlist?: (id: number) => void;
  onPlaceOrder?: () => void;
}

const CartComponent: React.FC<CartProps> = ({
  items,
  deliveryAddress,
  total,
  onRemoveItem,
  onMoveToWishlist,
  onPlaceOrder,
}) => {
  return (
    <div className="min-h-screen bg-beige-100 text-brown-900 font-serif">
      <Navbar />
      <div className="container mx-auto mt-20 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg">Deliver To: {deliveryAddress}</p>
            <button className="text-brown-600 underline">CHANGE</button>
            <p className="text-sm text-brown-500">Estimated delivery by 24 Jun</p>
          </div>
          <button
            className="bg-brown-600 text-white px-4 py-2 rounded-full hover:bg-brown-700"
            onClick={onPlaceOrder}
          >
            PLACE ORDER
          </button>
        </div>
        <div className="border-t border-brown-300 pt-4">
          <p className="text-lg">{items.length}/3 ITEMS SELECTED (₹{total})</p>
          {items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b border-brown-200">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm">Size: {item.size || 'N/A'}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
                <p className="text-sm">
                  MRP: ₹{item.price} {item.originalPrice && <span className="line-through text-brown-500">₹{item.originalPrice}</span>}
                </p>
                <p className="text-sm text-brown-500">Estimated Delivery by {item.estimatedDelivery}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-red-600 underline hover:text-red-800"
                  onClick={() => onRemoveItem && onRemoveItem(item.id)}
                >
                  REMOVE
                </button>
                <button
                  className="text-brown-600 underline hover:text-brown-800"
                  onClick={() => onMoveToWishlist && onMoveToWishlist(item.id)}
                >
                  MOVE TO WISHLIST
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-brown-50 rounded-lg border border-brown-200">
          <p className="text-lg font-semibold text-brown-800">YOU ARE MISSING OUT ON!</p>
          <p className="text-sm text-brown-600">Save an additional ₹26 by adding membership to your cart.</p>
          <button className="mt-2 bg-brown-600 text-white px-3 py-1 rounded-full hover:bg-brown-700">
            ADD
          </button>
        </div>
        <div className="mt-6">
          <button className="text-brown-600 underline mb-2 block hover:text-brown-800">Apply Coupon</button>
          <button className="text-brown-600 underline mb-2 block hover:text-brown-800">Gift Voucher</button>
          <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" className="form-checkbox text-brown-600" />
            <span className="text-brown-600">Gift Wrap (₹25)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-brown-600" />
            <span className="text-brown-600">TSS Money / TSS Points</span>
          </label>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartComponent;
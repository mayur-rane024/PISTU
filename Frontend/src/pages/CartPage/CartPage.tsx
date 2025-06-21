import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CartSidebar from './CartSidebar';

const CartPage: React.FC = () => {
  const cartItems = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Naruto Shippuden: Gamakage Jiraiya Oversized Shirts',
      price: 1699,
      size: 'XS',
      quantity: 1,
      onRemove: () => {},
      onMoveToWishlist: () => {},
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Cotton-Linen Shirt Venus',
      price: 1699,
      size: 'S',
      quantity: 1,
      onRemove: () => {},
      onMoveToWishlist: () => {},
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Looney Tunes: The End',
      price: 699,
      size: 'S',
      quantity: 2,
      onRemove: () => {},
      onMoveToWishlist: () => {},
    },
  ];

  const total = 4365.36;
  const gst = 430.64;
  const shipping = -50.00;

  return (
    <div className="container mx-auto p-4 bg-white flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-2/3">
        <div className="mb-4">
          <p>Please select address.</p>
          <button className="bg-blue-500 text-white py-1 px-2">ADD</button>
        </div>
        <div className="border p-4">
          <p className="mb-4">3/3 ITEMS SELECTED (₹4796)</p>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              size={item.size}
              quantity={item.quantity}
              onRemove={item.onRemove}
              onMoveToWishlist={item.onMoveToWishlist}
            />
          ))}
        </div>
      </div>
      <CartSidebar />
    
    </div>
  );
};

export default CartPage;
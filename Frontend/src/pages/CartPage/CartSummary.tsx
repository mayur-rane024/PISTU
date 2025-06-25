// import React from 'react';

// interface CartItemProps {
//   image: string;
//   name: string;
//   price: number;
//   size: string;
//   quantity: number;
//   onRemove: () => void;
//   onMoveToWishlist: () => void;
// }

// const CartItem: React.FC<CartItemProps> = ({ image, name, price, size, quantity, onRemove, onMoveToWishlist }) => {
//   return (
//     <div className="flex items-center justify-between border-b py-4">
//       <img src={image} alt={name} className="w-24 h-24 object-cover" />
//       <div className="flex-1 ml-4">
//         <h3 className="text-lg font-semibold">{name}</h3>
//         <p className="text-gray-600">₹{price} MRP incl. of all taxes</p>
//         <div className="flex space-x-4 mt-2">
//           <select className="border p-1" value={size}>
//             <option>XS</option>
//             <option>S</option>
//             <option>M</option>
//             <option>L</option>
//             <option>XL</option>
//           </select>
//           <select className="border p-1" value={quantity}>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//           </select>
//         </div>
//       </div>
//       <div className="flex space-x-2">
//         <button onClick={onRemove} className="text-red-500">REMOVE</button>
//         <button onClick={onMoveToWishlist} className="text-blue-500">MOVE TO WISHLIST</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
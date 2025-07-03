import React from "react";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  selected: boolean;
  onToggleSelect: () => void;
  onQuantityChange: (qty: number) => void;
  onRemove: () => void;
  onMoveToWishlist: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  price,
  quantity,
  selected,
  onToggleSelect,
  onQuantityChange,
  onRemove,
  onMoveToWishlist,
}) => {
  return (
    <div className="flex items-start gap-4 p-4 border-b">
      <input
        type="checkbox"
        checked={selected}
        onChange={onToggleSelect}
        className="mt-2"
      />
      <img src={image} alt={name} className="w-28 h-32 object-cover rounded" />
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <p className="font-semibold">{name}</p>
          <div className="text-right font-semibold">₹ {price}</div>
        </div>

        <div className="flex gap-4 mt-2">
          <div>
            <label className="text-sm text-gray-600">Qty:</label>
            <select
              className="border px-2 py-1 rounded"
              value={quantity}
              onChange={(e) => onQuantityChange(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={onRemove}
            className="w-1/7 border border-[#3A2E25] text-[#3A2E25] py-1 rounded-xl hover:bg-gray-100 cursor-pointer"
          >
            REMOVE
          </button>
          <button
            onClick={onMoveToWishlist}
            className="w-1/5 border border-[#3A2E25] text-[#3A2E25] py-1 rounded-xl hover:bg-gray-100 cursor-pointer"
          >
            MOVE TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

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
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 border-b ">
      <div className="flex-shrink-0 flex items-start gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelect}
          className="mt-1"
        />
        <img
          src={image}
          alt={name}
          className="w-28 h-32 object-cover rounded"
        />
      </div>

      <div className="flex flex-col flex-grow w-full">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <p className="font-semibold">{name}</p>
          <div className="font-semibold whitespace-nowrap">₹ {price}</div>
        </div>

        <div className="flex items-center gap-4 mt-3">
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

        <div className="flex gap-3 mt-4 flex-wrap">
          <button
            onClick={onRemove}
            className="border border-[#3A2E25] text-[#3A2E25] px-4 py-1 rounded-xl hover:bg-gray-100"
          >
            REMOVE
          </button>
          <button
            onClick={onMoveToWishlist}
            className="border border-[#3A2E25] text-[#3A2E25] px-4 py-1 rounded-xl hover:bg-gray-100"
          >
            MOVE TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React, { useState } from "react";

const CartSidebar: React.FC = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const [showVoucher, setShowVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  const [giftWrap, setGiftWrap] = useState(false);

  const [showPoints, setShowPoints] = useState(false);

  return (
    <div className="p-4 border rounded-md shadow-md bg-white max-w-md mx-auto">
      <button className="w-full bg-teal-700 text-white font-bold py-2 rounded">
        PLACE ORDER
      </button>

      <div className="mt-4 bg-purple-100 p-4 rounded-md">
        <p className="text-center font-bold text-pink-700 uppercase">
          You are missing out on!
        </p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm">
            Save an additional ₹274 by adding membership to your cart.
          </p>
          <button className="bg-gray-200 px-3 py-1 rounded text-sm">ADD</button>
        </div>
        <p className="text-sm mt-2 text-gray-600">Free shipping on all orders</p>
        <button className="text-blue-600 text-sm underline mt-1">
          View all benefits
        </button>
      </div>

      {/* Coupon */}
      <div className="mt-4 border-t pt-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowCoupon(!showCoupon)}
        >
          <span className="font-semibold">Apply Coupon</span>
          <span>{showCoupon ? "▲" : "▼"}</span>
        </div>
        {showCoupon && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Enter Code Here"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
            <button className="bg-teal-600 text-white px-3 py-1 rounded">
              APPLY
            </button>
          </div>
        )}
      </div>

      {/* Gift Voucher */}
      <div className="mt-4 border-t pt-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowVoucher(!showVoucher)}
        >
          <span className="font-semibold">Gift Voucher</span>
          <span>{showVoucher ? "▲" : "▼"}</span>
        </div>
        {showVoucher && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Enter Code Here"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
            <button className="bg-teal-600 text-white px-3 py-1 rounded">
              APPLY
            </button>
          </div>
        )}
      </div>

      {/* Gift Wrap */}
      <div className="mt-4 border-t pt-4 flex justify-between items-center">
        <span className="font-semibold">Gift Wrap (₹25)</span>
        <input
          type="checkbox"
          checked={giftWrap}
          onChange={() => setGiftWrap(!giftWrap)}
        />
      </div>

      {/* TSS Money / Points */}
      <div className="mt-4 border-t pt-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowPoints(!showPoints)}
        >
          <span className="font-semibold">TSS Money / TSS Points</span>
          <span>{showPoints ? "▲" : "▼"}</span>
        </div>
        {showPoints && (
          <div className="mt-2 text-sm text-gray-700 space-y-1">
            <div className="flex justify-between">
              <span>TSS Money</span>
              <span>(Active TSS Money: ₹0.00)</span>
            </div>
            <div className="flex justify-between">
              <span>TSS Points</span>
              <span>(Active TSS Points: 0.00)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;

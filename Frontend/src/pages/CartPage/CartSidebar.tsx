import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

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

      {/* Coupon */}
      <div className="mt-4 border-t pt-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowCoupon(!showCoupon)}
        >
          <span className="font-semibold">Apply Coupon</span>
          <span>{showCoupon ? <FaChevronUp/> : <FaChevronDown/>  }</span>
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
          <span>{showVoucher ? <FaChevronUp/> : <FaChevronDown/>}</span>
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
          <span>{showPoints ?<FaChevronUp/> : <FaChevronDown/>}</span>
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

import React, { useState, useMemo } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface CartSidebarProps {
  cartItems: {
    price: number;
    quantity: number;
    selected: boolean;
  }[];
}

const CartSidebar: React.FC<CartSidebarProps> = ({ cartItems }) => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [showVoucher, setShowVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);

  const cartTotal = useMemo(() => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const gst = +(cartTotal * 0.0986).toFixed(2);
  const giftWrapCharge = giftWrap ? 25 : 0;
  const totalAmount = cartTotal + gst + giftWrapCharge;

  return (
    <div className="p-4 border rounded-md shadow-sm bg-white w-full space-y-5">
      {/* Coupon */}
      <div>
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowCoupon(!showCoupon)}
        >
          <span className="font-semibold">Apply Coupon</span>
          <span>{showCoupon ? <FaChevronUp /> : <FaChevronDown />}</span>
        </div>
        {showCoupon && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Enter Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
            <button className="bg-[#3A2E25] text-white px-4 py-1 rounded-xl hover:bg-[#806552]">
              APPLY
            </button>
          </div>
        )}
      </div>

      {/* Voucher */}
      <div className="border-t pt-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowVoucher(!showVoucher)}
        >
          <span className="font-semibold">Gift Voucher</span>
          <span>{showVoucher ? <FaChevronUp /> : <FaChevronDown />}</span>
        </div>
        {showVoucher && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Enter Code"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
            <button className="bg-[#3A2E25] text-white px-4 py-1 rounded-xl hover:bg-[#806552]">
              APPLY
            </button>
          </div>
        )}
      </div>

      {/* Gift Wrap */}
      <div className="border-t pt-4 flex justify-between items-center">
        <span className="font-semibold">Gift Wrap (₹25)</span>
        <input
          type="checkbox"
          checked={giftWrap}
          onChange={() => setGiftWrap(!giftWrap)}
        />
      </div>

      {/* Billing */}
      <div className="border p-4 rounded bg-gray-50 space-y-2">
        <h3 className="text-sm font-semibold text-gray-500">BILLING DETAILS</h3>
        <div className="flex justify-between">
          <span>Cart Total</span>
          <span>₹ {cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>GST</span>
          <span>₹ {gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Charges</span>
          <span className="text-green-600 font-semibold">
            Free <span className="line-through text-sm text-gray-400">₹50.00</span>
          </span>
        </div>
        {giftWrap && (
          <div className="flex justify-between">
            <span>Gift Wrap</span>
            <span>₹25.00</span>
          </div>
        )}
        <div className="flex justify-between font-bold border-t pt-2 mt-2">
          <span>Total Amount</span>
          <span>₹ {totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-[#3A2E25] text-white py-2 rounded-xl hover:bg-[#806552]">
        PLACE ORDER
      </button>
    </div>
  );
};

export default CartSidebar;

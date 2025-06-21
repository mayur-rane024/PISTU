const Refund_and_Returns_Policy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf2e3] w-full sm:px-80 px-10 py-10 text-gray-800 flex-col rounded-lg text-center relative">
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute top-0 left-0 w-1/4 sm:w-1/5 h-auto opacity-60 mt-10"
      />
      <img
        alt="mandala right"
        src="./mandala-right.png"
        className="absolute top-0 right-0 w-1/4 sm:w-1/5 h-auto opacity-60 mt-10"
      />

      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
        Refund and Returns Policy
      </h1>
      <p className="mb-4 text-sm sm:text-base text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        At <strong>PISTU</strong>, we want to ensure your satisfaction with
        every purchase. If you are unsatisfied, we offer the following return
        and refund policy.
      </p>
      <div className="w-20 sm:w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <h2 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
        Returns
      </h2>
      <p className="mb-2 text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        Returns are accepted within 10 days from the date of delivery. Returned
        items must be unused, in original packaging, and in the same condition
        as received.
      </p>
      <p className="mb-4 text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        To initiate a return, please contact us at{" "}
        <a href="mailto:pistu.india@gmail.com" className="text-[#b98a69] underline">
          pistu.india@gmail.com
        </a>{" "}
        with your order number.
      </p>

      <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
        Refunds
      </h2>
      <p className="mb-4 text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        Upon receiving and inspecting the returned product, we will notify you
        of the approval or rejection of your refund.
      </p>
      <p className="mb-4 text-sm text-[#5e4c3f]"  style={{ fontFamily: "font6" }}>
        Approved refunds will be processed to your original payment method
        within 7–14 business days.
      </p>

      <h3 className="text-lg sm:text-xl font-bold mt-2 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
        Return Shipping
      </h3>
      <p className="mb-4 text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        Return shipping costs are the responsibility of the customer.
      </p>

      <p className="mt-8 text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        For further inquiries regarding this policy, please contact us at{" "}
        <a href="mailto:pistu.india@gmail.com" className="text-[#b98a69] underline">
          pistu.india@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Refund_and_Returns_Policy;
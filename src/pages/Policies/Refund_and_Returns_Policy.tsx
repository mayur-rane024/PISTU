const Refund_and_Returns_Policy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf2e3] px-80 py-10 w-full p-8 text-gray-800 flex-col rounded-lg text-center relative">
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute mt-10 left-0 top-0 w-1/5 h-auto opacity-60"
      />
           <img alt="mandala right" src="./mandala-right.png" className="absolute  mt-10 right-0 top-0 w-1/5 h-auto opacity-60" />

      
      <h1 className="text-3xl font-bold  mb-2" style={{ fontFamily: "font5" }}>
        Refund and Returns Policy
      </h1>
      <p className="mb-4" style={{ fontFamily: "font6" }}>
        At <strong>PISTU</strong>, we want to ensure your satisfaction with
        every purchase. If you are unsatisfied, we offer the following return
        and refund policy.
      </p>
 
      <h2
        className="text-xl font-bold mt-4 mb-2"
        style={{ fontFamily: "font5" }}
      >
        {" "}
        Returns
      </h2>
      <p className="mb-2" style={{ fontFamily: "font6" }}>
        Returns are accepted within 10 days from the date of delivery. Returned
        items must be unused, in original packaging, and in the same condition
        as received.
      </p>
      <p className="mb-4" style={{ fontFamily: "font6" }}>
        To initiate a return, please contact us at{" "}
        <a
          href="mailto:pistu.india@gmail.com"
          className="text-blue-600 underline"
        >
          pistu.india@gmail.com
        </a>{" "}
        with your order number.
      </p>

      <h2
        className="text-xl font-bold mt-2 mb-2"
        style={{ fontFamily: "font5" }}
      >
        Refunds
      </h2>
      <p className="mb-4" style={{ fontFamily: "font6" }}>
        Upon receiving and inspecting the returned product, we will notify you
        of the approval or rejection of your refund.
      </p>
      <p className="mb-4" style={{ fontFamily: "font6" }}>
        Approved refunds will be processed to your original payment method
        within 7-14 business days.
      </p>

      <h3
        className="text-xl font-bold mt-2 mb-2"
        style={{ fontFamily: "font5" }}
      >
        Return Shipping
      </h3>
      <p className="mb-4" style={{ fontFamily: "font6" }}>
        Return shipping costs are the responsibility of the customer.
      </p>

      <p className="mt-8 text-sm text-gray-500" style={{ fontFamily: "font6" }}>
        For further inquiries regarding this policy, please contact us at{" "}
        <a
          href="mailto:pistu.india@gmail.com"
          className="text-blue-600 underline"
        >
          pistu.india@gmail.com
        </a>
        .
      </p>
    </div>
  );
};
export default Refund_and_Returns_Policy;

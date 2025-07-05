import Footer from "../Footer";
import Navbar from "../Navbar";

const Shipping_Policy = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#fdf2e3]  w-full sm:px-80 px-10 py-10 text-gray-800 flex-col rounded-lg text-center relative">
        <img
          alt="mandala left"
          src="./mandala-left.png"
          className="absolute top-25 left-0 w-1/3 sm:w-1/4 md:w-1/5 h-auto opacity-60"
        />
        <img
          alt="mandala right"
          src="./mandala-right.png"
          className="absolute top-25 right-0 w-1/3 sm:w-1/4 md:w-1/5 h-auto opacity-60"
        />

        
        <h1
          className="text-2xl sm:text-3xl font-bold  mb-2 mt-15 text-[#342b24]"
          style={{ fontFamily: "font5" }}
        >
          Shipping Policy
        </h1>

        <p
          className="mb-4 text-sm sm:text-base text-[#5e4c3f]"
          style={{ fontFamily: "font6" }}
        >
          At <strong>PISTU</strong>, we are proud to offer worldwide shipping
          for all our handcrafted products.
        </p>

        <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

        <div className="w-full">
          <h2
            className="text-lg sm:text-xl font-bold mt-6 mb-2 text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            Processing Time
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            Orders are processed within 2–5 business days. Processing times may
            increase during peak seasons and on customization.
          </p>

          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            Shipping Methods and Costs
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            Shipping costs are calculated at checkout based on your delivery
            location and preferred shipping method. Estimated delivery times are
            3–10 business days depending on customization for domestic orders,
            and 10–15 business days for international orders.
          </p>

          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            Tracking Information
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            You will receive a tracking number via email once your order has
            shipped.
          </p>

          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            International Shipping
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            For international orders, customers are responsible for any customs
            duties, taxes, or fees that may apply upon delivery.
          </p>

          <p
            className="mt-8 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            For any inquiries related to shipping, please contact us at{" "}
            <a
              href="mailto:pistu.india@gmail.com"
              className="text-[#b98a69] underline"
            >
              <i>pistu.india@gmail.com</i>
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping_Policy;

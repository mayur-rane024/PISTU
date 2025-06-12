const Terms_Conditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-80 py-10 w-full p-8 text-gray-800 flex-col  rounded-lg text-center relative">


      <h1 className="text-3xl font-bold mb-6 mt-4" style={{ fontFamily: "font5" }}>
        Terms and Conditions
      </h1>

      <p className="mb-4" style={{ fontFamily: "font6" }}>
        <strong>Effective Date:</strong> [Insert Date]
      </p>
      <p className="mb-4" style={{ fontFamily: "font6" }}>
        Welcome to <strong>PISTU (Pigment Art and Design Studio)</strong>. By accessing or purchasing from our website, you agree to abide by the following terms and conditions.
      </p>

      <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <div className="px-25">
        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Use of Website
        </h2>
        <div className="text-sm" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            You may not use the content (including text, images, designs) of our website without prior written consent.
          </p>
          <p className="mb-4">
            We reserve the right to modify prices, descriptions, and availability of products at any time without notice.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Orders
        </h2>
        <div className="text-sm" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            All prices are listed in rupees and are subject to applicable taxes.
          </p>
          <p className="mb-4">
            Orders are processed upon successful payment, and you will receive an order confirmation via email.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Shipping
        </h2>
        <div className="text-sm" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            We offer worldwide shipping. Delivery times may vary based on customization, location, and method chosen.
          </p>
          <p className="mb-4">
            For international orders, customers are responsible for any customs duties or taxes incurred.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Returns and Refunds
        </h2>
        <div className="text-sm" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            You may return items within 10 days of receipt, provided they are not having physical damages except manufacturing defaults and are in original packaging.
          </p>
          <p className="mb-4">
            Refunds will be processed within 7–14 business days after we receive and inspect the returned items. Customers are responsible for return shipping fees.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Limitation of Liability
        </h2>
        <div className="text-sm" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            PISTU is not responsible for any damages or loss caused by the misuse of our products.
          </p>
          <p className="mb-4">
            While we strive to provide accurate product descriptions, we do not guarantee that all information is error-free.
          </p>
        </div>

        <div style={{ fontFamily: "font6" }}>
          <p className="mt-8 text-gray-500">
            For any queries or concerns, please contact us at{" "}
            <a href="mailto:pistu.india@gmail.com" className="text-blue-600 underline">
              <i>pistu.india@gmail.com</i>
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms_Conditions;

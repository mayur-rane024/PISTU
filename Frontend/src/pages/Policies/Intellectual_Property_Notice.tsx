const Intellectual_Property_Notice = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf2e3] sm:px-80 px-10 py-10 w-full h-auto text-gray-800 flex-col shadow-lg rounded-lg text-center relative">
      
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute mt-10 left-0 top-0 w-1/4 sm:w-1/5 h-auto opacity-60"
      />
      <img
        alt="mandala right"
        src="./mandala-right.png"
        className="absolute mt-10 right-0 top-0 w-1/4 sm:w-1/5 h-auto opacity-60"
      />

      <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "font5" }}>
        Intellectual Property Notice
      </h1>

      <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <div className="w-full">
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          All content on the <strong>PISTU</strong> website, including text,
          images, designs, and logos, is the intellectual property of{" "}
          <strong>PISTU</strong>. No content may be copied, reproduced, or
          distributed without our written consent.
        </p>

        <p
          className="mt-8 text-sm text-gray-500"
          style={{ fontFamily: "font6" }}
        >
          For inquiries related to intellectual property rights, please contact
          us at{" "}
          <a
            href="mailto:pistu.india@gmail.com"
            className="text-blue-600 underline"
          >
            <i>pistu.india@gmail.com</i>
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Intellectual_Property_Notice;

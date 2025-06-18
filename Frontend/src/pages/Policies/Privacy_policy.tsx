const Privacy_Policy = () => {
  return (
    <div className="relative mt-10 min-h-screen flex items-center justify-center bg-[#fdf2e3] w-full sm:px-80  px-10 py-10 text-gray-800 flex-col rounded-lg text-center">
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute top-40 left-0 w-1/3 sm:w-1/4 md:w-1/5 h-auto opacity-60"
      />
      <img
        alt="mandala right"
        src="./mandala-right.png"
        className="absolute top-40 right-0 w-1/3 sm:w-1/4 md:w-1/5 h-auto opacity-60"
      />

      <h1
        className="text-2xl sm:text-3xl text-[#342b24] font-bold mb-6 mt-4"
        style={{ fontFamily: "font5" }}
      >
        Privacy Policy
      </h1>

      <p className="mb-4 text-sm sm:text-base text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        At <strong>PISTU (Pigment Art and Design Studio)</strong>, we prioritize
        your privacy and are dedicated to safeguarding your personal
        information. This policy outlines how we collect, use, and protect your
        data when you interact with our website.
      </p>
      <div className="w-20 sm:w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <div className="w-full max-w-4xl px-2 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
          Information We Collect
        </h2>
        <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
          <p className="mb-2">Personal information (e.g., name, email, phone number) when you make a purchase or subscribe to our newsletter</p>
          <p className="mb-2">Payment details (e.g., credit card information) processed securely through third-party gateways</p>
          <p className="mb-4">Cookies and similar technologies to enhance your browsing experience</p>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
          How We Use Your Information
        </h2>
        <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
          <p className="mb-2">To fulfill orders and manage your account</p>
          <p className="mb-2">To send promotional materials with your consent</p>
          <p className="mb-4">To improve our website and enhance customer service</p>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
          Data Sharing
        </h2>
        <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
          <p className="mb-4">
            We do not sell or share your personal data with third parties, except
            for service providers such as payment processors and delivery
            services.
          </p>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
          Your Rights
        </h2>
        <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            You have the right to access, modify, or request deletion of your
            personal data. Please contact us at{" "}
            <a href="mailto:pistu.india@gmail.com" className="text-[#b98a69] underline">
              pistu.india@gmail.com
            </a>{" "}
            for such requests.
          </p>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]" style={{ fontFamily: "font5" }}>
          Cookies
        </h2>
        <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
          <p className="mb-2">
            Our website uses cookies to collect data for performance analytics.
            You can manage or disable cookies through your browser settings.
          </p>
        </div>

        <div style={{ fontFamily: "font6" }}>
          <p className="mt-8 text-sm text-gray-500">
            For further inquiries regarding this policy, please contact us at{" "}
            <a href="mailto:pistu.india@gmail.com" className="text-[#b98a69] underline">
              <i>pistu.india@gmail.com</i>
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy_Policy;

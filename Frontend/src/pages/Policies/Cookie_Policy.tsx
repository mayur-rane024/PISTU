const Cookie_Policy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf2e3] w-full sm:px-80 px-10 py-10 text-gray-800 flex-col rounded-lg text-center relative">
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
        Cookie Policy
      </h1>

      <p className="mb-4 text-sm sm:text-base" style={{ fontFamily: "font6" }}>
        At <strong>PISTU</strong>, we use cookies to enhance the user experience
        on our website.
      </p>

      <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <div className="w-full">
        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          What Are Cookies
        </h2>
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          Cookies are small files that are placed on your device when you visit
          a website. They help us track your activity and personalize your
          browsing experience.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Types of Cookies We Use
        </h2>
        <p className="mb-2 text-sm" style={{ fontFamily: "font6" }}>
          <strong>Essential Cookies:</strong> These are necessary for the
          functionality of our website.
        </p>
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          <strong>Analytics Cookies:</strong> These help us monitor how you
          interact with our website to improve our services.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Managing Cookies
        </h2>
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          You can control or disable cookies through your browser settings.
          Disabling cookies may affect the performance of certain features on
          our website.
        </p>

        <p className="mt-8 text-sm text-gray-500" style={{ fontFamily: "font6" }}>
          For further details, please contact us at{" "}
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

export default Cookie_Policy;

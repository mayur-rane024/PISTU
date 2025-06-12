const Disclaimer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff9f1] px-80 py-10 w-full bg-transparent p-8 text-gray-800 flex-col shadow-lg rounded-lg text-center relative">
      
      <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "font5" }}>
        Disclaimer
      </h1>

      <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <div className="px-25">
        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Website Content
        </h2>
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          The content on <strong>PISTU</strong>’s website is for informational purposes only. While we strive for accuracy, we do not guarantee that the information is current or error-free.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Product Usage
        </h2>
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          Our products are intended for personal use. <strong>PISTU</strong> is not responsible for any misuse of our products that results in damage or harm.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2" style={{ fontFamily: "font5" }}>
          Third-Party Links
        </h2>
        <p className="mb-4 text-sm" style={{ fontFamily: "font6" }}>
          Our website may contain links to third-party websites. We are not responsible for the content, practices, or privacy policies of those external sites.
        </p>

        <p className="mt-8 text-sm text-gray-500" style={{ fontFamily: "font6" }}>
          For more information, contact us at{" "}
          <a href="mailto:pistu.india@gmail.com" className="text-blue-600 underline">
            <i>pistu.india@gmail.com</i>
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;

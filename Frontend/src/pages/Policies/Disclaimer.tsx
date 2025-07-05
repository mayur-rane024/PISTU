import Footer from "../Footer";
import Navbar from "../Navbar";

const Disclaimer = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center sm:px-80 bg-[#fdf2e3] px-10 py-10 w-full text-gray-800 flex-col shadow-lg rounded-lg text-center relative">
        
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
          className="text-2xl sm:text-3xl font-bold mb-2 text-[#342b24]"
          style={{ fontFamily: "font5" }}
        >
          Disclaimer
        </h1>

        <div className="w-40 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

        <div className="w-full">
          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2  text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            Website Content
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            The content on <strong>PISTU</strong>’s website is for informational
            purposes only. While we strive for accuracy, we do not guarantee
            that the information is current or error-free.
          </p>

          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            Product Usage
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            Our products are intended for personal use. <strong>PISTU</strong>{" "}
            is not responsible for any misuse of our products that results in
            damage or harm.
          </p>

          <h2
            className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-[#342b24]"
            style={{ fontFamily: "font5" }}
          >
            Third-Party Links
          </h2>
          <p
            className="mb-4 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            Our website may contain links to third-party websites. We are not
            responsible for the content, practices, or privacy policies of those
            external sites.
          </p>

          <p
            className="mt-8 text-sm text-[#5e4c3f]"
            style={{ fontFamily: "font6" }}
          >
            For more information, contact us at{" "}
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

export default Disclaimer;

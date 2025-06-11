const Privacy_Policy = () => {
  return (
    <div className="mt-10 min-h-screen flex items-center justify-center bg-[#fff9f1] px-80 py-10 w-full bg-tranparent p-8 text-gray-800  flex-col  shadow-lg rounded-lg text-center">
      <img alt="mandala left" src="./mandala-left.png" className="absolute  mt-55 left-0 top-0 w-1/5 h-auto opacity-60" />
      <img alt="mandala right" src="./mandala-right.png" className="absolute  mt-55 right-0 top-0 w-1/5 h-auto opacity-60" />

      <h1
        className="text-3xl font-bold mb-6 mt-4"
        style={{ fontFamily: "font5" }}
      >
        Privacy Policy
      </h1>

      <p className="mb-4" style={{ fontFamily: "font6" }}>
        At <strong>PISTU (Pigment Art and Design Studio)</strong>, we prioritize
        your privacy and are dedicated to safeguarding your personal
        information. This policy outlines how we collect, use, and protect your
        data when you interact with our website.
      </p>
      <div className="w-40 h-0.5 bg-[#A37853] mx-auto  mb-3 mt-3"></div>
<div className="px-25"><h2
        className="text-xl font-semibold mt-6 mb-2"
        style={{ fontFamily: "font5" }}
      >
        Information We Collect
      </h2>
      <div className="text-sm" style={{ fontFamily: "font6" }}>
        {" "}
        <p className="mb-2">
          Personal information (e.g., name, email, phone number) when you make a
          purchase or subscribe to our newsletter
        </p>
        <p className="mb-2">
          Payment details (e.g., credit card information) processed securely
          through third-party gateways
        </p>
        <p className="mb-4">
          Cookies and similar technologies to enhance your browsing experience
        </p>
      </div>

      <h2
        className="text-xl font-semibold mt-6 mb-2"
        style={{ fontFamily: "font5" }}
      >
        How We Use Your Information
      </h2>
      <div className="text-sm" style={{ fontFamily: "font6" }}>
        {" "}
        <p className="mb-2">To fulfill orders and manage your account</p>
        <p className="mb-2">To send promotional materials with your consent</p>
        <p className="mb-4">
          To improve our website and enhance customer service
        </p>
      </div>

      <h2
        className="text-xl font-semibold mt-6 mb-2"
        style={{ fontFamily: "font5" }}
      >
        Data Sharing
      </h2>
      <div className="text-sm" style={{ fontFamily: "font6" }}>
        <p className="mb-4">
          We do not sell or share your personal data with third parties, except
          for service providers such as payment processors and delivery
          services.
        </p>
      </div>

      <h2
        className="text-xl font-semibold mt-4 mb-2"
        style={{ fontFamily: "font5" }}
      >
        Your Rights
      </h2>
      <div className="text-sm" style={{ fontFamily: "font6" }}>
        {" "}
        <p className="mb-2">
          You have the right to access, modify, or request deletion of your
          personal data. Please contact us at{" "}
          <a
            href="mailto:pistu.india@gmail.com"
            className="text-blue-600 underline"
          >
            pistu.india@gmail.com
          </a>{" "}
          for such requests.
        </p>
      </div>

      <h2
        className="text-xl font-semibold mt-6 mb-2"
        style={{ fontFamily: "font5" }}
      >
        Cookies
      </h2>
      <div className="text-sm" style={{ fontFamily: "font6" }}>
        <p className="mb-2">
          Our website uses cookies to collect data for performance analytics.
          You can manage or disable cookies through your browser settings.
        </p></div>
      
<div  style={{ fontFamily: "font6" }}><p className="mt-8 text- text-gray-500">
          For further inquiries regarding this policy, please contact us at{" "}
          <a
            href="mailto:pistu.india@gmail.com"
            className="text-blue-600 underline"
          ><i>pistu.india@gmail.com</i>
            
          </a>
          .
        </p></div>
        
      </div>
    </div>
  );
};

export default Privacy_Policy;

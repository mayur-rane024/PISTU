const Privacy_Policy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefefe] px-4 py-10">
      <div className=" w-full bg-white p-8 text-gray-800 flex-col flex justify-center items-center shadow-lg rounded-lg ">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
     

        <p className="mb-4">
          At <strong>PISTU (Pigment Art and Design Studio)</strong>, we prioritize your privacy and are dedicated to
          safeguarding your personal information. This policy outlines how we collect, use, and protect your
          data when you interact with our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Personal information (e.g., name, email, phone number) when you make a purchase or subscribe to our newsletter</li>
          <li>Payment details (e.g., credit card information) processed securely through third-party gateways</li>
          <li>Cookies and similar technologies to enhance your browsing experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>To fulfill orders and manage your account</li>
          <li>To send promotional materials with your consent</li>
          <li>To improve our website and enhance customer service</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
        <p className="mb-4">
          We do not sell or share your personal data with third parties, except for service providers such as
          payment processors and delivery services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, modify, or request deletion of your personal data. Please contact
          us at <a href="mailto:pistu.india@gmail.com" className="text-blue-600 underline">pistu.india@gmail.com</a> for such requests.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to collect data for performance analytics. You can manage or
          disable cookies through your browser settings.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          For further inquiries regarding this policy, please contact us at <a href="mailto:pistu.india@gmail.com" className="text-blue-600 underline">pistu.india@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy_Policy;

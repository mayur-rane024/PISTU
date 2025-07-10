const Footer2: React.FC = () => {
  return (
    <footer className="dark:bg-neutral-950 dark:text-white border-4 border-neutral-200 dark:border-neutral-900 py-4">
      <div className="max-w-7xl mx-auto px-4 rounded-lg text-center">
        {/* Main content */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Shop details (1st column) */}
          <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Shop Details</h3>
            <p>
              <strong>Phone:</strong> (+91) 86006-57206
            </p>
            <p>
              <strong>Email:</strong> PISTU@gmail.com
            </p>
            <p>
              <strong>Address:</strong> S10, Dhruvadarshan Society, Sector No. 26, Pradhikaran, Nigdi, Pune, Pimpri-Chinchwad, Maharashtra 411044
            </p>
            <p>
              <strong>Hours:</strong> All days, 09:00 AM - 05:00 PM
            </p>
          </div>

          {/* Resources (2nd column) */}
          <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Resources</h3>
            <p>
              <a href="/policies" className="text-blue-500 font-semibold hover:text-blue-800">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="/termsandconditions" className="text-blue-500 font-semibold hover:text-blue-800">
                Terms and Conditions
              </a>
            </p>
            <p>
              <a href="/rrp" className="text-blue-500 font-semibold hover:text-blue-800">
                Refund and Returns Policy
              </a>
            </p>
            <p>
              <a href="/sp" className="text-blue-500 font-semibold hover:text-blue-800">
                Shipping Policy
              </a>
            </p>
            <p>
              <a href="/cookie" className="text-blue-500 font-semibold hover:text-blue-800">
                Cookie Policy
              </a>
            </p>
            <p>
              <a href="/disclaimer" className="text-blue-500 font-semibold hover:text-blue-800">
                Disclaimer
              </a>
            </p>
            <p>
              <a href="/ipn" className="text-blue-500 font-semibold hover:text-blue-800">
                Intellectual Property Notice
              </a>
            </p>
            {/* <p>
              <strong>Helpline:</strong> (+91) 86006-57206
            </p>
            <p>
              <strong>Email:</strong> PISTU@gmail.com
            </p> */}
          </div>

          {/* Map (3rd column) */}
          <div className="w-full md:w-1/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2513882722646!2d73.7586508751949!3d18.652711882466686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c696f25fa9%3A0x3af207cf16fecd20!2sPistu!5e0!3m2!1sen!2sin!4v1736775647576!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


          </div>
        </div>

        {/* Rights Reserved message */}
        <p className="mt-2 text-center">
          &copy; {new Date().getFullYear()} Pistu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;

import React from "react";
import { FaStar, FaClock, FaCube } from "react-icons/fa";
// import {ReactComponent as clock } from "./../../public/clock.svg"

const OurPromise: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-serif text-brown-800 mb-4">Our Promise</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        When you choose PISTU, you're choosing more than a product. You're choosing our commitment to:
      </p>
      <div className="h-0.5 w-12 bg-brown-800 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Exceptional Quality */}
        <div className="flex flex-col items-center">
          <div className="bg-brown-100 rounded-full p-5 mb-4">
            <FaStar className="text-brown-600 text-2xl" />
          </div>
          <h3 className="text-xl font-serif text-brown-800 mb-2">Exceptional Quality</h3>
          <p className="text-gray-700 max-w-sm">
            We use only the finest materials and employ master craftsmen who take pride in their work.
          </p>
        </div>

        {/* Timeless Durability */}
        <div className="flex flex-col items-center">
          <div className="bg-brown-100 rounded-full p-5 mb-4">
            {/* <clock/>  */}
          </div>
          <h3 className="text-xl font-serif text-brown-800 mb-2">Timeless Durability</h3>
          <p className="text-gray-700 max-w-sm">
            Our products are designed and crafted to last, becoming more beautiful with age and use.
          </p>
        </div>

        {/* Unique Character */}
        <div className="flex flex-col items-center">
          <div className="bg-brown-100 rounded-full p-5 mb-4">
            <FaCube className="text-brown-600 text-2xl" />
          </div>
          <h3 className="text-xl font-serif text-brown-800 mb-2">Unique Character</h3>
          <p className="text-gray-700 max-w-sm">
            Each piece carries the unique characteristics of the leather and the signature of our artisans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;

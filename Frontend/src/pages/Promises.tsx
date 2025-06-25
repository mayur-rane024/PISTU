import React from "react";
import { FaCube } from "react-icons/fa";
import { Clock } from "lucide-react";
import { Stars } from "lucide-react";

const OurPromise: React.FC = () => {
  return (
    <section className="bg-white/90 backdrop-blur-lg py-16 px-4 min-h-[120vh] sm:min-h-[85vh] md:min-h-[85vh] lg:min-h-[70vh] text-center relative">
      {/* Mobile-only top mandala */}
      <img
        alt="mandala top"
        src="./mandala-top.png"
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-3/4 h-auto opacity-55 md:hidden"
      />

      {/* Desktop-only side mandalas */}
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute left-0 top-0 w-1/6 h-auto opacity-55 hidden md:block lg:w-1/5 xl:w-1/6"
      />
      <img
        alt="mandala right"
        src="./mandala-right.png"
        className="absolute right-0 top-0 w-1/6 h-auto opacity-55 hidden md:block lg:w-1/5 xl:w-1/6"
      />
      <div className="relative z-10">
        <h2
          className="text-4xl sm:text-5xl text-[#342b24] mb-4"
          style={{ fontFamily: "font5" }}
        >
          Our Promise
        </h2>
        <p
          className="text-lg sm:text-xl text-[#5e4c3f] max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "font6" }}
        >
          When you choose PISTU, you're choosing more than a product. You're
          choosing our commitment to:
        </p>
        <div className="w-20 h-0.5 bg-[#A37853] mx-auto mb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Exceptional Quality */}
          <div className="flex flex-col items-center p-4">
            <div className="bg-[#fff9f1] rounded-full p-5 mb-4 border-[#fff0db] border-2 shadow-[inset_0_2px_10px_#ffe9ca]">
              <Stars className="w-8 h-8 text-[#c6a26b]" />
            </div>
            <h3
              className="text-2xl sm:text-3xl text-[#342b24] mb-2"
              style={{ fontFamily: "font6" }}
            >
              Exceptional Quality
            </h3>
            <p
              className="text-[#5e4c3f] max-w-xs sm:max-w-sm text-sm sm:text-base"
              style={{ fontFamily: "font6" }}
            >
              We use only the finest materials and employ master craftsmen who
              take pride in their work.
            </p>
          </div>

          {/* Timeless Durability */}
          <div className="flex flex-col items-center p-4">
            <div className="bg-[#fff9f1] rounded-full p-5 mb-4 border-[#fff0db] border-2 shadow-[inset_0_2px_10px_#ffe9ca]">
              <Clock className="w-8 h-8 text-[#c6a26b]" />
            </div>
            <h3
              className="text-2xl sm:text-3xl text-[#342b24] mb-2"
              style={{ fontFamily: "font6" }}
            >
              Timeless Durability
            </h3>
            <p
              className="text-[#5e4c3f] max-w-xs sm:max-w-sm text-sm sm:text-base"
              style={{ fontFamily: "font6" }}
            >
              Our products are designed and crafted to last, becoming more
              beautiful with age and use.
            </p>
          </div>

          {/* Unique Character */}
          <div className="flex flex-col items-center mt-2 p-4">
            <div className="bg-[#fff9f1] rounded-full p-5 mb-4 border-[#fff0db] border-b-2 shadow-[inset_0_0px_10px_#ffe9ca]">
              <FaCube className="text-[#c6a26b] text-2xl" />
            </div>
            <h3
              className="text-2xl sm:text-3xl text-[#342b24] mb-2"
              style={{ fontFamily: "font6" }}
            >
              Unique Character
            </h3>
            <p
              className="text-[#5e4c3f] max-w-xs sm:max-w-sm text-sm sm:text-base"
              style={{ fontFamily: "font6" }}
            >
              Each piece carries the unique characteristics of the leather and
              the signature of our artisans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
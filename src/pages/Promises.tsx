import React from "react";
import { FaCube } from "react-icons/fa";
import { Clock } from "lucide-react";
import { Stars } from "lucide-react";


const OurPromise: React.FC = () => {
  return (
    <section className="bg-white/90 backdrop-blur-lg py-16 px-4 text-center">
      <h2 className="text-4xl text-[#342b24] mb-4" style = {{fontFamily : "font5"}}>Our Promise</h2>
      <p className="text-lg text-[#3A2E25] max-w-2xl mx-auto mb-12" style = {{fontFamily : "font6"}}>
        When you choose PISTU, you're choosing more than a product. You're
        choosing our commitment to:
      </p>
        <div className="w-20 h-0.5 bg-[#A37853] mx-auto  mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Exceptional Quality */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fff9f1] rounded-full p-5 mb-4 border-[#fff0db] border-2 shadow-[inset_0_2px_10px_#ffe9ca] ">
            <Stars className="w-8 h-8 text-[#c6a26b] " />
          </div>

          <h3 className="text-2xl font-serif text-[#342b24] mb-2" style = {{fontFamily : "font6"}}>
            Exceptional Quality
          </h3>
          <p className="text-[#3A2E25] max-w-sm text-sm" style = {{fontFamily : "font6"}}>
            We use only the finest materials and employ master craftsmen who
            take pride in their work.
          </p>
        </div>

        {/* Timeless Durability */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fff9f1] rounded-full p-5 mb-4 border-[#fff0db] border-2 shadow-[inset_0_2px_10px_#ffe9ca] ">
            <Clock className="w-8 h-8 text-[#c6a26b] " />
          </div>
          <h3 className="text-2xl font-serif text-[#342b24] mb-2" style = {{fontFamily : "font6"}}>
            Timeless Durability
          </h3>
          <p className="text-[#3A2E25] max-w-sm text-sm" style = {{fontFamily : "font6"}}>
            Our products are designed and crafted to last, becoming more
            beautiful with age and use.
          </p>
        </div>

        {/* Unique Character */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fff9f1] rounded-full border-[#fff0db] border-2 p-5 mb-4 shadow-[inset_0_2px_10px_#ffe9ca] ">
            <FaCube className="text-[#c6a26b] text-2xl" />
          </div>
          <h3 className="text-2xl font-serif text-[#342b24] mb-2" style = {{fontFamily : "font6"}}>
            Unique Character
          </h3>
          <p className="text-[#3A2E25] max-w-sm text-sm" style = {{fontFamily : "font6"}}>
            Each piece carries the unique characteristics of the leather and the
            signature of our artisans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;

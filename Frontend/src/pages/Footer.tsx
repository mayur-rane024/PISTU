import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3A2A1B] text-white py-12 px-6 md:px-16 "> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand Info */}
        <div>
          <img
            src="/logo.png"
            alt="PISTU Logo"
            className="h-16 mb-4 invert-[0.50] "
          />
          <p className="text-sm text-gray-200" style={{ fontFamily: "font6" }}>
            Pigment Art and Design Studio. Handcrafted luxury leather goods
            combining art, craftsmanship, and luxury.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#daaa66]">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#daaa66]">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#daaa66]">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-3  text-[#fbe8c7]" style={{ fontFamily: "font5" }}>
            Explore
          </h3>
          <ul
            className="space-y-2 text-sm text-gray-200"
            style={{ fontFamily: "font6" }}
          >
            <li>
              <a href="#products" className="hover:text-[#daaa66]">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#daaa66]">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#daaa66]">
                Our Craft
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#daaa66]">
                Brand Story
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#daaa66]">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg  mb-3 text-[#fbe8c7]" style={{ fontFamily: "font5" }}>
            Contact
          </h3>
          {/* <ul className="space-y-2 text-sm text-gray-200"> */}
            <ul
              className="space-y-2 text-sm text-gray-200"
              style={{ fontFamily: "font6" }}
            >
              <li>
                <a href="#contact" className="hover:text-[#daaa66]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#daaa66]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-[#daaa66]">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#daaa66]">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#daaa66]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          {/* </ul> */}
        </div>

        <div>
          <h3 className="text-lg  mb-3 text-[#fbe8c7]" style={{ fontFamily: "font5" }}>
            Contact
          </h3>
          <ul
            className="space-y-2 text-sm text-gray-300"
            style={{ fontFamily: "font6" }}
          >
            <li>PISTU Studio, Koregaon Park, Pune 411001, India</li>
            <li>+91 98765 43210</li>
            <li>hello@pistu.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t-2  border-[#302003] pt-6 text-sm text-gray-500 text-center">
        © 2025 PISTU - Pigment Art and Design Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
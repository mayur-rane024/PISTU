// pages/Navbar.tsx
import { FiShoppingBag } from "react-icons/fi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav?.classList.add("bg-white");
      } else {
        nav?.classList.remove("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    navigate("/newpage");
  };

  return (
    <nav className=" bg-black/20 backdrop-blur-md transition-all duration-200 h-20  text-[#d7b788] outline-none  border-none fixed top-0 w-screen z-10 inset-y-0">
      <div className="container mx-auto  flex justify-between items-center">
        <div className="flex items-start gap-2">
          <h1 className="text-xl tracking-wider">
            <img src="./logo.png" className="h-16 " alt="logo" />
          </h1>
        </div>

        <div className="flex justify-end items-center gap-8">
          <ul
            className="flex gap-8 text-sm font-medium"
            style={{ fontFamily: "font6" }}
          >
            <li>
              <a href="#products" className="hover:text-[#3A2A1B]">
                PRODUCTS
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#3A2A1B]">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#craft" className="hover:text-[#3A2A1B]">
                CRAFT
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#3A2A1B]">
                CONTACT
              </a>
            </li>
          </ul>

          <FiShoppingBag className="text-2xl cursor-pointer hover:text-[#d7b788]" />

          {/* 🚀 Toggle button that navigates */}
          {/* <button
            onClick={handleToggle}
            className="text-sm px-4 py-2 border rounded hover:bg-[#b89242] hover:text-white transition-all duration-200"
          >
            Go to New Page
          </button> */}

          {/* Double DOT Navigating Image */}
          <img
            src="./Logo2.png"
            alt="Go to New Page"
            onClick={handleToggle}
            className="h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  // const [isToggleActive, setIsToggleActive] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  // const toggleActive = () => setIsToggleActive(!isToggleActive);

  useEffect(() => {
    const handleClickOutsideSidebar = (event: { target: any }) => {
      if (
        isMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideSidebar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutsideSearch = (event: { target: any }) => {
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideSearch);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [isSearchOpen]);

  const categories = [
    "Category",
    "Care",
    "Blogs",
    {
      title: "About Us",
      items: [
        "About Pistu",
        "Privacy Policy",
        "Terms and Conditions",
        "Refund and Returns Policy",
        "Shipping Policy",
        "Cookie Policy",
        "Disclaimer",
        "Intellectual Property Notice",
      ],
    },
    // "Team",
  ];

  // const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];

  const policyLinks = [
    { name: "General Care", id: "general-care" },
    { name: "Cleaning", id: "cleaning" },
    { name: "Conditioning", id: "conditioning" },
    { name: "Storage", id: "storage" },
    { name: "Protection", id: "protection" },
    { name: "Repairs", id: "repairs" },
  ];

  return (
    <nav className="bg-[#f5e6cc] h-20 shadow-md text-[#4d3716] fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-4 min-w-0">
        {/* Left Side */}
        <div className="flex items-center gap-2 md:gap-8 min-w-0">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none block"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Search */}
          <div className="relative w-80 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-[#4d3716] left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="hidden md:block pl-10 w-68 border-2 border-[#4d3716]"
            />
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute pl-4 left-1/2 transform -translate-x-1/2">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" className="h-14 md:h-15" alt="logo" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <Link to="/cart">
            <div className="h-[34px] w-10 bg-school-bag cursor-pointer" />
          </Link>
          <Link to="/profile">
            <img
              src="/login.png"
              alt="Login"
              onClick={() => console.log("Login Clicked")}
              onMouseEnter={(e) => (e.currentTarget.src = "/login-hover.png")}
              onMouseLeave={(e) => (e.currentTarget.src = "/login.png")}
              className="h-8 w-8 md:h-10 md:w-10 cursor-pointer transition duration-200"
            />
          </Link>
          <Link to="/wishlist">
            <CiHeart className="h-8 w-8 md:h-10 md:w-10 cursor-pointer hover:text-[#d7b788]" />
          </Link>
        </div>
      </div>

      {/* Care Navigation Bar */}
      {location.pathname === "/care" && (
        <div className="border-2 border-b-amber-50 h-auto bg-black/5 backdrop-blur-lg w-full">
          <ul
            className="flex flex-wrap justify-center gap-6 py-2"
            style={{ fontFamily: "font6" }}
          >
            {policyLinks.map((link, index) => (
              <li
                key={index}
                className="text-center text-sm md:text-md font-medium text-[#4d3716]"
              >
                <Link
                  to={`#${link.id}`}
                  className="hover:text-[#d7b788] px-2 py-1 block"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.id);
                    if (element) {
                      const yOffset = -120; // Adjust offset as needed
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mini Navigation for Policies (Top-Right) */}
      {/* {location.pathname === "/policies" && (
        <div className="fixed top-20 right-3 w-25 h-30 sm:w-48 bg-transparent shadow-lg rounded-md z-40 ">
          <ul className="text-sm text-[#4d3716]">
            {policyLinks.map((link, index) => (
              <li key={index} className="py-1">
                <Link
                  to={`#${link.id}`}
                  className="block hover:text-[#3A2A1B] px-2 py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Sidebar for mobile */}
      <div
        ref={sidebarRef}
        className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-[75%] max-w-xs bg-[#f5e6cc] shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <ul
            className="text-sm md:text-lg font-medium divide-y  divide-[#A37853] px-2 md:px-4"
            style={{ fontFamily: "font6" }}
          >
            {categories.map((category, index) =>
              typeof category === "string" ? (
                <li key={index} className="py-3">
                  <Link
                    to={`/${category
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^a-z-]/g, "")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block hover:text-[#3A2A1B]"
                  >
                    {category}
                  </Link>
                </li>
              ) : (
                <li key={index} className="py-2">
                  <button
                    onClick={toggleAbout}
                    className="flex items-center justify-between w-full py-2 hover:text-[#3A2A1B]"
                  >
                    {category.title}
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        isAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isAboutOpen
                        ? "max-h-100 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {category.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="pl-4 py-1">
                        <Link
                          to={`/${subItem
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^a-z-]/g, "")}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm py-1 hover:text-[#3A2A1B]"
                        >
                          {subItem}
                          <div className="w-100 h-[0.1vh] bg-[#A37853] mt-1"></div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => {
            setIsMenuOpen(false);
            setIsAboutOpen(false);
          }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

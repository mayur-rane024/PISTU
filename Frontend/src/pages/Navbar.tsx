import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isToggleActive, setIsToggleActive] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleActive = () => setIsToggleActive(!isToggleActive);

  useEffect(() => {
    const handleClickOutsideSidebar = (event: { target: any; }) => {
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
    const handleClickOutsideSearch = (event: { target: any; }) => {
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
    { title: "About Us", items: ["About Pistu", "Policies", "Care"] },
    "Team",
  ];

  const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];

  const policyLinks = [
    { name: "Privacy Policy", id: "privacy-policy" },
    { name: "Terms and Conditions", id: "terms-and-conditions" },
    { name: "Refund and Returns Policy", id: "refund-and-returns-policy" },
    { name: "Shipping Policy", id: "shipping-policy" },
    { name: "Cookie Policy", id: "cookie-policy" },
    { name: "Disclaimer", id: "disclaimer" },
    { name: "Intellectual Property Notice", id: "intellectual-property-notice" },
  ];

  return (
    <nav className="bg-[#f5e6cc] h-20 shadow-md text-[#4d3716] fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none block"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Search */}
          <div ref={searchRef} className="hidden md:flex flex-col relative">
            <div className="flex items-center">
              <button
                onClick={toggleSearch}
                className="ml-2 p-0 bg-transparent border-none cursor-pointer"
                onMouseEnter={(e) => {
                  const img = e.currentTarget.firstChild;
                  if (img) (img as HTMLImageElement).src = "/search-hover.png";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.firstChild;
                  if (img) (img as HTMLImageElement).src = "/search.png";
                }}
              >
                <img src="/search.png" alt="Search" className="h-7 w-7" />
              </button>
              {isSearchOpen && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="ml-2 w-64 h-8 px-4 text-sm bg-white rounded-md outline-none border-none transition-all duration-300"
                />
              )}
            </div>
            {isSearchOpen && (
              <div className="absolute top-10 left-10 w-64 bg-white shadow-md rounded-md z-40">
                <ul className="p-2 text-sm">
                  {suggestions.map((sug, i) => (
                    <li
                      key={i}
                      className="py-1 hover:bg-gray-100 cursor-pointer"
                    >
                      {sug}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="./logo.png" className="h-14 md:h-15" alt="logo" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1 md:gap-4">
          <div className="h-8.5 w-10 bg-school-bag cursor-pointer" />
          <img
            src="./login.png"
            alt="Login"
            onClick={() => console.log("Login Clicked")}
            onMouseEnter={(e) => (e.currentTarget.src = "./login-hover.png")}
            onMouseLeave={(e) => (e.currentTarget.src = "./login.png")}
            className="h-8 w-8 md:h-10 md:w-10 cursor-pointer transition duration-200"
          />
          <button
            onClick={toggleActive}
            className="relative w-8 h-5 md:w-12 md:h-6 bg-[#000000] rounded-full items-center focus:outline-none"
          >
            <span
              className={`absolute left-1 top-1 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isToggleActive ? "translate-x-3 md:translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Policies Navigation Bar */}
      {location.pathname === "/policies" && (
        <div className="border-2 border-b-amber-50 h-auto bg-black/5 backdrop-blur-lg w-full">
          <ul className="flex flex-wrap justify-center gap-4 py-2">
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
            className="text-sm md:text-md font-medium divide-y divide-[#A37853] px-2 md:px-4"
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
                      isAboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
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
                          className="block hover:text-[#3A2A1B]"
                        >
                          {subItem}
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
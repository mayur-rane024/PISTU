import { useState, useEffect, useRef } from "react";
import { FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const handleToggle = () => console.log("Navigating to new page");

  useEffect(() => {
    const handleClickOutsideSidebar = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideSidebar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutsideSearch = (event: MouseEvent) => {
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
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
    "Categories",
    "Products",
    "Policies",
    "Care",
    "About Pistu",
    "Team",
    "Login Up"
  ];

  const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];

  return (
    <nav className="bg-[#f5e6cc] h-20 shadow-sm text-[#4d3716] fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Menu Button - always visible for now */}
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none block"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Search Bar */}
          <div ref={searchRef} className="hidden md:flex flex-col relative">
            <div className="flex items-center">
              <button
                onClick={toggleSearch}
                className="text-2xl ml-2"
              >
                <FiSearch />
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
                    <li key={i} className="py-1 hover:bg-gray-100 cursor-pointer">
                      {sug}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src="./logo.png" className="h-14" alt="logo" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <FiShoppingBag className="text-2xl cursor-pointer hover:text-[#d7b788]" />
          <img
            src="./Logo2.png"
            alt="Go to New Page"
            onClick={handleToggle}
            className="h-12 sm:h-16 w-auto cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        ref={sidebarRef}
        className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-[75%] max-w-xs bg-[#f5e6cc] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          {/* Mobile Search */}
          <div className="mb-4" ref={searchRef}>
            <div className="flex items-center bg-white rounded-md px-2 py-1">
              <FiSearch className="text-xl mr-2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 outline-none text-sm bg-transparent"
              />
            </div>
            <div className="mt-1 bg-white shadow rounded-md">
              <ul className="p-2 text-sm">
                {suggestions.map((sug, i) => (
                  <li key={i} className="py-1 hover:bg-gray-100 cursor-pointer">
                    {sug}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Menu Links */}
          <ul className="text-md font-medium divide-y divide-[#A37853]" style={{ fontFamily: "font6" }}>
            {categories.map((category, index) => {
              const path =
                "/" +
                category.toLowerCase().replace(/ /g, "-").replace(/[^a-z-]/g, "");
              return (
                <li key={index} className="py-2">
                  <Link
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block hover:text-[#3A2A1B]"
                  >
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

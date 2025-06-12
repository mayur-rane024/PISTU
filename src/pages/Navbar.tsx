import React, { useState, useEffect, useRef } from "react";
import { FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  //  Add proper types for refs
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleToggle = () => {
    console.log("Navigating to new page");
  };

  //  Close sidebar when clicking outside
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

  //  Close search when clicking outside
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
    "Vision / Mission",
    "Signout",
  ];

  return (
    <nav className="bg-[#f5e6cc] backdrop-blur-md transition-all duration-100 h-20 shadow-sm text-[#4d3716] outline-none fixed border-none top-0 w-screen z-20 inset-y-0">
      <div className="container mx-auto flex justify-between items-center h-full px-2">
        {/* Left Side - Menu and Search */}
        <div className="flex items-center gap-4">
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none ml-8 cursor-pointer"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Search Icon and Search Bar */}
          <div ref={searchRef} className="relative flex items-center">
            <button
              onClick={toggleSearch}
              className="text-2xl focus:outline-none ml-4 cursor-pointer"
            >
              <FiSearch />
            </button>
            <div
              className={`ml-2 transition-all duration-300 ease-in-out ${
                isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-8 px-4 text-sm outline-none border-none bg-white rounded-md"
              />
            </div>

            {/* Suggestions */}
            {isSearchOpen && (
              <div className="absolute top-8 left-0 w-64 bg-white shadow-md rounded-md z-30 ml-12">
                <ul className="p-2 text-sm">
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Suggestion 1</li>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Suggestion 2</li>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Suggestion 3</li>
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Menu */}
          <div
            ref={sidebarRef}
            className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-64 bg-[#f5e6cc] shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul
              className="flex flex-col p-4 text-md font-medium divide-y divide-[#A37853]"
              style={{ fontFamily: "font6" }}
            >
              {categories.map((category, index) => {
                const path =
                  "/" +
                  category
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^a-z-]/g, "");

                return (
                  <li key={index} className="py-2">
                    <Link
                      to={path}
                      className="hover:text-[#3A2A1B] transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl tracking-wider">
            <img src="./logo.png" className="h-14" alt="logo" />
          </Link>
        </div>

        {/* Right Side - Shopping Bag and Logo2 */}
        <div className="flex items-center gap-4">
          <FiShoppingBag className="text-2xl cursor-pointer hover:text-[#d7b788] transition-colors duration-200" />
          <img
            src="./Logo2.png"
            alt="Go to New Page"
            onClick={handleToggle}
            className="h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

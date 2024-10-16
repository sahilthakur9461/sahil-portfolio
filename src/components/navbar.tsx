"use client";
import { BiMenuAltRight } from "react-icons/bi"; 
import { IoMdClose } from "react-icons/io"; 
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full my-6 relative">
      <div className="flex justify-between items-center md:px-10">
        <span className="text-3xl font-bold text-[#ffc86a] cursor-pointer">
          &lt;/&gt; Sahil
        </span>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <IoMdClose size={40} /> // Close (cancel) icon
            ) : (
              <BiMenuAltRight size={40} /> // Menu icon
            )}
          </button>
        </div>
        <ul
          className={`hidden lg:flex gap-8 text-xl navbar text-white font-bold`}
        >
          <a href="home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skill"><li>Skills</li></a>
          <a href="#project"><li>Project</li></a>
        </ul>
      </div>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={toggleMenu} // Close menu when clicking on the overlay
      ></div>
      {/* Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 text-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col gap-4 items-center navbar text-2xl font-bold mt-16">
        <a href="home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skill"><li>Skills</li></a>
          <a href="#project"><li>Project</li></a>
          <a href=""><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  );
}

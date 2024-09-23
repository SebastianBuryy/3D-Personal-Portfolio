import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className="nav-li">
            <a
              href={href}
              className="nav-li_a"
              onClick={() => {
                href;
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/95 flex justify-between items-center py-5 rounded-xl mx-auto c-space shadow-md shadow-white-600">
          <div className="flex items-center gap-3">
            <img src="/sb-circle-logo.png" className="w-8 h-8" alt="logo" />
            <a
              href="/"
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            >
              Sebastian Bury
            </a>
          </div>

          <button
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

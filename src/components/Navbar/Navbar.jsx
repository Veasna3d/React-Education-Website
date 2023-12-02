import React from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-20">
      <div>
        <div className="container py-4  mx-auto flex items-center justify-between px-2">
          <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" />
          <div className="text-xl text-Teal uppercase tracking-wide font-bold">
            Skillex
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

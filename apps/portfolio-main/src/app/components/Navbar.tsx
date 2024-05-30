"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-6">
        <Link
          href="/"
          className="text-3xl md:text-4xl text-white font-semibold  "
        >
          Daytuner
        </Link>
        <div className="md:hidden mobile-menu block">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          ) : (
            <button className="flex items-center px-3 py-2 text-slate-200 rounded border-slate-200 hover:text-white hover:border-white">
              <XMarkIcon
                onClick={() => setNavbarOpen(false)}
                className="h-8 w-8"
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex  p-4 md:flex-row md:p-0 md:space-x-8  mt-0">
            <li>
              <Link
                href={"/"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"/projects"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex  py-4 flex-col items-center ">
          <li>
            <Link
              href={"#about"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href={"#projects"}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
            >
              Projects
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

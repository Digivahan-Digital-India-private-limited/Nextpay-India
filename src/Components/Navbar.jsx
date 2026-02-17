import React, { useState } from "react";
import Companylogo from "../assets/Image/nextpay.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">
          <img src={Companylogo} alt="NextPay Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            Home
          </Link>
          <Link to="/loan-page" className="hover:text-blue-600 cursor-pointer">
            Services
          </Link>
          <Link to="/about-page" className="hover:text-blue-600 cursor-pointer">
            About
          </Link>
          <Link
            to="/contact-page"
            className="hover:text-blue-600 cursor-pointer"
          >
            Contact
          </Link>
        </ul>

        {/* Apply Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918279861949?text=Hi%20Team,%0A%0AI%20would%20like%20to%20connect%20with%20your%20expert%20team%20to%20discuss%20my%20loan%20requirements%20and%20understand%20the%20best%20available%20options.%20I%20request%20you%20to%20please%20guide%20me%20with%20personalized%20assistance%20and%20complete%20details.%0A%0AThank%20you.%20I%20look%20forward%20to%20speaking%20with%20your%20expert%20team"
            className="bg-linear-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Talk To Expert
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 px-6 py-4 text-slate-700 font-medium">
            <Link
              onClick={() => setOpen(!open)}
              to="/"
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              to="/loan-page"
              className="hover:text-blue-600 cursor-pointer"
            >
              Services
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              to="/about-page"
              className="hover:text-blue-600 cursor-pointer"
            >
              About
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              to="/contact-page"
              className="hover:text-blue-600 cursor-pointer"
            >
              Contact
            </Link>
            <button className="mt-2 bg-linear-to-r from-blue-600 to-teal-500 text-white py-2 rounded-full">
              Apply Now
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

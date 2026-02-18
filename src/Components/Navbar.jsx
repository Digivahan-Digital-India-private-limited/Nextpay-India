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

        {/* Apply Button + Admin Login */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/admin"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            Admin Login
          </Link>
          <a
            href={`https://wa.me/919999838802?text=${encodeURIComponent("Hi Team,\n\nI would like to connect with your expert team to discuss my loan requirements and understand the best available options. I request you to please guide me with personalized assistance and complete details.\n\nThank you. I look forward to speaking with your expert team soon.")}`}
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

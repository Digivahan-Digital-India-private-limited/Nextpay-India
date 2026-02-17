import React from "react";
import { Link } from "react-router-dom";
import AboutUsImage from "../../assets/Image/about_us_summary.png";

function Aboutpage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div className="relative">
          {/* Decorative dots */}
          <div className="absolute -top-10 -left-10 hidden md:grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-blue-600 rounded-full"
              ></span>
            ))}
          </div>

          <h4 className="text-blue-600 font-semibold mb-3">About Us</h4>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            We Help You Achieve Financial Freedom
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            NextPay is a trusted digital loan platform that helps people across
            India get fast and easy access to loans through leading banks and
            NBFCs. We bring multiple loan options together on one secure
            platform, offering quick approvals, minimal documentation, and
            transparent processes. Designed for all Indians, NextPay makes
            borrowing simple, reliable, and stress-free—so you can meet your
            financial needs with confidence.
          </p>
          <Link
            to="/about-page"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Read More
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Blue circular background */}
          <div className="absolute w-60 h-60 md:w-80 md:h-90 bg-blue-500 rounded-tr-[13em] rounded-bl-[8em] rounded-tl-[13em]"></div>

          {/* Image */}
          <img
            src={AboutUsImage}
            alt="About NextPay"
            className="relative w-60 h-60 md:w-80 md:h-80 md:top-14 top-10 right-5 object-cover border-8 border-white shadow-lg rounded-tl-[10em] rounded-tr-[10em] rounded-br-[8em]"
          />

          {/* Decorative dots */}
          <div className="absolute -bottom-10 -right-10 hidden md:grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-blue-600 rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutpage;

import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import LoanOptionImage from "../../assets/Image/about_us_summary.png";

function LoanOptions() {
  return (
    <section className="bg-white py-15">
      {/* Main Container */}
      <div
        className="max-w-7xl mx-auto px-4 relative md:rounded-tr-[14em] md:rounded-br-[14em] md:rounded-bl-[20em] p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-lg"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1683140727498-047d775c6927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9hbiUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Decorative curve background */}
        <div className="absolute inset-0 bg-[#dcf5f9] md:rounded-tr-[14em] md:rounded-bl-[20em] md:rounded-br-[14em] opacity-40"></div>

        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Border frame */}
            <div className="absolute -left-6 -bottom-6 w-full h-full border-2 border-blue-500"></div>

            <img
              src={LoanOptionImage}
              alt="Loan Options"
              className="relative w-72 md:w-70 h-90 object-cover shadow-lg"
            />

            {/* Decorative dots */}
            <div className="absolute -bottom-10 -left-10 hidden md:grid grid-cols-4 gap-2 opacity-40">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Loan Options
          </h2>

          <ul className="space-y-4 mb-8 text-slate-600">
            {[
              "Borrow ₹50,000 – ₹75,00,000",
              "12 to 60 month loan tenure",
              "No asset security required",
              "Apply online in 5 minutes",
              "Credit decision within 24 hours",
              "No physical document require",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white">
                  <Check size={12} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/loan-page"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoanOptions;

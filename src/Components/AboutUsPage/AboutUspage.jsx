import React, { useState, useEffect } from "react";
import HomepageImage from "../../assets/Image/top_slider_image_1_mobile.webp";
import FounderImage from "../../assets/Image/founder.webp";
import { RiEmotionHappyFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import OurTeams from "./OurTeams";
import OurValue from "./OurValue";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUspage() {
  const fullText = "We Disburse your loan next day";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full h-full">
      <section
        className="w-full h-screen text-white bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${HomepageImage})`,
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/20">
          <header className="w-[90%] lg:w-[70%] text-center space-y-5">
            <p className="lg:text-6xl text-2xl font-semibold text-[#082248] leading-tight transition-all duration-500 whitespace-pre-line mt-30">
              {displayedText}
              <span className="animate-pulse"></span>{" "}
              {/* Blinking cursor effect */}
            </p>
            <button className="slide-bottom border p-2  text-[#07958e] font-semibold hover:bg-white hover:text-[#082248] transition-all duration-300 ease-in-out">
              Explore Now
            </button>
          </header>
        </div>
      </section>
      <div className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center">
            {/* Main Image */}
            <div className="relative rounded-tr-[14em] rounded-tl-[14em] overflow-hidden">
              <img
                src={FounderImage} // replace with your image
                alt="About Company"
                className="w-95 lg:w-105 object-cover"
              />
            </div>

            {/* 5 Stars Badge */}
            <div className="absolute top-10 -left-4 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-orange-500 text-xl">★</span>
              <div>
                <p className="font-semibold text-sm">5 Stars</p>
                <p className="text-xs text-gray-500">
                  Read Our Success Stories
                </p>
              </div>
            </div>

            {/* Sales Card */}
            <div className="absolute bottom-6 -right-6 bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-orange-500 text-xl">
                <RiEmotionHappyFill />
              </span>
              <div>
                <p className="font-semibold text-sm">79% Happy Customer</p>
                <p className="text-xs text-gray-500">
                  Check our customer feedback on terminal
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Badge */}
            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              ABOUT COMPANY
            </span>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#082248]">
              Focus on Your Goals, <br /> We’ll Handle Your Finances
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
              You focus on achieving your personal and business goals, while we
              take care of your financial needs. Our experienced team takes time
              to understand your situation and connects you with the most
              suitable loan solutions. From application to approval, we ensure a
              smooth and transparent process with clear guidance at every step.
              With trusted financial partners and dedicated support, we help
              reduce stress and save your time. Together, we work towards your
              growth and long-term financial success.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1BnyavURDh/" className="flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                <FaFacebookF size={18} />
                <span>Facebook</span>
              </a>

              {/* LinkedIn */}
              {/* <button className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-600 hover:text-white transition">
                <FaLinkedinIn size={18} />
                <span>LinkedIn</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <OurValue />
      <OurTeams />
    </main>
  );
}

export default AboutUspage;

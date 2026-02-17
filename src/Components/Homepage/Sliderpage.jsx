import React, { useEffect, useState } from "react";
import Sliderimage1 from "../../assets/Image/top_slider_image_1.png";
import Sliderimage2 from "../../assets/Image/top_slider_image_2.webp";
import Sliderimage3 from "../../assets/Image/top_slider_image_3.webp";
import Sliderimage4 from "../../assets/Image/top_slider_image_4.webp";
import MobilesliderImage1 from "../../assets/Image/top_slider_image_1_mobile.webp";
import MobilesliderImage2 from "../../assets/Image/top_slider_image_2_mobile.webp";
import MobilesliderImage3 from "../../assets/Image/top_slider_image_3_mobile.webp";
import MobilesliderImage4 from "../../assets/Image/top_slider_image_4_mobile.webp";

const slides = [
  {
    title: "",
    subtitle: "",
    image: Sliderimage1,
    mobileimage: MobilesliderImage1,
  },
  {
    title: "Trusted by Thousands",
    subtitle: "Join our growing family of satisfied customers",
    image: Sliderimage2,
    mobileimage: MobilesliderImage2,
  },
  {
    title: "Fast Loan Disbursal",
    subtitle: "Get your loan approved and disbursed quickly",
    image: Sliderimage3,
    mobileimage: MobilesliderImage3,
  },
  {
    title: "Secure & Reliable",
    subtitle: "Your financial data is safe with NextPay",
    image: Sliderimage4,
    mobileimage: MobilesliderImage4,
  },
];

function Sliderpage() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // resize detect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = isMobile ? slide.mobileimage : slide.image;
    });
  }, [isMobile]);

  // slider clone logic
  const sliderData = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // seamless reset
  useEffect(() => {
    if (index === sliderData.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 1000);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length);
      }, 1000);
    }
  }, [index, sliderData.length]);

  const activeDot =
    index === 0
      ? slides.length - 1
      : index === sliderData.length - 1
      ? 0
      : index - 1;

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isMobile ? "h-screen" : "h-screen"
      }`}
    >
      {/* Slider */}
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sliderData.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${
                isMobile ? slide.mobileimage : slide.image
              })`,
            }}
          >
            {/* Overlay only desktop */}
            {!isMobile && slide.image !== Sliderimage1 && (
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 via-teal-800/40 to-emerald-700/40"></div>
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest opacity-90 mb-4">
                  {slide.title}
                </p>
                <h2 className="text-xl md:text-4xl font-semibold max-w-3xl">
                  {slide.subtitle}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setTransition(true);
              setIndex(i + 1);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDot === i
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Sliderpage;

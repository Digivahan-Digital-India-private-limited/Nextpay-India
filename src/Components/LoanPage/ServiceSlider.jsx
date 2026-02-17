import React, { useEffect, useState } from "react";
import Sliderimage1 from "../../assets/Image/business_loan.webp";
import Sliderimage2 from "../../assets/Image/personal_loan.webp";
import Sliderimage3 from "../../assets/Image/home_loan.webp";
import MobileviewImage1 from "../../assets/Image/business_loan_mobile.webp";
import MobileviewImage2 from "../../assets/Image/personal_loan_mobile.webp";
import MobileviewImage3 from "../../assets/Image/home_loan_mobile.webp";

const slides = [
  {
    title: "Support for Your Business Growth",
    subtitle:
      "Flexible business loan options designed to help your business grow and manage expenses smoothly.",
    image: Sliderimage1,
    mobileviewImage: MobileviewImage1,
    link:
      "https://wa.me/919999838802?text=Hi%20Team,%0A%0AI%20would%20like%20to%20apply%20for%20a%20Business%20Loan%20to%20support%20and%20expand%20my%20business.%20I%20request%20you%20to%20please%20provide%20me%20with%20complete%20assistance%20and%20guidance%20regarding%20the%20loan%20process,%20eligibility,%20interest%20rates,%20and%20required%20documents.%0A%0AThank%20you.%20Looking%20forward%20to%20your%20support.",
  },
  {
    title: "Personal Loan Made Simple",
    subtitle:
      "Quick approval with an easy process to meet your personal financial needs without stress.",
    image: Sliderimage2,
    mobileviewImage: MobileviewImage2,
    link:
      "https://wa.me/919999838802?text=Hi%20Team,%0A%0AI%20would%20like%20to%20apply%20for%20a%20Personal%20Loan.%20I%20request%20you%20to%20please%20provide%20me%20with%20complete%20assistance%20and%20guidance%20regarding%20the%20process,%20eligibility,%20and%20required%20documents.%0A%0AThank%20you.%20Looking%20forward%20to%20your%20support",
  },
  {
    title: "Your Dream Home Starts Here",
    subtitle:
      "Affordable home loan solutions with expert guidance at every step of your home-buying journey.",
    image: Sliderimage3,
    mobileviewImage: MobileviewImage3,
    link:
      "https://wa.me/919999838802?text=Hi%20Team,%0A%0AI%20am%20interested%20in%20applying%20for%20a%20Home%20Loan%20for%20the%20purchase%20or%20construction%20of%20a%20residential%20property.%20I%20request%20you%20to%20please%20provide%20me%20with%20complete%20details%20regarding%20loan%20eligibility,%20interest%20rates,%20repayment%20tenure,%20EMI%20options,%20processing%20charges,%20and%20the%20required%20documentation.%0A%0AThank%20you.",
  },
];

function ServiceSlider() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* detect screen */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* preload images */
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = isMobile ? slide.mobileviewImage : slide.image;
    });
  }, [isMobile]);

  /* clone logic */
  const sliderData = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  /* autoplay */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* seamless loop */
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
        isMobile ? "h-screen" : "h-[85vh]"
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
                isMobile ? slide.mobileviewImage : slide.image
              })`,
            }}
          >
            {/* overlay only desktop */}
            {!isMobile && (
              <div className="absolute inset-0 bg-linear-to-r from-blue-900/50 via-teal-800/50 to-emerald-700/50"></div>
            )}

            {/* content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest opacity-90 mb-4 lg:block hidden">
                  {slide.title}
                </p>
                <h2 className="text-xl md:text-4xl font-semibold mb-6 max-w-3xl lg:block hidden">
                  {slide.subtitle}
                </h2>
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:scale-105 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
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

export default ServiceSlider;

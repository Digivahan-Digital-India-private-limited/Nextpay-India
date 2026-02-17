import React, { useEffect, useState } from "react";
import HomepageImage from "../../assets/Image/top_slider_image_1_mobile.webp";
import ComapnyImg from "../../assets/Image/Image 5.png";
import Chatpage from "./Chatpage";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUspage() {
  const fullText = "Connect Us For Further Information";
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

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", () => {
        AOS.refresh(); // tell AOS to re-check scroll position
      });
    }
  }, []);
  return (
    <main className="w-full h-full relative">
      <div className="w-full h-screen">
        <img src={ComapnyImg} alt="" className="w-full h-full object-cover" />
      </div>
      <section
        id="scroll-container"
        className="hidesidescrollbar w-full h-full absolute top-0 overflow-auto"
      >
        <div
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
              <a href="https://wa.me/919999838802?text=Hi%20Team,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20your%20team%20for%20general%20enquiries%20and%20assistance.%20I%20request%20you%20to%20please%20connect%20with%20me%20and%20provide%20the%20necessary%20support.%0A%0AThank%20you.%20Looking%20forward%20to%20hearing%20from%20you." className="slide-bottom border p-2  text-[#07958e] font-semibold hover:bg-white hover:text-[#082248] transition-all duration-300 ease-in-out">
                Contact Now
              </a>
            </header>
          </div>
        </div>
        <main className="w-full md:h-[35em] h-fit bg-transparent">
          <div className="max-w-7xl mx-auto h-full flex flex-col items-start md:items-end gap-2 md:p-4 p-2">
            <div
              className="lg:w-[40%] md:w-[60%] w-full md:h-[47%] h-fit text-gray-200 flex flex-col  justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-4xl font-semibold">
                A Team of Financial Experts You Can Rely On
              </h2>
              <p className="md:text-[13px] lg:text-[16px]">
               Behind NextPay is a dedicated team of experienced financial experts who work tirelessly to support your financial goals. Our professionals carefully analyze your needs and connect you with the most suitable loan options through trusted banks and NBFC partners. With deep industry knowledge, transparent guidance, and a customer-first mindset, our team ensures you receive reliable solutions that help you move forward with confidence.
              </p>
            </div>
            <div
              className="lg:w-[80%] md:w-[90%] w-full lg:h-[47%] h-fit bg-white rounded-md flex flex-col p-3 gap-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-2xl font-semibold">Expert Analysis. Smarter Financial Solutions.</h2>
              <p className="md:text-[13px] lg:text-[16px]">
                At NextPay, our financial experts carefully analyze your financial situation to understand your needs and goals. Based on this insight, they identify and recommend the most suitable loan solutions through our trusted banking partners. With personalized guidance and clear advice, we help you make confident financial decisions that truly work for you.
              </p>
              <p className="md:text-[13px] lg:text-[16px]">
                Based on this in-depth analysis, we identify and recommend the most suitable loan options through our trusted network of banking and financial partners. With transparent guidance, clear explanations, and personalized support at every step, we empower you to make confident financial decisions. Our goal is not just to provide a loan, but to offer a solution that fits your life, supports your ambitions, and helps you move forward with complete peace of mind.
              </p>
            </div>
          </div>
        </main>
        <Chatpage />
      </section>
    </main>
  );
}

export default ContactUspage;

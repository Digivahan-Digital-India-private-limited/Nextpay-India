import React, { useEffect } from "react";
import Sliderpage from "./ServiceSlider";
import PersonalLoan from "./PersonalLoan";
import BusinessLoan from "./BusinessLoan";
import CarLoan from "./CarLoan";
import EducationLoan from "./EducationLoan";
import InstantLoan from "./InstantLoan";
import HomeRenovationLoan from "./HomeRenovationLoan";
import TwoWheelerloan from "./TwoWheelerloan";
import "aos/dist/aos.css";
import AOS from "aos";

function Loanpage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main className="w-full h-full" data-aos="fade-right" data-aos-delay="200" >
      <Sliderpage/>
      <PersonalLoan />
      <BusinessLoan />
      <CarLoan />
      <EducationLoan />
      <InstantLoan />
      <HomeRenovationLoan />
      <TwoWheelerloan />
    </main>
  );
}

export default Loanpage;

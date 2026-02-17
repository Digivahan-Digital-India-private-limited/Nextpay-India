import React from "react";
import Sliderpage from "./Sliderpage";
import LoanService from "./LoanService";
import LoanStep from "./LoanStep";
import Aboutpage from "./Aboutpage";
import LoanOptions from "./LoanOptions";
import Testimonial from "./Testimonial";

function Homepage() {
  return (
    <main className="w-full h-full">
      <Sliderpage />
      <LoanService />
      <LoanStep />
      <Aboutpage />
      <LoanOptions />
      <Testimonial/>
    </main>
  );
}

export default Homepage;

import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Loanpage from "./Components/LoanPage/Loanpage";
import Aboutpage from "./Components/AboutUsPage/AboutUspage";
import ContactUspage from "./Components/ContactUsPage/ContactUspage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {

  
  return (
    <main className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loan-page" element={<Loanpage />} />
        <Route path="/about-page" element={<Aboutpage />} />
        <Route path="/contact-page" element={<ContactUspage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;

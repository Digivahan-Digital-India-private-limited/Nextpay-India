import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Loanpage from "./Components/LoanPage/Loanpage";
import Aboutpage from "./Components/AboutUsPage/AboutUspage";
import ContactUspage from "./Components/ContactUsPage/ContactUspage";
import Footer from "./Components/Footer";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import { ApplicationsProvider } from "./context/ApplicationsContext";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <main className="w-full h-full">
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loan-page" element={<Loanpage />} />
        <Route path="/about-page" element={<Aboutpage />} />
        <Route path="/contact-page" element={<ContactUspage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </main>
  );
}

const App = () => {
  return (
    <ApplicationsProvider>
      <AppContent />
    </ApplicationsProvider>
  );
};

export default App;

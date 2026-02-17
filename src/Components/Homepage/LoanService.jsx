import React, { useState } from "react";
import {
  User,
  Briefcase,
  Car,
  GraduationCap,
  Home,
  Bike,
  Heart,
  Plane,
} from "lucide-react";
import LoanFormModal from "../LoanFormModal";

const loanData = [
  {
    title: "Personal Loan",
    desc: "Quick funds for your personal needs with minimal documentation",
    icon: User,
  },
  {
    title: "Business Loan",
    desc: "Grow your business with flexible financing options",
    icon: Briefcase,
  },
  {
    title: "Car Loan",
    desc: "Drive your dream car with attractive interest rates",
    icon: Car,
  },
  {
    title: "Education Loan",
    desc: "Invest in your future with easy education financing",
    icon: GraduationCap,
  },
  {
    title: "Home Loan",
    desc: "Make your dream home a reality with our home loans",
    icon: Home,
  },
  {
    title: "Two-Wheeler Loan",
    desc: "Get on the road faster with quick two-wheeler financing",
    icon: Bike,
  },
  {
    title: "Medical Loan",
    desc: "Healthcare financing for you and your loved ones",
    icon: Heart,
  },
  {
    title: "Travel Loan",
    desc: "Explore the world without worrying about finances",
    icon: Plane,
  },
];

function LoanService() {
  const [activeLoan, setActiveLoan] = useState("");

  const handleOpenForm = (loanTitle) => {
    setActiveLoan(loanTitle);
  };

  const handleCloseForm = () => {
    setActiveLoan("");
  };

  return (
    <section className="bg-gray-50 md:py-16 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanData.map((loan, index) => {
            const Icon = loan.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-800 to-teal-600 flex items-center justify-center mb-6">
                  <Icon className="text-white w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {loan.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {loan.desc}
                </p>

                <button
                  type="button"
                  onClick={() => handleOpenForm(loan.title)}
                  className="text-teal-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Connect To Expert →
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <LoanFormModal
        key={`${activeLoan || "none"}-${activeLoan ? "open" : "closed"}`}
        isOpen={Boolean(activeLoan)}
        onClose={handleCloseForm}
        loanType={activeLoan}
      />
    </section>
  );
}

export default LoanService;

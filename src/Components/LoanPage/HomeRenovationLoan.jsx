import React, { useState } from "react";
import LoanFormModal from "../LoanFormModal";

function HomeRenovationLoan() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col gap-3 items-center justify-between">
        <div className="md:w-[50%] w-full h-full flex items-start flex-col justify-center lg:px-10 p-2">
          <div
            className="lg:w-[80%] md:space-y-2 space-y-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>NEXTPAY COMPANY</h3>
            <h2 className="text-4xl font-semibold">Home Loan</h2>
            <p>
              Give your home the upgrade it deserves with NextPay’s Home
              Renovation Loan. Whether you are planning to paint, redesign
              interiors, buy new furniture, or renovate any part of your home,
              we offer easy financing with flexible EMIs. Make your home more
              comfortable and beautiful without worrying about large upfront
              costs.
            </p>

            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="bg-[#006fae] px-8 py-2 text-white font-semibold rounded-2xl cursor-pointer"
            >
              Connect To Expert
            </button>
          </div>
        </div>
        <div className="md:w-[50%] w-full h-full lg:rounded-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1663133903722-f9ec909609d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvbWUlMjBSZW5vdmF0aW9uJTIwTG9hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="motion w-full h-full object-cover md:rounded-md"
          />
        </div>
      </section>
      <LoanFormModal
        key={`home-${isFormOpen ? "open" : "closed"}`}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        loanType="Home Loan"
      />
    </main>
  );
}

export default HomeRenovationLoan;

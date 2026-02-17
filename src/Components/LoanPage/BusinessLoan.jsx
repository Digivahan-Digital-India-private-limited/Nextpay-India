import React, { useState } from "react";
import LoanFormModal from "../LoanFormModal";

function BusinessLoan() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col gap-3 items-center justify-between">
        <div className="md:w-[50%] w-full h-full flex items-start flex-col justify-center lg:px-10 p-2">
          <div
            className="lg:w-[80%] md:space-y-2 space-y-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>NEXTPAY COMPANY</h3>
            <h2 className="text-4xl font-semibold">Business Loan</h2>
            <p>
              NextPay Business Loans are designed to help your business grow
              with confidence. Whether you want to expand operations, buy
              equipment, add inventory, or boost marketing, we provide fast and
              secure funding. With easy documentation, quick loan processing,
              and competitive rates, we make sure your business gets the support
              it needs to move to the next level.
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
            src="https://images.unsplash.com/photo-1695326462627-bc8c6e55e674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbG9hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover md:rounded-md"
            style={{
              clipPath: "polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)",
            }}
          />
        </div>
      </section>
      <LoanFormModal
        key={`business-${isFormOpen ? "open" : "closed"}`}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        loanType="Business Loan"
      />
    </main>
  );
}

export default BusinessLoan;

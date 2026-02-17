import React, { useState } from "react";
import LoanFormModal from "../LoanFormModal";

function EducationLoan() {
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
            <h2 className="text-4xl font-semibold">Education Loan</h2>
            <p>
              Your education is your future, and NextPay is here to support it.
              Our Education Loans cover tuition fees, books, accommodation, and
              all major academic expenses. Whether you are studying in India or
              abroad, we offer flexible repayment plans and a hassle-free
              application process, so you can focus on learning while we take
              care of the finances
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
            src="https://images.unsplash.com/photo-1659080907097-6153cd4ff69d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9uJTIwbG9hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover md:rounded-md"
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            }}
          />
        </div>
      </section>
      <LoanFormModal
        key={`education-${isFormOpen ? "open" : "closed"}`}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        loanType="Education Loan"
      />
    </main>
  );
}

export default EducationLoan;

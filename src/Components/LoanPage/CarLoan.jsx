import React, { useState } from "react";
import LoanFormModal from "../LoanFormModal";

function CarLoan() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[50%] w-full h-full lg:rounded-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1661306636048-5dfa19532575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwbG9hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover md:rounded-md"
            style={{
              clipPath:
                "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
            }}
          />
        </div>
        <div className="md:w-[50%] w-full h-full flex items-start flex-col justify-center lg:px-10 p-2">
          <div
            className="lg:w-[80%] md:space-y-2 space-y-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>NEXTPAY COMPANY</h3>
            <h2 className="text-4xl font-semibold">Car Loan</h2>
            <p>
              Make your dream car a reality with NextPay’s smooth and affordable
              Car Loan service. Enjoy quick approval, low EMIs, and a simple
              document process. Whether you’re buying your first car or
              upgrading to a better one, we help you drive home your dream
              without financial pressure.
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
      </section>
      <LoanFormModal
        key={`car-${isFormOpen ? "open" : "closed"}`}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        loanType="Car Loan"
      />
    </main>
  );
}

export default CarLoan;

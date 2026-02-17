import React, { useState } from "react";

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  amount: "",
  city: "",
  message: "",
};

function LoanFormModal({ isOpen, onClose, loanType }) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Loan application form"
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
              Connect With Expert
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">Loan Application</h3>
            <p className="text-sm text-slate-500">We will get back within 24 hours.</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {isSubmitted && (
          <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Thanks! Your request has been submitted. Our expert will contact you soon.
          </div>
        )}

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="loanType">
                Loan Type
              </label>
              <input
                id="loanType"
                name="loanType"
                value={loanType}
                readOnly
                className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="amount">
                Loan Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                min="0"
                value={formData.amount}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                placeholder="e.g. 500000"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                placeholder="e.g. +91 98765 43210"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="city">
                City
              </label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                placeholder="City"
                required
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
              placeholder="Tell us about your requirement"
              required
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              By submitting, you agree to be contacted by NextPay experts.
            </p>
            <button
              type="submit"
              className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoanFormModal;

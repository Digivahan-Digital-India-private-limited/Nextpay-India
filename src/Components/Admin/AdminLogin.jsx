import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Companylogo from "../../assets/Image/nextpay.png";

const CORRECT_OTP = "008500";
const OTP_LENGTH = 6;

function AdminLogin() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState("phone"); // "phone" | "otp"
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.trim().length < 6) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    setOtp(Array(OTP_LENGTH).fill(""));
    setStep("otp");
    setResendTimer(30);
    setTimeout(() => inputRefs.current[0]?.focus(), 100);
  };

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    setError("");
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    const newOtp = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((char, i) => { newOtp[i] = char; });
    setOtp(newOtp);
    const nextEmpty = pasted.length < OTP_LENGTH ? pasted.length : OTP_LENGTH - 1;
    inputRefs.current[nextEmpty]?.focus();
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length < OTP_LENGTH) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }
    if (enteredOtp === CORRECT_OTP) {
      sessionStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Incorrect OTP. Please try again.");
      setOtp(Array(OTP_LENGTH).fill(""));
      setTimeout(() => inputRefs.current[0]?.focus(), 50);
    }
  };

  const handleResend = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    setError("");
    setResendTimer(30);
    setTimeout(() => inputRefs.current[0]?.focus(), 50);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-8">
          <img src={Companylogo} alt="NextPay Logo" className="h-10 w-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800">Admin Login</h2>
          <p className="text-sm text-slate-500 mt-1 text-center">
            {step === "phone"
              ? "Enter your phone number to receive OTP"
              : `OTP sent to +91 ${phone}`}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Step 1 — Phone Number */}
        {step === "phone" && (
          <form onSubmit={handleSendOtp} className="flex flex-col gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                Phone Number
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-teal-500 transition">
                <span className="text-sm text-slate-500 font-medium select-none">+91</span>
                <div className="w-px h-4 bg-slate-200" />
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setError("");
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 15));
                  }}
                  className="flex-1 text-sm text-slate-700 focus:outline-none bg-transparent"
                  placeholder="Enter phone number"
                  required
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Send OTP
            </button>
          </form>
        )}

        {/* Step 2 — OTP Verification */}
        {step === "otp" && (
          <form onSubmit={handleVerifyOtp} className="flex flex-col gap-5">
            <div className="grid gap-3">
              <label className="text-sm font-medium text-slate-700 text-center">
                Enter 6-digit OTP
              </label>

              {/* OTP Boxes */}
              <div className="flex justify-center gap-2" onPaste={handleOtpPaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className={`w-11 h-12 text-center text-lg font-bold rounded-xl border transition focus:outline-none
                      ${digit
                        ? "border-teal-500 bg-teal-50 text-teal-700"
                        : "border-slate-200 text-slate-800"
                      } focus:border-teal-500`}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Verify &amp; Sign In
            </button>

            {/* Resend + Change number */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <button
                type="button"
                onClick={() => { setStep("phone"); setError(""); setOtp(Array(OTP_LENGTH).fill("")); }}
                className="hover:text-teal-600 transition underline underline-offset-2"
              >
                Change number
              </button>

              {resendTimer > 0 ? (
                <span>Resend OTP in {resendTimer}s</span>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="hover:text-teal-600 transition underline underline-offset-2"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;

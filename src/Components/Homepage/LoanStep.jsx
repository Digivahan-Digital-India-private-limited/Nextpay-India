import React from "react";
import { FileText, Upload, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Fill the Application",
    desc: "Complete our simple online form in just 5 minutes",
    icon: FileText,
  },
  {
    step: "02",
    title: "Upload Documents",
    desc: "Submit your required documents securely online",
    icon: Upload,
  },
  {
    step: "03",
    title: "Get Loan Approval",
    desc: "Receive instant approval and funds in your account",
    icon: CheckCircle,
  },
];

function LoanStep() {
  return (
    <section className="relative py-24 bg-linear-to-r from-blue-900 via-teal-800 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase opacity-80 mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Get your loan in 3 simple steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-8 py-14 text-center"
              >
                {/* Step number */}
                <span className="absolute top-6 left-6 text-white/40 text-lg font-medium">
                  {item.step}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-800" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Arrow (desktop only) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white/40 text-2xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LoanStep;

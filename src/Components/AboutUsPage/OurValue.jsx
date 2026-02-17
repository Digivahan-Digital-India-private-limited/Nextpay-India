import React from "react";
import { Users, BarChart3, Zap, Shield } from "lucide-react";

const values = [
  {
    title: "Integrity",
    desc: "We believe in honesty and transparency. Every loan option, detail, and process is clearly communicated so you can make informed decisions with complete confidence.",
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Simplicity",
    desc: "Finance should be easy to understand. We keep our processes simple, paperwork minimal, and guidance clear—so you never feel confused or overwhelmed.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Performance",
    desc: "We focus on speed, accuracy, and reliability. From quick analysis to fast approvals, we work efficiently to deliver results that meet your expectations",
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Customer First",
    desc: "Your needs always come first. We listen carefully, understand your goals, and provide personalized financial solutions that truly work for you.",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
  },
];

function OurValue() {
  return (
    <section className="lg:py-24 md:py-10 py-6 bg-linear-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">Our Values</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl border border-indigo-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValue;

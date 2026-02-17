import React from "react";
import { Rocket, Pill, HandCoins } from "lucide-react";

const steps = [
  {
    title: "Get started",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: Rocket,
  },
  {
    title: "Link your data",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: Pill,
  },
  {
    title: "Get funds fast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    icon: HandCoins,
  },
];

function ApplyProcesspage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-16">
          Easy to apply. Simple <br className="hidden md:block" /> as 1, 2, 3.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>

                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ApplyProcesspage;

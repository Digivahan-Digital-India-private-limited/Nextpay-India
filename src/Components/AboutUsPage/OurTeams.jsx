import React from "react";
import Member1 from '../../assets/Image/Sandeep.webp'
import Member2 from '../../assets/Image/rehan_sir.png'
import Member3 from '../../assets/Image/hasan-min.png'

const teamMembers = [
  {
    name: "Sandeep Rathor",
    role: "CEO & Founder",
    img: Member1,
  },
  {
    name: "Pervaz Ansari",
    role: "Director",
    img: Member2,
  },
  {
    name: "Mustafa Hasan",
    role: "Tech Head",
    img: Member3,
  },
];

function OurTeams() {
  return (
    <section className="relative w-full lg:py-24 md:py-10 bg-white overflow-hidden space-y-2">
      {/* SLIDER (BACKGROUND LAYER) */}
      <div className="relative lg:absolute right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-1/2 overflow-hidden z-0 mt-10 lg:mt-0">
        <div className="flex gap-6 w-max animate-team-slider opacity-90 py-1">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="w-72 bg-white rounded-3xl shadow-lg p-5 shrink-0"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT (TOP LAYER) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            OUR EXPERT TEAM
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Meet the Core Team of Experts Driving NextPay’s <br /> Vision and Success
          </h2>

          <div className="flex gap-4 mt-6">
            <button className="w-12 h-12 rounded-full border flex items-center justify-center">
              ←
            </button>
            <button className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </div>

      {/* FADE EFFECT */}
      <div className="hidden lg:block absolute left-0 top-0 h-full w-48 bg-linear-to-r from-white to-transparent z-10"></div>
    </section>
  );
}

export default OurTeams;

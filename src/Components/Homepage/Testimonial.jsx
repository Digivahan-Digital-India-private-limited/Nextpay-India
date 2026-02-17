import React from "react";
import { Star } from "lucide-react";
import Customer1 from '../../assets/Image/customer_1-min.jpg'
import Customer2 from '../../assets/Image/customer_2-min.jpg'
import Customer3 from '../../assets/Image/Customer_3-min.jpg'
import Customer4 from '../../assets/Image/customer_4.jpg'

const testimonials = [
  {
    name: "Kavita Nair",
    role: "School Teacher",
    image: Customer1,
    rating: 5,
    text: "NextPay made the loan process extremely simple for me. The guidance was clear, the approval was quick, and everything was transparent. I felt confident and supported at every step",
  },
  {
    name: "Neha Verma",
    role: "Marketing Executive",
    image: Customer2,
    rating: 5,
    text: "I was unsure which loan option was right for me, but NextPay’s experts explained everything clearly. They helped me choose the best solution without any pressure",
  },
  {
    name: "Rohit Singh",
    role: "Small Business Owner",
    image: Customer3,
    rating: 5,
    text: "Getting a business loan usually takes time, but NextPay made it smooth and hassle-free. Their team understood my needs and connected me with the right bank quickly.",
  },
  {
    name: "Amit Sharma",
    role: "Software Engineer",
    image: Customer4,
    rating: 5,
    text: "I needed financial support urgently, and NextPay guided me patiently. The process was easy, and I received the loan without stress. I truly trust their service.",
  },
];

function Testimonial() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Happy Users say!
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Smarter, faster, and reliable — see what our clients say about us.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-8 animate-marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[320px] shrink-0 bg-white rounded-2xl p-6 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 wrap-break-word">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

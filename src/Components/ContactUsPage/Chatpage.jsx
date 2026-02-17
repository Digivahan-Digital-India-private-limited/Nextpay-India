import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

function Chatpage() {
  return (
    <main className="w-full md:h-full h-fit bg-[#f2f2f2] flex items-center justify-center p-2">
      <section className="lg:w-[80%] w-full md:h-[85%] h-full grid grid-cols-1 md:grid-cols-2 justify-center relative">
        <div className="w-full h-full overflow-hidden flex items-center justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661713470886-3d916d52da83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
            alt=""
            className="w-[90%] md:w-[80%] lg:w-[60%] h-[80%] md:h-full object-cover"
          />
        </div>
        <div
          className="lg:w-[20em] lg:h-[13em] md:w-[12em] md:h-[10em] w-[80%] h-[15%] bg-white absolute lg:left-15 lg:-top-8 md:left-5 md:-top-6 top-5 left-0 rounded-md shadow-lg p-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center justify-between">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-11 h-11 object-cover rounded-full"
            />
            <span className="flex items-center justify-center gap-2 bg-[#0a9ced] w-24 py-1 text-white rounded-full">
              <BsFillSendFill size={14} />
              <p className="text-[13px]">Message</p>
            </span>
          </div>
          <p className="flex items-center gap-2 font-semibold">
            Prity Jaswal <FaCircleCheck color="#0a9ced" />
          </p>
          <p className="text-[12px] lg:text-[18px]">
            I am plainning to grow my business but stucking because of fund can
            you suggest me financial advice.
          </p>
        </div>
        <div
          className="lg:w-[16em] md:w-[14em] w-[60%] lg:h-[12em] md:h-[8em] bg-white absolute lg:left-75 lg:-bottom-10
                 md:left-34 md:-bottom-8 bottom-[34em] right-0 rounded-md shadow-lg p-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center justify-between">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="flex items-center justify-center gap-2 bg-[#0a9ced] w-24 py-1 text-white rounded-full">
              <BsFillSendFill size={14} />
              <p className="text-[13px]">Message</p>
            </span>
          </div>
          <p className="flex items-center gap-2 font-semibold">
            Sawita Kumari <FaCircleCheck color="#0a9ced" />
          </p>
          <p className="text-[12px] lg:text-[18px]">
            I need a urgent fund how much time it will take to disburse.
          </p>
        </div>
        <div
          className="w-full h-full flex flex-col justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>NextPay Team Support</p>
          <h2 className="text-3xl font-bold lg:w-[85%] text-gray-700">
            Personal Financial Guidance You Can Trust
          </h2>
          <p>
            Need help choosing the right loan or financial option? Our
            experienced financial advisors are always willing to listen,
            understand your needs, and guide you toward the best financial
            solution. Whether you are planning ahead or facing an urgent
            requirement, we are here to support you with clear advice, honest
            guidance, and solutions that truly fit your goals.
          </p>
          <a
            href="https://wa.me/919999838802?text=Hi%20Team,%0A%0AI%20would%20like%20to%20connect%20with%20a%20financial%20adviser%20to%20discuss%20my%20financial%20goals%20and%20understand%20the%20most%20suitable%20loan%20and%20financial%20solutions.%20I%20request%20you%20to%20please%20provide%20personalized%20guidance%20and%20expert%20assistance.%0A%0AThank%20you.%20I%20look%20forward%20to%20your%20support."
            className="px-6 py-3 w-52 md:w-80 rounded-full bg-blue-600 text-white text-[12px] md:text-xl font-medium hover:bg-blue-700 transition"
          >
            Connect To Financial Adviser
          </a>
        </div>
      </section>
    </main>
  );
}

export default Chatpage;

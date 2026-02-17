import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "../assets/Image/Footerlogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1f3c88] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={Logo} alt="NextPay" className="w-36 mb-6" />
            <p className="text-sm leading-relaxed text-white/80 mb-6">
              Your trusted partner for all financial needs. Fast, secure, and
              reliable loan services.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Icon size={18} />
                </a>
              ))} */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <Link to="/about-page" className="hover:text-white">
                  {" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/loan-page" className="hover:text-white">
                  {" "}
                  Our Services
                </Link>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li> */}
            </ul>
          </div>

          {/* Legal
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-300 mt-1" />
                <span>
                  WZA495, Old Pankha Rd, Block B, Milap Nagar, Rani Bagh, <br />
                  New Delhi, Delhi, 110059
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-300" />
                <span>+91 9999838802</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-300" />
                <span>Nexpay@Gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16"></div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-white/70">
          © 2025 NextPays. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

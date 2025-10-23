import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] text-gray-800 py-12 px-6 md:px-16">
      {/* Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        {/* Left Section - Company Info */}
        <div className="w-full md:w-[368px] text-center md:text-left">
          <h2 className="text-xl inter font-semibold text-[#2F820C] mb-4">
            SUNNY’S IN A BOTTLE
          </h2>
          <p className="inter text-[#525252] leading-[24px] ">
            At our Bridge to Hassle-Free Assistance, we prioritize your
            peace of mind and satisfaction. A commitment to excellence, our
            dedicated team is here for you.
          </p>
        </div>

        {/* Right Section - Contact + Social */}
        <div className="flex flex-col md:flex-row md:gap-16 items-center md:items-start text-center md:text-left">
          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-[#2F820C] mb-4">
              Contact
            </h2>
            <p className="text-[#525252] mb-3">
              20, Paul&apos;s Castle, Castle Street, <br />
              Ashok Nagar, Bangalore, <br />
              Karnataka - 560025
            </p>
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <MdEmail className="text-[#959595] text-lg" />
              <a
                href="mailto:sunnysandmore@yahoo.com"
                className="text-[#525252]"
              >
                sunnysandmore@yahoo.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MdCall className="text-[#959595] text-lg" />
              <a href="tel:+91988601268" className="text-[#525252]">
                +91 98860 1268
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-xl font-semibold text-[#2F820C] mb-4">
              Connect with us
            </h2>
            <div className="flex justify-center md:justify-start gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2F820C] text-white rounded-full flex items-center justify-center hover:bg-[#FF5203] transition-colors"
              >
                <FaInstagram />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2F820C] text-white rounded-full flex items-center justify-center hover:bg-[#FF5203] transition-colors"
              >
                <FaFacebook />
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2F820C] text-white rounded-full flex items-center justify-center hover:bg-[#FF5203] transition-colors"
              >
                <FaYoutube />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2F820C] text-white rounded-full flex items-center justify-center hover:bg-[#FF5203] transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sunny’s In A Bottle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "./../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1B1E32] text-white py-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Логотип и заголовок */}
        <div className="flex justify-center items-center gap-4">
          <img src={logo} alt="Skilline Logo" className="w-[100px]" />
          <div className="text-left">
            <p className="text-sm text-gray-400">Virtual Class <br />for Zoom</p>
          </div>
        </div>

        {/* Подписка на рассылку */}
        <p className="mt-6 text-gray-300">Subscribe to get our Newsletter</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="w-64 p-3 rounded-full bg-[#23263A] text-gray-300 focus:outline-none"
          />
          <button className="ml-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold">
            Subscribe
          </button>
        </div>

        <div className="mt-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white mx-2">
            Careers
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white mx-2">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white mx-2">
            Terms & Conditions
          </a>
        </div>
        <p className="mt-4 text-gray-500 text-xs">
          © 2025 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

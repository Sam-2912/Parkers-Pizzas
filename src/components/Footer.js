import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-8 px-6 flex items-center sm:justify-around justify-between flex-wrap">
      <div className="sm:w-1/5 mx-8 mb-8">
        <h1 className="text-3xl mb-6 font-bold text-theme-orange-300">
          Parker's Pizza
        </h1>
        <p className="text-gray-500 mb-8">
          Lorem ipsum is simply a dummy text of the printing and he is gent
          typesetting industry.
        </p>

        <div className="flex items-center">
          <i className="ri-facebook-fill text-theme-orange-300 mr-3 text-2xl cursor-pointer"></i>
          <i className="ri-twitter-fill text-theme-orange-300 mr-3 text-2xl cursor-pointer"></i>
          <i className="ri-instagram-line text-theme-orange-300 mr-3 text-2xl cursor-pointer"></i>
          <i className="ri-linkedin-fill text-theme-orange-300 mr-3 text-2xl cursor-pointer"></i>
        </div>
      </div>
      <div className="sm:w-fit mx-8 mb-8">
        <p className="font-bold mb-4">About</p>
        <Link to="#" className="text-gray-500 mb-4 block">
          About Us
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Features
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          News
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Menu
        </Link>
      </div>
      <div className="w-fit mx-8 mb-8">
        <p className="font-bold mb-4">Company</p>
        <Link to="#" className="text-gray-500 mb-4 block">
          Why We?
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Partner with us
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          FAQ
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Blog
        </Link>
      </div>
      <div className="w-fit mx-8 mb-8">
        <p className="font-bold mb-4">Support</p>
        <Link to="#" className="text-gray-500 mb-4 block">
          Account
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Support Center
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Feedback
        </Link>
        <Link to="#" className="text-gray-500 mb-4 block">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;

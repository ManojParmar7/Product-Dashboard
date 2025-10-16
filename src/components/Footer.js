import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Assets from "./Assets/assets";

const Footer = () => {
  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedin];

  return (
    <footer className="bg-gray-50 text-gray-800 pt-10 pb-6 border-t border-gray-200 shadow-xl">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col space-y-3">
          <img src={Assets.Logo} alt="Logo" className="w-32 md:w-36" />
          <p className="text-gray-600 text-sm md:text-base">
            Delivering high-quality content and services for all your needs.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="#"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {socialIcons.map((Icon, idx) => (
              <Link
                to="#"
                key={idx}
                className="text-gray-600 hover:text-blue-600 text-lg md:text-2xl transition-colors duration-200"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm md:text-base">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

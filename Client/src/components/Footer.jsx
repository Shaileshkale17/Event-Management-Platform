import React from "react";
import logo_incon from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const externalLinks = {
    portfolio: "https://protfolio-shailesh-full-stack-developer.vercel.app/",
    github: "https://github.com/Shaileshkale17",
  };

  return (
    <footer className="bg-black  text-gray-300 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}
        <div className="flex flex-col items-center md:items-start gap-8">
          <Link to="/" className="flex flex-row items-center">
            <img src={logo_incon} alt="Logo" className="w-10 h-10" />

            <h1 className="ml-2 text-xl font-semibold hover:text-gray-400 text-gray-300">
              My Event
            </h1>
          </Link>
          <div>
            <p className="text-center md:text-left hover:text-gray-400 text-gray-300">
              Empowering your journey with quality software solutions.
            </p>
            <a
              href={externalLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold  mt-4 hover:underline hover:text-gray-400 text-gray-300">
              Developed by Shailesh Kale
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-gray-400 text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline hover:text-gray-400 text-gray-300">
                About
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:underline hover:text-gray-400 text-gray-300">
                Events
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-gray-400 text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Connect With Me Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
          <ul className="space-y-3">
            <li>
              <a
                href={externalLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-400 text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-400 text-gray-300">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm hover:text-gray-400 text-gray-300">
        © {new Date().getFullYear()} Shailesh Kale. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

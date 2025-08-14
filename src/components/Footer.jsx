import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 ">
      <div className="container mx-auto px-6 text-center ">
        <p className="mb-4">
          © {new Date().getFullYear()} <span className="font-semibold">BlossomCraft</span>. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 cursor-pointer">
          <a
            href="/about"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import aboutImages from "../assets/about_img.jpeg"
export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50 cursor-pointer">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We are a passionate team of developers and designers dedicated to
            crafting modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to make web development faster and more accessible
            with clean, reusable components that bring your ideas to life.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-lg transition duration-300 cursor-pointer">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="bg-pink-200 h-72 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={aboutImages}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
         
        </div>

      </div>
    </section>
  );
}

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Have any questions or ideas? We’d love to hear from you! Fill out the form below and our team will get back to you shortly.
        </p>

        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

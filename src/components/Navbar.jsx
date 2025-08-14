import React, { useState } from "react";
import Logo from "../assets/Logo.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="bg-pink-100 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <h1 className="flex items-center gap-3 cursor-pointer group">
                    {/* Logo */}
                    <div className="bg-gradient-to-tr from-pink-400 to-pink-600 p-1.5 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <img
                            src={Logo}
                            alt="BlossomCraft Logo"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
                        BlossomCraft
                    </span>
                </h1>


                <div className="hidden md:flex space-x-6 text-lg font-medium">
                    {["Home", "About", "Features", "Contact"].map((item) => (
                        <a
                            key={item}
                           href={`#${item.toLowerCase()}`}

                            className="text-gray-700 hover:text-pink-600 transition duration-300 relative group"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>


                <button
                    className="md:hidden text-pink-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>



            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-pink-50 shadow-lg">
                    {["Home", "About", "Features", "Contact"].map((item) => (
                        <a
                            key={item}
                           href={`/${item.toLowerCase()}`}

                            className="text-gray-700 hover:text-pink-600 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

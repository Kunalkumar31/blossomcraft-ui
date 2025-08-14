import React, { useEffect, useRef } from "react";

function PetalsAnimation() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        for (let i = 0; i < 15; i++) {
            const petal = document.createElement("div");
            petal.className = "absolute w-6 h-6 bg-pink-300 rounded-full opacity-70";
            petal.style.left = Math.random() * 100 + "vw";
            petal.style.animation = `fall ${5 + Math.random() * 5}s linear infinite`;
            petal.style.animationDelay = Math.random() * 5 + "s";
            container.appendChild(petal);
        }
    }, []);

    return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" />;
}

export default function Home() {
    return (
        <section
            id="home"
            className="relative bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 text-white py-20 overflow-hidden"
        >
            <PetalsAnimation />
            <div className="container mx-auto px-6 text-center relative z-10 animate-fadeInUp">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-slideInDown">
                    Bloom Your Ideas into Beautiful Websites
                </h1>
                <p className="mb-6 text-lg max-w-2xl mx-auto animate-fadeIn delay-200">
                    Just like flowers blossom with care, we craft websites with love, beauty, and precision.
                    Let your digital presence bloom with modern design, smooth performance, and vibrant colors.
                </p>
                <a
                    href="/contact"
                    className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-300 hover:scale-105 transform transition-all duration-300"
                >
                    Start Your Journey
                </a>
            </div>


            <style jsx="true">{`
        @keyframes fall {
          0% {
            transform: translateY(-10%) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-in-out;
        }
        .animate-slideInDown {
          animation: slideInDown 1s ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
        </section>
    );
}

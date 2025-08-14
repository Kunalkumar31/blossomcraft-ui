import React from "react";

export default function Features() {
  const data = [
    { title: "⚡ Fast Performance", desc: "Optimized for speed and quick load times." },
    { title: "📱 Responsive Design", desc: "Looks great on all devices." },
    { title: "🎨 Easy to Customize", desc: "Change colors, fonts, and layout easily." },
  ];

  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-b from-gray-50 to-white cursor-pointer"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{f.title.split(" ")[0]}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {f.title.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

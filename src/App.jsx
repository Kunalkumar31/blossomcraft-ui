import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

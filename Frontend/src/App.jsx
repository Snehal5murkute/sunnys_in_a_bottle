import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    
    <>
      <Navbar/>
    <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<h1 className="text-center mt-20">404 Not Found</h1>} />
      </Routes>
      <Footer/>
     
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";
import Footer from "./Components/Footer/Footer";
import Auth from "./Pages/Auth/Auth";
import Features from "./Pages/Data/features";
import Pricing from "./Pages/Data/pricing";
import Blog from "./Pages/Data/blog";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

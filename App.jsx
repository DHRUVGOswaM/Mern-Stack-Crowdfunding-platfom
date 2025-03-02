import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// cSpell:ignore Toastify ```

import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";
import NotFound from "./src/components/NotFound";
import Donate from "./src/components/Donate";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;

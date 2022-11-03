import React from "react";
import HomePage from "./components/HomePage/index.js";
import AboutPage from "./components/AboutPage/index.js";
import ContactPage from "./components/ContactPage/index.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

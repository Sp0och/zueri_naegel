import React from "react";
import HomePage from "./components/HomePage/index.js";
import AboutPage from "./components/AboutPage/index.js";
import ContactPage from "./components/ContactPage/index.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    marign: 0;
    padding: 0;
    // outline: 1px solid #000;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
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

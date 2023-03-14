import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingFrontPage from "../components/LandingFrontPage";

const Landing = () => {
  return (
    <>
      <Header title="PokeCatalog" />
      <LandingFrontPage />
      <Footer />
    </>
  );
};

export default Landing;

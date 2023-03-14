import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResultsLayout from "../components/ResultsLayout";
import SearchBar from "../components/SearchBar";

const Catalog = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <ResultsLayout />
      <Footer />
    </>
  );
};

export default Catalog;

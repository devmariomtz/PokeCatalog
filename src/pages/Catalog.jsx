import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecommendedPokemosGrid from "../components/RecommendedPokemosGrid.jsx";

const Catalog = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <RecommendedPokemosGrid />
      <Footer />
    </>
  );
};

export default Catalog;

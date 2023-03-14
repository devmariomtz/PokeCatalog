import React from "react";
import Carrusel from "./Carrusel";
import GetImagesAPI from "./GetImagesAPI";

const ResultsLayout = () => {
  return <div className="bg-primary">
    <div>
      <h2 className="text-[2em] text-white text-center">
        Recommended Pokemon
      </h2>
      <Carrusel />
      

    </div>
    </div>;
};

export default ResultsLayout;

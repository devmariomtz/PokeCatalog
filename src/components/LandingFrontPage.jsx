import React from "react";

const LandingFrontPage = () => {
  return (
    <div className="bg-primary w-full h-screen flex justify-center items-center flex-col">
      <div className="">
        <a href="catalog" className="hover:drop-shadow-landing-logo-shadow">
          <img
            src="/pokemon-icon.jpg"
            className="w-[20em] hover:scale-[1.1] transition-all"
            alt="PokeCatalog&trade;"
            title="PokeCatalog&trade;"
          />
        </a>
      </div>
      <h1 className="text-[5em] relative font-TiltNeon font-bold text-white">
        PokeCatalog&trade;
      </h1>
    </div>
  );
};

export default LandingFrontPage;

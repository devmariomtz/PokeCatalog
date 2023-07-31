import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <>
      <Header title="Error 404" />
      <div className="flex justify-center flex-col bg-primary w-full text-white">
        <div className="w-full flex justify-center items-center">
          <h1 className="font-extrabold text-7xl lg:text-9xl sm:text-9xl flex flex-col">Error</h1>
          <img
            className="w-[30vw] text-white bg-white m-5"
            src="src/assets/error-404.svg"
            alt="Error 404"
          />
        </div>

        <div className="w-full text-center lg:text-4xl p-2 sm:text-4xl text-3xl">
          <p>Upps! Un pokemon se nos ha escapado 🤷‍♂️.</p>
          <p>Será mejor ir a buscarle...</p>
          <p>👇</p>
        </div>
        <div className="flex justify-center mb-7">
          <a href="catalog" className="hover:drop-shadow-landing-logo-shadow">
            <img
              src="/assets/pokemon-icon.jpg"
                          className="w-[12em] hover:scale-[1.1] transition-all sm:w-[15em]"
              alt="PokeCatalog&trade;"
              title="PokeCatalog&trade;"
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;

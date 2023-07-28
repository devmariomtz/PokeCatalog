import React from "react";
import RecommendedPokemonsIMG from "./RecommendedPokemonsIMG.jsx";

const RecommendedPokemonGrid = () => {
  return (
    <section className="bg-primary">
      <div className="container p-[1.5em]">
        <h1 className="text-3xl block font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center">
          Recommended Pokemons
        </h1>
        <div className="grid g-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 m-2 md:grid-cols-1 sm:grid-cols-1">
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
          <RecommendedPokemonsIMG pokeId={randomId()} />
        </div>
      </div>
    </section>
  );
};

function randomId() {
  return 1 + Math.round(Math.random() * 1009);
}

export default RecommendedPokemonGrid;

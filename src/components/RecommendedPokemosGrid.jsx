import React from 'react'
import RecommendedPokemonsIMG from "./RecommendedPokemonsIMG.jsx";

const RecommendedPokemonGrid = () => {
    return (
        <section className="bg-primary ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Recommended
                    Pokemons</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

                    <RecommendedPokemonsIMG/>
                    <RecommendedPokemonsIMG/>
                    <RecommendedPokemonsIMG/>
                    <RecommendedPokemonsIMG/>

                </div>
            </div>
        </section>
    );
}
export default RecommendedPokemonGrid;

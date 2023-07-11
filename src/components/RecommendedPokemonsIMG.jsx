import React from 'react';
import useFetch from "../Hooks/useFetch.js";
import SkeletonGrid from "./SkeletonGrid.jsx";

const RecommendedPokemonsIMG = () => {

    const pokemonId = 1 + Math.round(Math.random() * 1010);

    const {data, loading} = useFetch(`${pokemonId}`);

    return (
        <div className="lg:flex">
            {loading ? (
                <SkeletonGrid/>
            ) : (
                <>
                    <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={data.sprites.front_default}
                         alt=""/>

                    <div className="flex flex-col justify-between py-6 lg:mx-6">
                        <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                            {data.name.toUpperCase()}
                        </a>

                        <span
                            className="text-[1em] text-gray-500 dark:text-gray-300">Type: {data.types[0].type.name}</span>
                    </div>
                </>
            )}
        </div>
    );


}
export default RecommendedPokemonsIMG;

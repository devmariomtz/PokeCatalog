import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch.js";
import SkeletonGrid from "./SkeletonGrid.jsx";

const RecommendedPokemonsIMG = ({pokeId}) => {

  const { data, loading } = useFetch(`${pokeId}`);

  return (
    <div className="lg:flex">
      {loading ? (
        <SkeletonGrid />
      ) : (
        <>
          <img
            className="object-cover w-full h-56 rounded-lg lg:w-64"
            src={data.sprites.front_default}
            alt=""
          />

          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <a
              href="#"
              className="text-xl uppercase font-semibold text-gray-800 hover:underline dark:text-white "
            >
              {data.name}
            </a>

            <span className="text-lg uppercase text-gray-500 dark:text-gray-300">
              Type: {data.types[0].type.name}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
export default RecommendedPokemonsIMG;

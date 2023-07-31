import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch.js";
import SkeletonGrid from "./SkeletonGrid.jsx";

const RecommendedPokemonsIMG = ({ pokeId }) => {
  const { data, loading } = useFetch(`${pokeId}`);

  if (loading) {
    return (
      <div className="lg:flex">
        <SkeletonGrid />
      </div>
    );
  }
  return (
    <div className="lg:flex">
      <div
        className="h-full w-full bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 p-4 sm:text-center md:text-center transform
        transition duration-1000 hover:scale-[1.07]"
      >
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src={data.sprites.front_default}
          alt=""
        />

        <div className="text-center">
          <span
            href="#"
            className="text-xl block w-full uppercase font-semibold text-gray-800 text-center dark:text-white  "
          >
            {data.name}
          </span>

          <span className="text-lg block w-full  uppercase text-gray-500 dark:text-gray-300 text-center">
            Type: {data.types[0].type.name}
          </span>
        </div>
      </div>
    </div>
  );
};
export default RecommendedPokemonsIMG;

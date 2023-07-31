import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useFetch from "../Hooks/useFetch.js";
import Loader from "./Loader.jsx";
const PokeCard = ({ word }) => {
  const isInvalidWord = word == null || word.trim().length === 0;

  if (isInvalidWord) {
    return null;
  }

  const { data, loading, isSuccess } = useFetch(word.toLowerCase());

  if (!isSuccess && !loading) {
    toast.error("Pokemon NO encontrado! 😢", { duration: 2000 });
    return <Toaster />;
  }

  if (loading) {
    return (
      <div className="bg-primary flex justify-center items-center flex-col w-full text-[1.2em]">
        <div className="mt-4 bg-primary">
          <Loader />
        </div>
      </div>
    );
  }
  if (!loading && isSuccess) {
    toast.success("Pokemon encontrado! 😎👀🎯", { duration: 2000 });
    return (
      <div className="bg-primary flex justify-center items-center flex-col w-full text-[1.2em]">
        <div className="w-[30%] flex justify-center flex-col bg-white-100  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 p-4  rounded-md  sm:text-center md:text-center">
          <img src={data.sprites.front_default} alt="" className="" />
          <div className="flex flex-col justify-center items-center text-white">
            <h2>
              <strong className="uppercase">{data.name}</strong>
            </h2>
            <p className="uppercase">type: {data.types[0].type.name}</p>
          </div>
        </div>
        <Toaster />
      </div>
    );
  }
};
export default PokeCard;

import React from "react";
import useFetch from "../Hooks/useFetch.js";
import Loader from "./Loader.jsx";
const PokeCard = ({ word }) => {
  if (word.length != 0 || word != "") {
    const { data, loading } = useFetch(word);

    return (
      <div className="bg-primary flex justify-center items-center flex-col w-full text-[1.2em]">
        {loading ? (
          <div className="bg-primary mt-4">
            <Loader />
          </div>
        ) : (
          <>
            <div className="bg-gray-400 w-[30%] flex justify-center flex-col rounded-[20px] p-3">
              <img src={data.sprites.front_default} alt="" className="" />
              <div className="flex flex-col justify-center items-center">
                <h2>
                  <strong className="uppercase">{data.name}</strong>
                </h2>
                <p className="uppercase">type: {data.types[0].type.name}</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  } else{
    return <></>;
  }
};
export default PokeCard;

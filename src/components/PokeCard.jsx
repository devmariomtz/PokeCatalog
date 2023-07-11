import React from 'react'
import useFetch from "../Hooks/useFetch.js";

const PokeCard = ({input}) => {


    const {data, loading} = useFetch(`${input}`);

    return (
        <div className="bg-primary flex justify-center items-center flex-col w-full text-[1.2em]">
            {loading ? (
                <p>CARGANDO ...</p>
            ) : (
                <div className="bg-gray-400 w-[30%] flex justify-center flex-col rounded-[20px] p-3">
                    <img src={data.sprites.front_default} alt="" className=""/>
                    <div className="flex flex-col justify-center items-center">
                        <h2><strong>{data.name.toUpperCase()}</strong></h2>
                        <p>type: {data.types[0].type.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
export default PokeCard

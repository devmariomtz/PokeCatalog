import React, {useEffect, useState} from 'react'

import axios from "axios";


const PokeCard = (props) => {

    const [pokemonName, setPokemonName] = useState('');
    const [imgPokemonURL, setImgPokemonURL] = useState('');
    const [pokeTypes, setPokeTypes] = useState('');
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${props.input}`;
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(pokeURL);
                const {name} = response.data;
                const {types} = response.data;
                const {front_default} = response.data.sprites;

                setImgPokemonURL(front_default);
                setPokeTypes(types[0].type.name);
                setPokemonName(name);
            } catch (error) {
                console.error('Error al obtener el nombre del Pokémon:', error);
            }
        };
        fetchPokemon();
    }, pokeURL);

    return (
        <div className="bg-primary flex justify-center items-center flex-col w-full text-[1.2em]">
            <div className="bg-gray-400 w-[30%] flex justify-center flex-col rounded-[20px] p-3">
                <img src={imgPokemonURL} alt=""  className=""/>
                <div className="flex flex-col justify-center items-center">
                    <h2><strong>{pokemonName.toUpperCase()}</strong></h2>
                    <p>type: {pokeTypes}</p>
                </div>
            </div>
        </div>
    );
};
export default PokeCard

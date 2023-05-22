import React, { useEffect, useState } from 'react';
import axios from 'axios';



const RecommendedPokemonsImg =  () => {
    const [pokemonName, setPokemonName] = useState('');
    const [imgPokemonURL, setImgPokemonURL] = useState('');
    const  pokemonId = 1;
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const { name } = response.data;
                setPokemonName(name);
            } catch (error) {
                console.error('Error al obtener el nombre del Pokémon:', error);
            }
        };
        fetchPokemon();
    }, [pokemonId]);

    useEffect(() => {
        const fetchPokemonURL = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const { front_default } = response.data.sprites;

                setImgPokemonURL(front_default);
            } catch (error) {
                console.error('Error al obtener el nombre del Pokémon:', error);
            }
        };
        fetchPokemonURL();
    }, [pokemonId]);

    return (
        <div className="lg:flex">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64"
src={imgPokemonURL}                 alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        {pokemonName.toUpperCase()}
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
        </div>
    );
}
export default RecommendedPokemonsImg;

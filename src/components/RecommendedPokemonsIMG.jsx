import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RecommendedPokemonsImg = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [imgPokemonURL, setImgPokemonURL] = useState('');
    const [pokeTypes, setPokeTypes] = useState('i');

    const pokemonId = 1 + Math.round(Math.random() * 1010);
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const {name} = response.data;
                setPokemonName(name);
            } catch (error) {
                console.error('Error al obtener el nombre del Pokémon:', error);
            }
        };
        fetchPokemon();
    }, []);

    useEffect(() => {
        const fetchPokemonURL = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const {front_default} = response.data.sprites;

                setImgPokemonURL(front_default);
            } catch (error) {
                console.error('Error al obtener el nombre del Pokémon:', error);
            }
        };
        fetchPokemonURL();
    }, []);

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const {types} = response.data;
                setPokeTypes(types[0].type.name);


            } catch (error) {
                console.error('Error al obtener el nombre del Pokémon:', error);
            }
        };
        fetchPokemonTypes();
    }, []);

    return (
        <div className="lg:flex">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={imgPokemonURL} alt=""/>

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    {pokemonName.toUpperCase()}
                </a>

                <span
                    className="text-[1em] text-gray-500 dark:text-gray-300">Type: {pokeTypes}</span>
            </div>
        </div>
    );
}
export default RecommendedPokemonsImg;

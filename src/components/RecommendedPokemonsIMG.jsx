import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SkeletonGrid from "./SkeletonGrid.jsx";

const RecommendedPokemonsIMG = () => {


    const [pokemonName, setPokemonName] = useState('');
    const [imgPokemonURL, setImgPokemonURL] = useState('');
    const [pokeTypes, setPokeTypes] = useState('');

    const pokemonId = 1 + Math.round(Math.random() * 1010);
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
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
    }, []);

    if (imgPokemonURL !== '') {
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
    } else {
        return (<SkeletonGrid/>);

    }

}
export default RecommendedPokemonsIMG;

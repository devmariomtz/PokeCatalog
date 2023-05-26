import React, {useEffect, useState} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const PokeResponce = (props) => {

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
    }, []);

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgPokemonURL}
                    alt="green iguana"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemonName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Type: {pokeTypes}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default PokeResponce

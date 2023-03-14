import React from "react";

const GetImagesAPI = () => {
  const url_base = "https://pokeapi.co/api/v2/pokemon/";
  const random_pokemon_id = Math.floor(Math.random() * 1274).toString();
  const pokemon_url = url_base + random_pokemon_id;

  
  const img_tag = document.getElementById('slider-image'); 
  fetch(pokemon_url)
    .then((respuesta) => respuesta.json())
    .then((data) => {img_tag.src = data.sprites.front_default})
    .catch((e) => console.log("F*ck errors: " + e));

  return (
    <>
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="./pokemon-icon.jpg"
          id="slider-image"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </>
  );
};

export default GetImagesAPI;

import React, {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecommendedPokemosGrid from "../components/RecommendedPokemosGrid.jsx";
import PokeCard from "../components/PokeCard.jsx";


const Catalog = () => {

    const [inputSearchBar, setInputSearchBar] = useState('');
    const handleInputSearchBar = (input) => {
        setInputSearchBar(input);
    };
    return (
        <>
            <Header/>
            <SearchBar onInputValue={handleInputSearchBar} />
            {
                inputSearchBar && <PokeCard input={inputSearchBar}/>
            }
            <RecommendedPokemosGrid />
            <Footer/>
        </>
    );
};

export default Catalog;

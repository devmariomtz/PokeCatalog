import React, {useState} from 'react'
import PokeResponce from "./PokeResponce.jsx";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        Console.log(inputValue);
    };
    return (
        <div className="bg-primary">

            <div className="flex justify-end text-center items-center p-[1em]">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Ingresa el nombre del pokemon o su ID"
                    className="bg-secundary rounded-2xl p-[0.7em] w-[100%] placeholder:text-[#0c1717] text-[1.2em]"
                />
                <button
                    onClick={handleClick}
                    className="bg-white text-black p-[0.7em] w-[20%] absolute rounded-2xl text-[1.2em] hover:bg-[#ffbb3c] font-bold">
                    Search
                </button>
            </div>

        </div>

    )
}

export default SearchBar
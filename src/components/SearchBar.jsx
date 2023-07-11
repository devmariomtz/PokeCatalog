import React, {useState} from 'react'

const SearchBar = ({onInputValue}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = (event) => {
        if (event.keyCode === 13 || event.type === "click")
        {
            onInputValue(inputValue);
        }
    };
    return (
        <div className="bg-primary">

            <div className="flex justify-end text-center items-center p-[1em]">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={handleClick}
                    type="text"
                    placeholder="Ingresa el nombre del pokemon o su ID"
                    className=" text-[1.2em] sm: text-[0.9em] md: text-[1em] bg-secundary rounded-2xl p-[0.7em] w-[100%] placeholder:text-[#0c1717]"
                />
                <button
                    onClick={handleClick}
                    className="text-[1.2em] sm: text-[0.9em] md: text-[1em] bg-white text-black p-[0.7em] w-[20%] absolute rounded-2xl hover:bg-[#ffbb3c] font-bold">
                    Search
                </button>
            </div>

        </div>

    )
}

export default SearchBar
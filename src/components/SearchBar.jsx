import React, { useState, Suspense, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, ErrorMessage, Form } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import AuthSchema from "../schemas/searchSchem";
import Button from "./ButtonSearch";
import UseFetch from "../Hooks/useFetch";
const PokeCard = React.lazy(() => import("./PokeCard"));

const getSuggestions = () => {
  const { data, loading } = UseFetch("?limit=100000&offset=0");
  const results = data.results;
  return loading === true ? [{ name: "" }] : results;
};

const SearchBar = () => {
  const [word, setWord] = useState("");
  const suggestions = getSuggestions();
  const handleSubmit = (values) => {
    setWord(values.word);
  };
  return (
    <div className="bg-primary">
      <Formik
        initialValues={{ word: "" }}
        validationSchema={AuthSchema.search}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <div className="flex justify-center items-center">
              <Autocomplete
                className="w-full m-3"
                freeSolo
                onChange={(event, newValue) => {
                  props.setFieldValue("word", newValue || "");
                  props.submitForm();
                  setWord(newValue);
                }}
                options={suggestions.map((element) => element.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="word"
                    value={props.values.word}
                    placeholder="Poke ID / Nombre Pokemon"
                    className="bg-white text-black rounded-lg w-full "
                  />
                )}
              />
              <Button name="Search" icon={AiOutlineSearch} />
            </div>
            <ErrorMessage
              name="word"
              className="form-text text-red-400 w-100 text-lg ml-3.5"
              component="div"
            />
          </Form>
        )}
      </Formik>
      <Suspense>
        <PokeCard word={word} />
      </Suspense>
    </div>
  );
};

export default SearchBar;

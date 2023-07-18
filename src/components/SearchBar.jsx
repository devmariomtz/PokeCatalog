import React, { useState, Suspense } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import AuthSchema from "../schemas/searchSchem";
import Button from "./ButtonSearch";
const PokeCard = React.lazy(() => import("./PokeCard"));

const SearchBar = () => {
  const [word, setWord] = useState("");
  const handleSubmit = (values) => {
    setWord(values.word);
    toast.success("Pokemon encontrado! 😎👀🎯");
  };

  return (
    <div className="bg-primary">
      <Formik
        initialValues={{ word: "" }}
        validationSchema={AuthSchema.search}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex justify-center items-center p-2">
            <Field
              type="text"
              name="word"
              placeholder="Ingresa el nombre del pokemon o su ID"
              className="bg-[#111111f5] m-3 border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75%] p-2.5 "
            />

            <Button name="Search" icon={AiOutlineSearch} />
          </div>

          <ErrorMessage
            name="word"
            className="form-text text-red-400 w-100 text-lg"
            component="div"
          />
        </Form>
      </Formik>

      <Toaster />
      <Suspense>
        <PokeCard word={word} />
      </Suspense>
    </div>
  );
};

export default SearchBar;

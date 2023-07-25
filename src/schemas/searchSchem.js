import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  word: Yup.string().required("Ups! Ingresa un dato válido :)")
});

const AuthSchema = {
  search: searchSchema,
};

export default AuthSchema;
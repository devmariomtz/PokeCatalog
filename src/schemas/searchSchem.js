import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  word: Yup.string().required("Ups! No has ingresado un dato válido")
});

const AuthSchema = {
  search: searchSchema,
};

export default AuthSchema;
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@chakra-ui/react";
import { UserContext } from "../../providers/UserProvider";
import { handleLoginSubmit } from "./useLogin.functions";

// Esquema de validación de Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const useLogin = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.logged) {
      window.location.href = "/";
    }
  }, [user]);


  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const onSubmit = handleSubmit((values) => handleLoginSubmit(values, toast));

  const loginAfterRegister = async(values) => {
    await handleLoginSubmit(values, toast)
  }

  return { register, errors, isSubmitting, onSubmit, loginAfterRegister };
};

export default useLogin;

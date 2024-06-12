import React, { useContext, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../services/api/users";
import { UserContext } from "../../providers/UserProvider";

// Esquema de validación de Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const Login = () => {
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

  const handleLoginSubmit = async (values) => {
    try {
      const data = await loginUser(values.email, values.password);
      toast({
        title: "Inicio de sesión exitoso.",
        description: "Has iniciado sesión correctamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("email", data.user.email);
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Error al iniciar sesión.",
        description: error.message || "Algo salió mal. Inténtalo de nuevo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const onSubmit = (values) => {
    handleLoginSubmit(values);
  };

  return (
    <Box as="main" flex="1">
      <Box maxW="sm" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Correo Electrónico</FormLabel>
              <Input
                type="email"
                placeholder="Correo Electrónico"
                {...register("email")}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="Contraseña"
                {...register("password")}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Iniciar Sesión
            </Button>
            <Stack direction="row" justifyContent="space-between">
              <Text
                as="button"
                color="teal.500"
                onClick={() => alert("Redirigir a Forgot Password")}
              >
                ¿Olvidaste tu contraseña?
              </Text>
              <Text
                as="button"
                color="teal.500"
                onClick={() => alert("Redirigir a Register")}
              >
                Regístrate
              </Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

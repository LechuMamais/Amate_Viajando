import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  Progress,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/api/users";

const RegisterForm = () => {
  const { handleSubmit, register, formState, watch, setError, clearErrors } =
    useForm({
      defaultValues: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordSecurityLevel, setPasswordSecurityLevel] = useState(0);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (password) => {
    let newPasswordSecurityLevel = 0;
    if (password.length >= 8) {
      newPasswordSecurityLevel++;
    }
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
      newPasswordSecurityLevel++;
    }
    if (/\d/.test(password)) {
      newPasswordSecurityLevel++;
    }
    if (/[@$!%*?&]/.test(password)) {
      newPasswordSecurityLevel++;
    }
    setPasswordSecurityLevel(newPasswordSecurityLevel);
  };

  const handlePasswordChange = (e) => {
    checkPasswordStrength(e.target.value);
  };

  const validatePassword = () => {
    return passwordSecurityLevel >= 3 || "Nivel mínimo requerido: Alto";
  };

  const submit = async (formData) => {
    setLoading(true);
    clearErrors(); // Clear previous errors
    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Las contraseñas no coinciden",
      });
      setLoading(false);
      return;
    }

    delete formData.confirmPassword;
    try {
      const response = await registerUser(formData);
      console.log(response);
      if (
        response.message?.includes("There is already a user with this email")
      ) {
        setError("email", {
          type: "manual",
          message: (
            <>
              Ya existe un usuario con este correo electrónico.{" "}
              <Link color="blue.500" href="/forgot-password">
                ¿Olvidaste tu contraseña?
              </Link>
            </>
          ),
        });
      } else if(response.message?.includes("error")) {
        setError("userName", {
            type: "manual",
            message: (
              <>
                Ha ocurrido un problema, intentalo de nuevo
              </>
            ),
          });
      }else if(response._id){
        console.log('Usuario creado con éxito')
        console.log(response)
        // Acá va el LOGIN
      }
    } catch (error) {
      console.error("Caught error:", error); // Log the error
      setError("server", {
        type: "manual",
        message:
          "Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.",
      });
    }
    setLoading(false);
  };

  return (
    <Box as="main" flex="1">
      <Box maxW="sm" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit(submit)}>
          <VStack spacing={4}>
            <Text fontSize="2xl" mb={4}>
              Comencemos...
            </Text>

            <FormControl id="userName" isInvalid={formState.errors.userName}>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input
                {...register("userName", {
                  required: "Introduce el nombre de usuario",
                  minLength: {
                    value: 3,
                    message:
                      "El nombre de usuario debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 18,
                    message:
                      "El nombre de usuario debe tener como máximo 18 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]{3,18}$/,
                    message:
                      "El nombre de usuario debe incluir números, letras Mayúsculas y minúsculas",
                  },
                })}
              />
              {formState.errors.userName && (
                <Text color="red.500" my={2}>
                  {formState.errors.userName.message}
                </Text>
              )}
            </FormControl>

            <FormControl id="email" isInvalid={formState.errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email", {
                  required: "Introduce tu email",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Introduce un email válido",
                  },
                })}
              />
              {formState.errors.email && (
                <Text color="red.500" my={2}>
                  {formState.errors.email.message}
                </Text>
              )}
            </FormControl>

            <FormControl id="password" isInvalid={formState.errors.password}>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input
                  id="password-input"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Introduce la contraseña",
                    validate: validatePassword,
                  })}
                  onChange={handlePasswordChange}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="2.25rem"
                    bgColor="transparent"
                    color="black"
                    _hover={{ bgColor: "transparent" }}
                    _active={{ bgColor: "transparent" }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Text id="password-strength-text" h="1.5rem" my={2}>
                {passwordSecurityLevel != 0 ? "Nivel de seguridad: " : " "}
                {passwordSecurityLevel == 1
                  ? "Bajo"
                  : passwordSecurityLevel == 2
                  ? "Medio"
                  : passwordSecurityLevel == 3
                  ? "Alto"
                  : passwordSecurityLevel == 4
                  ? "Muy Alto"
                  : ""}
              </Text>

              <Progress
                value={passwordSecurityLevel * 25}
                transition="all 200ms ease-in"
                size="sm"
                borderRadius="md"
                colorScheme={
                  passwordSecurityLevel == 1
                    ? "red"
                    : passwordSecurityLevel == 2
                    ? "yellow"
                    : passwordSecurityLevel == 3
                    ? "teal"
                    : passwordSecurityLevel == 4
                    ? "green"
                    : ""
                }
                my={2}
                isAnimated={true}
              />

              {formState.errors.password && (
                <Text color="red.500" my={2}>
                  {formState.errors.password.message}
                </Text>
              )}
            </FormControl>

            <FormControl
              id="confirmPassword"
              isInvalid={formState.errors.confirmPassword}
            >
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input
                id="confirm-password-input"
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Introduce la confirmación de la contraseña",
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              {formState.errors.confirmPassword && (
                <Text color="red.500" my={2}>
                  {formState.errors.confirmPassword.message}
                </Text>
              )}
            </FormControl>

            {formState.errors.server && (
              <Text color="red.500">{formState.errors.server.message}</Text>
            )}

            <Button
              type="submit"
              isDisabled={!formState.isDirty}
              colorScheme="blue"
              isLoading={loading}
              loadingText="Registrarse"
              spinnerPlacement="end"
              w={{ base: "100%", md: "160px" }}
            >
              Registrarse
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;

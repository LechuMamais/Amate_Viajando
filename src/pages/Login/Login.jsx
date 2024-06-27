import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import MyLink from "../../components/MyLink/MyLink";
import useLogin from "../../customHooks/useLogin/useLogin";
import EmailField from "../../components/userFormComponents/emailField/emailField";
import PasswordField from "../../components/userFormComponents/passwordField/passwordField";
import useRegisterForm from "../../customHooks/useRegisterForm/useRegisterForm";

const Login = () => {
  const { register, errors, isSubmitting, onSubmit } = useLogin();
  const { showPassword, togglePasswordVisibility, handlePasswordChange, validatePassword , passwordSecurityLevel  } = useRegisterForm();

  return (
    <Box as="main" flex="1">
      <Box maxW="sm" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <EmailField register={register} error={errors.email} />

            {/*<FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="Contraseña"
                {...register("password")}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>*/}



            <PasswordField
              register={register}
              error={errors.password}

              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              handlePasswordChange={handlePasswordChange}

              validatePassword={validatePassword}

              //passwordSecurityLevel={passwordSecurityLevel}
              isRegisterForm={false}
            />



            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
              spinnerPlacement="end"
              loadingText="Iniciar Sesión"
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
              <MyLink to="/register">
                <Text as="button" color="teal.500">
                  Regístrate
                </Text>
              </MyLink>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

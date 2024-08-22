import React from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PasswordField from "../../components/userFormComponents/passwordField/passwordField";
import ConfirmPasswordField from "../../components/userFormComponents/confirmPasswordField/confirmPasswordField";
import useResetPassword from "../../customHooks/useResetPassword/useResetPassword";

const ResetPassword = () => {
  const {
    register,
    formState,
    loading,
    onSubmit,
    handlePasswordChange,
    validatePassword,
    passwordSecurityLevel,
    watch,
    showPassword,
    togglePasswordVisibility,
  } = useResetPassword();
  
  const { errors } = formState;

  return (
    <Box as="main" flex="1">
      <Box maxW="sm" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
        <VStack as="form" onSubmit={onSubmit} spacing={4}>
          <Text fontSize="lg" mb={4}>
            Restablecer Contraseña
          </Text>

          <FormControl
            id="verificationToken"
            isInvalid={errors.verificationToken}
            autoComplete="none"
          >
            <FormLabel>Código de Verificación - 6 dígitos</FormLabel>
            <Input type="number" {...register("verificationToken")} />
            {errors.verificationToken && (
              <Text color="red.500" my={2}>
                {errors.verificationToken.message}
              </Text>
            )}
          </FormControl>

          <PasswordField
            register={register}
            error={errors.password} // Cambiado a "password" para ser consistente con la lógica de validación
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            handlePasswordChange={handlePasswordChange}
            validatePassword={validatePassword}
            passwordSecurityLevel={passwordSecurityLevel}
            isRegisterForm={true}
            newPassword={true}
          />

          <ConfirmPasswordField
            register={register}
            error={errors.confirmPassword}
            watch={watch}
          />

          {errors.server && (
            <Text color="red.500">{errors.server.message}</Text>
          )}

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={loading}
            type="submit"
            spinnerPlacement="end"
            loadingText="Restableciendo contraseña"
          >
            Restablecer contraseña
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ResetPassword;

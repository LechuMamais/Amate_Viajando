import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const ConfirmPasswordField = ({ register, error, watch }) => (
  <FormControl id='confirmPassword' isInvalid={error}>
    <FormLabel>Confirmar contraseña</FormLabel>
    <Input
      id='confirm-password-input'
      type='password'
      {...register("confirmPassword", {
        required: "Introduce la confirmación de la contraseña",
        validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
      })}
    />
    {error && (
      <Text color='red.500' my={2}>
        {error.message}
      </Text>
    )}
  </FormControl>
);

export default ConfirmPasswordField;

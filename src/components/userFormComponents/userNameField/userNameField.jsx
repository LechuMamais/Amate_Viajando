import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const UserNameField = ({ register, error }) => (
  <FormControl id='userName' isInvalid={error}>
    <FormLabel>Nombre de usuario</FormLabel>
    <Input
      {...register("userName", {
        required: "Introduce el nombre de usuario",
        minLength: { value: 3, message: "El nombre de usuario debe tener al menos 3 caracteres" },
        maxLength: { value: 18, message: "El nombre de usuario debe tener como máximo 18 caracteres" },
        pattern: {
          value: /^[a-zA-Z0-9]{3,18}$/,
          message: "El nombre de usuario debe incluir números, letras Mayúsculas y minúsculas",
        },
      })}
    />
    {error && (
      <Text color='red.500' my={2}>
        {error.message}
      </Text>
    )}
  </FormControl>
);

export default UserNameField;

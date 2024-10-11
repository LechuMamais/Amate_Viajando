import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

const EmailField = ({ register, error }) => (
  <FormControl id='email' isInvalid={error}>
    <FormLabel>Email</FormLabel>
    <Input
      {...register('email', {
        required: 'Introduce tu email',
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Introduce un email válido',
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

export default EmailField;

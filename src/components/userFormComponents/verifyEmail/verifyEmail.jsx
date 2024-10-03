import { VStack, Text, Button, Input, Box } from '@chakra-ui/react';
import useVerifyEmailForm from '../../../customHooks/useVerifyEmailForm/useVerifyEmailForm';

const VerifyEmail = ({ email }) => {
  const { handleSubmit, register, formState, loading, submitVerificationToken, generateAndSendNewVerificationToken } =
    useVerifyEmailForm();

  return (
    <Box as='main' flex='1'>
      <Box maxW='sm' mx='auto' mt={8} p={4} borderWidth={1} borderRadius='lg'>
        <VStack as='form' onSubmit={handleSubmit(submitVerificationToken)} spacing={4}>
          <Text fontSize='2xl' mb={4}>
            Verificación de correo
          </Text>
          <Text>Introduce el código de verificación enviado a tu correo:</Text>
          <Input type='text' {...register('verificationToken')} maxLength={6} placeholder='Código de verificación' />
          {formState.errors.verificationToken && (
            <Text color='red.500'>{formState.errors.verificationToken.message}</Text>
          )}
          <Input type='hidden' {...register('email')} value={email} />
          <Button
            type='submit'
            colorScheme='blue'
            isLoading={loading}
            spinnerPlacement='end'
            loadingText='Verificar'
            w={{ base: '100%' }}
          >
            Verificar
          </Button>
          <Button onClick={() => generateAndSendNewVerificationToken()} variant='link' size='sm' mt={3}>
            Enviar nuevo código
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default VerifyEmail;

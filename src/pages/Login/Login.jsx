import { Box, Button, Stack, VStack, Text } from '@chakra-ui/react';
import MyLink from '../../components/MyLink/MyLink';
import useLogin from '../../customHooks/useLogin/useLogin';
import EmailField from '../../components/userFormComponents/emailField/emailField';
import PasswordField from '../../components/userFormComponents/passwordField/passwordField';
import useRegisterForm from '../../customHooks/useRegisterForm/useRegisterForm';

const Login = () => {
  const { register, errors, isSubmitting, onSubmit } = useLogin();
  const { showPassword, togglePasswordVisibility, handlePasswordChange, validatePassword } = useRegisterForm();

  return (
    <Box as='main' flex='1'>
      <Box maxW='sm' mx='auto' mt={8} p={4} borderWidth={1} borderRadius='lg'>
        <VStack as='form' onSubmit={onSubmit} spacing={4}>
          <Text fontSize='2xl' mb={4}>
            Iniciar sesión
          </Text>
          <EmailField register={register} error={errors.email} />

          <PasswordField
            register={register}
            error={errors.password}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            handlePasswordChange={handlePasswordChange}
            validatePassword={validatePassword}
            isRegisterForm={false}
          />

          <Button
            mt={4}
            colorScheme='teal'
            isLoading={isSubmitting}
            type='submit'
            spinnerPlacement='end'
            loadingText='Iniciar Sesión'
          >
            Iniciar Sesión
          </Button>

          <Stack direction='row' justifyContent='space-around' w='100%'>
            <MyLink to='/forgotPassword'>
              <Text as='button' color='teal.500'>
                ¿Olvidaste tu contraseña?
              </Text>
            </MyLink>

            <MyLink to='/register'>
              <Text as='button' color='teal.500'>
                Regístrate
              </Text>
            </MyLink>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;

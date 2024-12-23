import { Box, Button, VStack, Text } from '@chakra-ui/react';
import EmailField from '../../components/userFormComponents/emailField/emailField';
import useForgotPassword from '../../customHooks/useForgotPassword/useForgotPassword';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const { register, errors, isSubmitting, onSubmit } = useForgotPassword();
  const { t } = useTranslation('Login');

  return (
    <Box maxW='sm' mx='auto' mt={8} p={4} borderWidth={1} borderRadius='lg'>
      <VStack as='form' onSubmit={onSubmit} spacing={4}>
        <Text fontSize='lg' mb={4}>
          {t('RecoverPassword')}
        </Text>

        <EmailField register={register} error={errors.email} />

        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting}
          type='submit'
          spinnerPlacement='end'
          loadingText={t('RecoverPassword')}
        >
          {t('RecoverPassword')}
        </Button>
      </VStack>
    </Box>
  );
};

export default ForgotPassword;

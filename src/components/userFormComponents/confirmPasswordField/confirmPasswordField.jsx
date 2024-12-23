import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ConfirmPasswordField = ({ register, error, watch }) => {
  const { t } = useTranslation('Register');
  return (
    <FormControl id='confirmPassword' isInvalid={error}>
      <FormLabel>{t('ConfirmPassword')}</FormLabel>
      <Input
        id='confirm-password-input'
        type='password'
        {...register('confirmPassword', {
          required: t('ConfirmPasswordRequired'),
          validate: (value) => value === watch('password') || t('ConfirmPasswordMatch'),
        })}
      />
      {error && (
        <Text color='red.500' my={2}>
          {error.message}
        </Text>
      )}
    </FormControl>
  );
};

export default ConfirmPasswordField;

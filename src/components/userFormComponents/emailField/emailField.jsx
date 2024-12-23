import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const EmailField = ({ register, error }) => {
  const { t } = useTranslation('Login');
  return (
    <FormControl id='email' isInvalid={error}>
      <FormLabel>{t('email')}</FormLabel>
      <Input
        {...register('email', {
          required: t('emailRequired'),
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: t('emailInvalidPattern'),
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
};

export default EmailField;

import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const UserNameField = ({ register, error }) => {
  const { t } = useTranslation('Register');

  return (
    <FormControl id='userName' isInvalid={error}>
      <FormLabel>{t('userName')}</FormLabel>
      <Input
        {...register('userName', {
          required: t('userNameRequired'),
          minLength: { value: 3, message: t('userNameMinLength') },
          maxLength: { value: 18, message: t('userNameMaxLength') },
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

export default UserNameField;

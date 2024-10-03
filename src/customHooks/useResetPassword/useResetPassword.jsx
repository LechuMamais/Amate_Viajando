import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { resetPassword } from '../../services/api/users';
import { useParams } from 'react-router-dom';
import usePasswordForm from '../usePasswordForm/usePasswordForm';
import { useState } from 'react';
import useLogin from '../useLogin/useLogin';

const useResetPassword = () => {
  const { handleSubmit, register, watch, formState, setError, clearErrors } = useForm({
    defaultValues: {
      verificationToken: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { loginAfterRegister } = useLogin();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { email } = useParams();

  const { showPassword, togglePasswordVisibility, handlePasswordChange, validatePassword, passwordSecurityLevel } =
    usePasswordForm();

  const handleResetPasswordSubmit = async (formData) => {
    setLoading(true);
    clearErrors();

    if (!formData.verificationToken || formData.verificationToken.length !== 6) {
      setError('verificationToken', {
        type: 'manual',
        message: 'El código de verificación debe tener 6 dígitos',
      });
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Las contraseñas no coinciden',
      });
      setLoading(false);
      return;
    }

    delete formData.confirmPassword;

    try {
      const payload = {
        email,
        verificationToken: formData.verificationToken,
        newPassword: formData.password,
      };
      const response = await resetPassword(payload);

      if (response.message == 'Contraseña restablecida correctamente') {
        toast({
          title: 'Contraseña restablecida',
          description: response.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        const userDataForLogin = {
          email: payload.email,
          password: payload.newPassword,
        };

        await loginAfterRegister(userDataForLogin);
      }
    } catch (error) {
      setError('server', {
        type: 'manual',
        message: error.response?.data?.message || 'Ha ocurrido un error',
      });
    }

    setLoading(false);
  };

  const onSubmit = handleSubmit(handleResetPasswordSubmit);

  return {
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
  };
};

export default useResetPassword;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@chakra-ui/react";
import { YupEmailSchema } from "../../resources/YupSchemas";
import { generateNewEmailVerificationToken } from "../../services/api/users";

const useForgotPassword = () => {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(YupEmailSchema),
  });

  const handleForgotPasswordSubmit = async (values) => {
    try {
      const data = await generateNewEmailVerificationToken(values);
      console.log(data);

      toast({
        title: "¡Revisa tu casilla de correo!",
        description: data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      window.location = `/resetPassword/${values.email}`;
    } catch (error) {
      toast({
        title: "Error al enviar código de verificación",
        description: "Intentelo de nuevo más tarde",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const onSubmit = handleSubmit(handleForgotPasswordSubmit);

  return { register, errors, isSubmitting, onSubmit };
};

export default useForgotPassword;

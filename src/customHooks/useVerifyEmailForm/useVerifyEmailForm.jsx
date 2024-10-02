import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { generateNewEmailVerificationToken, verifyUserEmail } from "../../services/api/users";
import { UserContext } from "../../providers/UserProvider";
import { useToast } from "@chakra-ui/react";

const useVerifyEmailForm = () => {
  const { handleSubmit, register, formState, setError } = useForm();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();

  const submitVerificationToken = async (data) => {
    setLoading(true);
    data.email = user.email;
    try {
      const response = await verifyUserEmail(data);
      if (response.message === "Correo electrónico verificado correctamente") {
        setUser({ ...user, isVerified: true });
        toast({
          title: "Email verificado correctamente!",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = "/";
      } else {
        setError("verificationToken", {
          type: "manual",
          message: "Código de verificación incorrecto",
        });
        toast({
          title: "Código de verificación incorrecto.",
          description: "Introduce correctamente el código que te hemos enviado al correo proporcionado",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = "/email_verification";
      }
    } catch (error) {
      setError("server", {
        type: "manual",
        message: "Error al verificar el correo electrónico. Por favor, inténtalo de nuevo.",
      });
      if (error.message == "Token de verificación incorrecto") {
        toast({
          title: "Código de verificación incorrecto.",
          description: "Introduce correctamente el código que te hemos enviado al correo proporcionado",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = "/email_verification";
      } else {
        toast({
          title: "Error al verificar tu correo.",
          description: "Por favor intentalo nuevamente.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = "/email_verification";
      }
    }
    setLoading(false);
  };

  const generateAndSendNewVerificationToken = async () => {
    try {
      const response = await generateNewEmailVerificationToken({
        email: user.email,
      });
      console.log(response);
      if (response.message === "Usuario no encontrado") {
        toast({
          title: "Ningún usuario registrado con el correo proporcionado",
          description: "Por favor intentalo nuevamente.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = "/register";
      }
      if (response.message === "Email de usuario ya verificado") {
        toast({
          title: "Usuario ya verificado",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = "/";
      }
      if (response.message === "Hemos generado y enviado un nuevo código de verificación") {
        toast({
          title: "Hemos enviado un nuevo código de verificación",
          description: "Introduce el nuevo código para verificar tu correo electrónico",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error al generar nuevo código.",
        description: "Por favor intentalo nuevamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return {
    handleSubmit,
    register,
    formState,
    loading,
    submitVerificationToken,
    generateAndSendNewVerificationToken,
  };
};

export default useVerifyEmailForm;

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { verifyUserEmail } from "../../services/api/users";
import { UserContext } from "../../providers/UserProvider";

const useVerifyEmailForm = () => {
  const { handleSubmit, register, formState, setError } = useForm();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const submitVerificationToken = async (data) => {
    setLoading(true);
    data.email = user.email
    try {
      const response = await verifyUserEmail(data);
      if (response.message === "Correo electrónico verificado correctamente") {
        setUser({...user, isVerified: true});
        window.location.href = "/";
      } else {
        setError("verificationToken", {
          type: "manual",
          message: "Código de verificación incorrecto",
        });
      };
    } catch (error) {
      setError("server", {
        type: "manual",
        message: "Error al verificar el correo electrónico. Por favor, inténtalo de nuevo.",
      });
    };
    setLoading(false);
  };

  return {
    handleSubmit,
    register,
    formState,
    loading,
    submitVerificationToken,
  };
};

export default useVerifyEmailForm;

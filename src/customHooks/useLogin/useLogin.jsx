import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@chakra-ui/react";
import { UserContext } from "../../providers/UserProvider";
import { checkAndRedirectIfEmailIsVerified, handleLoginSubmit } from "./useLogin.functions";
import { YupEmailAndPasswordSchema } from "../../resources/YupSchemas";

const useLogin = () => {
  const { user } = useContext(UserContext);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(YupEmailAndPasswordSchema),
  });

  useEffect(() => {
    if (user.logged) {
      checkAndRedirectIfEmailIsVerified(user);
    }
  }, [user]);

  const onSubmit = handleSubmit((values) => handleLoginSubmit(values, toast));

  const loginAfterRegister = async (values) => {
    await handleLoginSubmit(values, toast);
  };

  return { register, errors, isSubmitting, onSubmit, loginAfterRegister };
};

export default useLogin;

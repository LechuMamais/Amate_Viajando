import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/api/users";
import useLogin from "../../customHooks/useLogin/useLogin";

const useRegisterForm = () => {
  const { handleSubmit, register, formState, watch, setError, clearErrors } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordSecurityLevel, setPasswordSecurityLevel] = useState(0);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (password, setPasswordSecurityLevel) => {
    let newPasswordSecurityLevel = 0;
    if (password.length >= 8) newPasswordSecurityLevel++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) newPasswordSecurityLevel++;
    if (/\d/.test(password)) newPasswordSecurityLevel++;
    if (/[@$!%*?&]/.test(password)) newPasswordSecurityLevel++;
    setPasswordSecurityLevel(newPasswordSecurityLevel);
  };

  const handlePasswordChange = (e) => {
    checkPasswordStrength(e.target.value, setPasswordSecurityLevel);
  };

  const validatePassword = () => {
    return passwordSecurityLevel >= 3 || "Nivel mínimo requerido: Alto";
  };

  const { loginBeforeRegister } = useLogin();

  const submit = async (formData) => {
    setLoading(true);
    clearErrors();

    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", { type: "manual", message: "Las contraseñas no coinciden" });
      setLoading(false);
      return;
    }

    delete formData.confirmPassword;
    try {
      const response = await registerUser(formData);
      if (response.message?.includes("There is already a user with this email")) {
        setError("email", { type: "manual", message: <>Ya existe un usuario con este correo electrónico. <Link color="blue.500" href="/forgot-password">¿Olvidaste tu contraseña?</Link></> });
      } else if (response.message?.includes("error")) {
        setError("userName", { type: "manual", message: "Ha ocurrido un problema, intentalo de nuevo" });
      } else if (response._id) {
        await loginBeforeRegister({ email: formData.email, password: formData.password });
      }
    } catch (error) {
      setError("server", { type: "manual", message: "Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo." });
    }
    setLoading(false);
  };

  return {
    handleSubmit,
    register,
    formState,
    watch,
    showPassword,
    togglePasswordVisibility,
    handlePasswordChange,
    validatePassword,
    passwordSecurityLevel,
    loading,
    submit,
  };
};

export default useRegisterForm;
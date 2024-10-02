import { loginUser } from "../../services/api/users";

export const checkAndRedirectIfEmailIsVerified = (user) => {
  if (!user.isVerified) {
    window.location.href = "/email_verification";
  } else {
    window.location.href = "/";
  }
};

export const handleLoginSubmit = async (values, toast) => {

  try {
    const data = await loginUser(values.email, values.password);
    toast({
      title: "Inicio de sesión exitoso.",
      description: "Has iniciado sesión correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    localStorage.setItem("accessToken", data.token);
    localStorage.setItem("userId", data.user._id);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("AmateViajandoLogged", "true");

    checkAndRedirectIfEmailIsVerified(data.user);
  } catch (error) {
    toast({
      title: "Error al iniciar sesión.",
      description: error.message || "Algo salió mal. Inténtalo de nuevo.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

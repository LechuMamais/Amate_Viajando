import { loginUser } from "../../services/api/users";

export const handleLoginSubmit = async (values, toast) => {
    //console.log(values);
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
    window.location.href = "/";
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

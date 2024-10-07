AMATE VIAJANDO

Comunicación con la API:

    - getDestinations, getDestinationById: Obtienen todas las destinaciones o una destinación específica.
    - createDestination, updateDestination, deleteDestination: Crean, actualizan o eliminan una destinación. Requieren un token de autenticación.
    - getImages, getImageById: Obtienen todas las imágenes o una imagen específica.
    - createImage, updateImage, deleteImage: Crean, actualizan o eliminan una imagen. createImage y updateImage manejan el envío de un archivo usando FormData.     Requieren un token de autenticación.
    - getTours, getTourById: Obtienen todos los tours o un tour específico.
    - createTour, updateTour, deleteTour: Crean, actualizan o eliminan un tour. Requieren un token de autenticación.
    - getUsers, getUserById: Obtienen todos los usuarios o un usuario específico.
    - registerUser: Registra un nuevo usuario.
    - loginUser: Inicia sesión un usuario.
    - checkLogged: Verifica si un usuario está autenticado. Requiere un token de autenticación.
    - updateUser, deleteUser: Actualizan o eliminan un usuario. Requieren un token de autenticación.

DOCUMENTACION DE HOOKS:

usePasswordForm

El hook usePasswordForm encapsula la lógica relacionada con la gestión de contraseñas, específicamente la visibilidad de la contraseña, el cálculo de la fortaleza de la contraseña y su validación.

    Funciones Expuestas:
        showPassword: Estado booleano que indica si la contraseña está visible.
        togglePasswordVisibility: Función para alternar la visibilidad de la contraseña.
        handlePasswordChange: Función que se encarga de actualizar el nivel de seguridad de la contraseña a medida que el usuario escribe.
        validatePassword: Función que valida si la contraseña cumple con el nivel de seguridad mínimo requerido.
        passwordSecurityLevel: Nivel de seguridad de la contraseña, representado por un número.

    Uso Común:
        Este hook se puede reutilizar en formularios donde se requiera manejar contraseñas, como en la creación de una cuenta o el restablecimiento de la misma.

useRegisterForm

El hook useRegisterForm se encarga de gestionar el formulario de registro de usuarios, integrando la lógica de contraseñas proporcionada por usePasswordForm.

    Funciones Expuestas:
        handleSubmit: Función para gestionar el envío del formulario.
        register: Método de react-hook-form para registrar los campos del formulario.
        formState: Estado del formulario, que incluye propiedades como errors y isSubmitting.
        watch: Función para observar cambios en campos específicos del formulario.
        showPassword, togglePasswordVisibility, handlePasswordChange, validatePassword, passwordSecurityLevel: Heredadas de usePasswordForm.
        submit: Función principal que gestiona la lógica del envío del formulario, validación de contraseñas, y manejo de errores.

    Uso Común:
        Este hook se utiliza en el componente de registro de usuarios, permitiendo la creación de nuevos usuarios y la validación de sus contraseñas.

useResetPassword

El hook useResetPassword gestiona la lógica del formulario de restablecimiento de contraseñas. Se basa en usePasswordForm para reutilizar la lógica de manejo de contraseñas.

    Funciones Expuestas:
        register: Método de react-hook-form para registrar los campos del formulario.
        errors: Estado que contiene los errores de validación de los campos.
        isSubmitting: Estado booleano que indica si el formulario se está enviando.
        onSubmit: Función que maneja el envío del formulario de restablecimiento de contraseña.
        showPassword, togglePasswordVisibility, handlePasswordChange, validatePassword, passwordSecurityLevel: Heredadas de usePasswordForm.
        watch: Función para observar cambios en campos específicos del formulario.

    Uso Común:
        Este hook se utiliza en el componente de restablecimiento de contraseña, permitiendo que los usuarios restablezcan su contraseña tras recibir un código de verificación.

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

//devRoute.md

BACKEND: - Modificacion importante: Agregar orden a las imagenes de destinations.
Ahora images es un array de objetos:
{
order: { type: Number, required: true },
imgObj: { type: mongoose.Types.ObjectId, required: true, default: {}, ref: "images" }
}
Modificar el modelos,
Modificar los controllers con los popupate --> .populate('images.imgObj')
Actualizar la base de datos con la informacion que ya está
Actualizar el front - Luego, lo mismo para tours - Modificacion: Agregar orden de tours dentro de destinations:
Modificar los modelos,
Modificar los controllers con los popupate
Actualizar la base de datos con la informacion que ya está
Actualizar el front

Por hacer:

- Poner el logo y la imagen en mailer.js - Correccion de Santi en Auth con la password - isAuth\_ Chequear que esté ok la parte de req.user = user; user.password = null - Controladores para agregar tour a fav y a carritos => que no se dupliquen. - Controladores para quitar tour de favoritos y de carrito - users, isAuth, isAdmin, carrito, etc. - Carrito: manejar opciones de tour: precio y cantidad de pax.

---

FRONTEND:

    / CheckList - Destinations:
        - Create:   Que se cree el destino
                    Que se creen las imagenes
                    Que se suban correctamente las imagenes a cloudinary
                    Decidir si la lista de tours la voy a agregar acá o luego en update

        - Delete:   Que se elimine el destino

        - Update:   Que se modifique el destino
                    Que se modifique correctamente la lista de tours
                    Que se modifiquen las propiedades de las imagenes
                    Que se modifiquen correctamente las imagenes de cloudinary: Que se borren las anteriores y se agreguen las nuevas.

    - MyModal: Aplicar en todos los delete

    - ORDER: El front debe ordenar los arrrays de imagenes y tours antes de mostrarlos.
        Podría hacer esto directamente dentro de las funciones de services/api

    USER:
        - Crear la recuperación de contraseña
            Todos los customHooks hechos y funcionando, falta hacer pruebas!!!
            Chequear que se este modificando la contraseña

    - Tours:
        ToursButtonContainer: componetizar
        Testear que esté funcionando todo ok la función de agregar y quitar

    - Eslint
    - Prettier

Por hacer:

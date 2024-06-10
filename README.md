# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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

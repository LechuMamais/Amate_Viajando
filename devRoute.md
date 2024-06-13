BACKEND:

Por hacer:
    - Correccion de Santi en Auth con la password
    - Controladores para agregar tour a fav y a carritos => que no se dupliquen.
    - Controladores para quitar tour de favoritos y de carrito
    - users, isAuth, isAdmin, carrito, etc.
    - login con verificacion de email, utilizando alguna API de correo electrónico
    - Carrito: manejar opciones de tour: precio y cantidad de pax.
    - isAuth_ Chequear que esté ok la parte de         req.user = user;        user.password = null


-----------------------------------------------------------------------------------------------------------------------
FRONTEND:

Por hacer:

    - Profile
    - Para admin, que pueda modificar los destinations y los tours:
        - Vamos bien, lo siguiente es que las imagenes que ya están las muestre, y no las tome como campo requerido
            el campo file si no queremos modificarlas.
        - Que nos permita borrar imágenes, y que esto genere la solicitud deleteImage con el id.
        - Al darle a modificar una imagen, chequear que la anterior se borre de cloudinary


    - Register
    - Tour: Mostrar si está en la lista de fav, por ej con un corazon (que funcione también como boton)

    - Hay un bug con el menu burger sobre el slider, dejan de funcionar los clicks
    - Chequear que pasa con la page tours y el boton tours del Header
    - Eslint
    - Prettier
    - Ver Carrito
    - Comunicacion con la Base de datos.
    - paginas de login, register, 
    - Carrito
    - Skeletor loaders
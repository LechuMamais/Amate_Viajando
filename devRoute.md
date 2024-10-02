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

    - HOME:
        Arreglar el minibug, de que si la pantalla es más corta que el contenido, abajo queda sin fondo!

    - Skeleton loaders





    - Tours: Que tengan PRECIO

    - Renombrar orderImagesArray

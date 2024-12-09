# Proximos pasos:

1. Cambiar boton: 'Agendar Cita' por 'Coaching Viajero'
   Y de ahí a mostrar una web donde se explica lo que es el coaching viajero, y recién ahí el boton de agendar
   Esta seccion tiene que estar en castellano, ingles e italiano dependiendo del idioma del browser.
   Opcion: Mostrar una imagen arriba del texto.
   .
   Seccion de comentarios y reviews de clientes, y estrellas de comentarios en google -> Para eso tiene que estar ya las reviews y tal

2. Blog:
   A la parte del blog se entra desde la pagina de coaching...
   Basico: Una gran imagen, y luego texto con bastante aire, posibilidad de agregar titulos y subtitulos h2 a h5
   .
   He decidido utilizar quill para el content, y usar un form normal para el titulo, subtitulo.
   Falta ver como agregar la imagen usand ImagesForm
   Chequear que esté funcionando correctamente! Cosa que, de momento, ya sé que no.

   - Agregar, en profile/admin una seccion de editar articulos, borrar articulos y boton de crear articulo nuevo
   - Agregar en el header y en otras partes, links a la seccion de artículos.

   .

   UPDATE: Voy bien, falta copiar de los tours la gestion de las imagenes al actualizar los articles. Después será hacer test de todo
   TO-DO:

   - ArticlesList
   - En perfil de admin, mostrar la ArticlesList y al darle click ir a editar article
   - En el resto de la web, mostrar el ArticlesList.

3. Cambair pagina destinos:
   Al darle click que ponga las banderas de los paises disponibles: Argentina, España italia
   Y al darle a la bandera, aparezcan los destinos dentro de esos paises
   .
   Quizás podría automatizarse esto, para que los destinos tengan una propiedad país. Luego mapear todos los destinos para obtener una lista de paises
   Con la lista de paises, obtener de alguna API las banderas. Así, si se agrega algún destino fuera de los paises iniciales, se agregará el nuevo
   país automaticamente al inicio.
   .

4. Idioma:
   Me parece superimportante que todos los destinos y tours tengan descripción en idiomas, minimamente ingles, castellano, italiano, portugues.
   El Hook que obtiene el idioma del browser debería ser utilizado por un provider, y en todos los componentes donde haya texto utilizarlo
   En la BD, donde hay texto, tiene que haber un objeto con el idioma primero, habrá que modificar todos los create y los update para agregar
   la posibilidad de tener todo en varios idiomas!

.

.

# Micro mejoras

    Utilizar el componente LocalizedHeaderAndText en DetailsPage - Para eso tendría que tener los destinos y tours en idiomas!
    .

# Ideas para versiones futuras

- Al componente Card, agregarle el corazón de fav

- Blog: Sección donde el usuario admin pueda escribir entradas de blog y generar contenido, y los usuarios puedan responder con comentarios.

- Sección con comentarios y fotos de turistas que hayan hecho los tours

- Tours: Evaluar la necesidad de agregar precios, calendario de reservas, y en ultima instancia un carrito y una pasarela de pago.

- Idiomas: Web en ingles, portugues y castellano.

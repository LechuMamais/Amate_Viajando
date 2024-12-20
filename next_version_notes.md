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

   - ArticleDetail - que content se muestre con los estilos adecuados!
   - En el resto de la web, mostrar el ArticlesList.
   - Refactorizar el código de esta sección!
     Estoy haciendo una locura:
     pasar TODAS las funciones fetch centralizandolas en fetchManager, que tendrá todos los mensajes de toast, las ref a las funciones,
     y toda la info necesaria para hacer todos los fetch de la APP
     Sería algo asi como los ACTIONS de un Reducer? Chequear

3. Cambiar pagina destinos:
   Al darle click que ponga las banderas de los paises disponibles: Argentina, España italia
   Y al darle a la bandera, aparezcan los destinos dentro de esos paises
   .
   Quizás podría automatizarse esto, para que los destinos tengan una propiedad país. Luego mapear todos los destinos para obtener una lista de paises
   Con la lista de paises, obtener de alguna API las banderas. Así, si se agrega algún destino fuera de los paises iniciales, se agregará el nuevo
   país automaticamente al inicio.
   .

   1. Actualizar el backend para agregar la propiedad country al model de destinations. Los valores de esta propiedad estarán reducidos al array
      de los iso2code, para evitar posibles errores.
   2. Modificar el formulario de create y update Destinations para agregar un campo tipo options con los paises. Podemos mostrar el nombre del país
      pero guardar el valor del codigo ISO del json
      Está hecho, faltaría chequear que los formularios de imágenes estén todos funcionando bien, porque he tenido que modificarlos!
      Se podría hacer una función para que al cargar el updateDestination se muestre seleccionado el país original.
   3. Crear el componente de las banderas, que se muestra antes de mostrar los destinos. Otra opcion es mostrar todos los destinos, y un filtro
      por países disponibles. Los países disponibles los vamos a obtener mapeando las propiedades country de los destinations. Las banderas las vamos
      a sacar de https://flagsapi.com/#quick

4. Idioma:
   Me parece superimportante que todos los destinos y tours tengan descripción en idiomas, minimamente ingles, castellano, italiano, portugues.
   El Hook que obtiene el idioma del browser debería ser utilizado por un provider, y en todos los componentes donde haya texto utilizarlo.
   En la BD, donde hay texto, tiene que haber un objeto con el idioma primero, habrá que modificar todos los create y los update para agregar
   la posibilidad de tener todo en varios idiomas!

\*ERROR: Al actualizar el orden de imagenes de destinos
.

.

# Micro mejoras

    Utilizar el componente LocalizedHeaderAndText en DetailsPage - Para eso tendría que tener los destinos y tours en idiomas!

    FIXEAR: Updater de tours y destinations
    .

    Usar el textarea de Quill para las longDescription de Tours y Destinations

# Ideas para versiones futuras

- Al componente Card, agregarle el corazón de fav

- Blog: Sección donde el usuario admin pueda escribir entradas de blog y generar contenido, y los usuarios puedan responder con comentarios.

- Sección con comentarios y fotos de turistas que hayan hecho los tours

- Tours: Evaluar la necesidad de agregar precios, calendario de reservas, y en ultima instancia un carrito y una pasarela de pago.

- Idiomas: Web en ingles, portugues y castellano.

# Amate Viajando - Agencia de Turismo en la Patagonia Argentina

## Descripción del Proyecto

Amate Viajando es una web app desarrollada para una agencia de turismo que opera principalmente en la Patagonia Argentina. Su propósito es mostrar las opciones de tours que se ofrecen en los distintos destinos donde la agencia tiene operaciones. Está dirigida a viajeros de todo tipo que deseen conocer y explorar la Patagonia.

### Funcionalidades clave:

- Contacto directo con la agencia por email o WhatsApp, tanto para consultas generales como para preguntas específicas sobre cada tour.
- Creación de cuentas de usuario.
- Almacenamiento de tours favoritos en una lista personal.
- Los administradores pueden agregar, modificar o eliminar destinos y tours, incluyendo la edición de nombres, descripciones, imágenes y otros datos.

## Tecnologías Utilizadas

### Frontend

- **React** + **Vite**
- **Chakra UI** para la interfaz de usuario.
- **Cloudinary** para la gestión de imágenes.

### Backend

- **MongoDB** como base de datos.
- **Express** como framework para el servidor.
- **Cloudinary** para la gestión de imágenes.
- **Nodemailer** para el envío de correos electrónicos.
- **JSON Web Tokens (JWT)** para la autenticación.

## Estructura de Carpetas

### Frontend

La estructura del frontend sigue una organización modular dentro de la carpeta `src`:

- **components**: Componentes de la aplicación.
- **customHooks**: Hooks personalizados.
- **pages**: Páginas principales de la aplicación.
- **providers**: Contextos y providers.
- **resources**: Archivos estáticos y recursos.
- **services**: Servicios de API y lógica externa.
- **skeletonLoaders**: Loaders para mejorar la experiencia de usuario.
- **utils**: Utilidades y funciones auxiliares.

### Backend

El backend está organizado en torno a controladores, modelos de base de datos y rutas para la API.

## Instalación y Configuración Local

### Clonar Repositorios

El proyecto está dividido en dos repositorios:

- **Frontend**: [Amate_Viajando](https://github.com/LechuMamais/Amate_Viajando)
- **Backend**: [Amate_Viajando_Backend](https://github.com/LechuMamais/Amate_Viajando_Backend)

### Instalación del Frontend

1. Clona el repositorio del frontend:
   ```bash
   git clone https://github.com/LechuMamais/Amate_Viajando.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd amate_viajando
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Instalación del Backend

1. Clona el repositorio del backend:

   ```bash
   git clone https://github.com/LechuMamais/Amate_Viajando_Backend.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd amate_viajando_back
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

   ```bash
   DB_URL=<URL de la base de datos MongoDB>
   JWT_SECRET=<Clave secreta JWT>
   CLOUDINARY_API_KEY=<Clave API de Cloudinary>
   CLOUDINARY_API_SECRET=<Secreto API de Cloudinary>
   CLOUDINARY_CLOUD_NAME=<Nombre de la nube de Cloudinary>
   EMAIL_USER=<Correo electrónico para Nodemailer>
   EMAIL_PASS=<Contraseña del correo electrónico para Nodemailer>
   EMAIL_HOST=<Host del servicio de correo>
   EMAIL_PORT=<Puerto del servicio de correo>
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Dependencias

### Frontend

- @chakra-ui/icons
- @chakra-ui/react
- @emotion/react
- @emotion/styled
- @hookform/resolvers
- framer-motion
- react
- react-dom
- react-hook-form
- react-icons
- react-responsive-carousel
- react-router-dom
- swiper
- uvcanvas
- yup

### Backend

- bcrypt
- cloudinary
- cors
- dotenv
- express
- jsonwebtoken
- mongodb
- mongoose
- multer
- multer-storage-cloudinary
- nodemailer

## Variables de Entorno

Solo el backend utiliza un archivo `.env` con las siguientes variables de entorno:

- `DB_URL`: La URL de la base de datos MongoDB.
- `JWT_SECRET`: Clave secreta para la autenticación con JWT.
- `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_CLOUD_NAME`: Para la configuración de Cloudinary para la gestión de imágenes.
- `EMAIL_USER`: Correo electrónico para Nodemailer.
- `EMAIL_PASS`: Contraseña del correo electrónico para Nodemailer.
- `EMAIL_HOST`, `EMAIL_PORT`: Para la configuración de Nodemailer.

## Despliegue en WNPower

El despliegue de esta aplicación en el hosting WNPower fue sencillo siguiendo estos pasos:

1. Ejecutar el comando `npm run build` en el proyecto de frontend para generar la carpeta `dist` que contiene los archivos estáticos listos para producción.
2. Comprimir los archivos de la carpeta `dist` en un archivo `.zip`.
3. Subir el archivo `.zip` al administrador de archivos de cPanel.
4. Descomprimir el archivo en la carpeta `public_html`.
5. Crear o modificar el archivo `.htaccess` en la carpeta `public_html` para asegurar el correcto manejo de las rutas con React Router.

## Herramientas de Desarrollo

El proyecto utiliza ESLint y Prettier para el control del estilo de código y linting. La configuración está en el archivo .eslintrc.cjs:

```bash
module.exports = {
root: true,
env: { browser: true, es2020: true },
extends: [
 'eslint:recommended',
 'plugin:react/recommended',
 'plugin:react/jsx-runtime',
 'plugin:react-hooks/recommended',
 'eslint-config-prettier',
],
ignorePatterns: ['dist', '.eslintrc.cjs'],
parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
settings: { react: { version: 'detect' } },
plugins: ['react-refresh'],
rules: {
 'react/jsx-no-target-blank': 'off',
 'react/prop-types': 'off',
 'react-refresh/only-export-components': [
   'warn',
   { allowConstantExport: true },
 ],
 semi: ['error', 'always'],
 quotes: ['error', 'single'],
},
}
```

## Contribuciones:

Actualmente, el proyecto no está abierto a contribuciones externas.

## Desarrolladores:

Alexis Mamais - Desarrollo Full Stack

## Licencia:

Este proyecto no está licenciado públicamente.

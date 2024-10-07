Amate Viajando - Web App

Descripción:

Amate Viajando es una web app desarrollada para una agencia de turismo que opera principalmente en la Patagonia argentina. Su objetivo es mostrar a los usuarios las distintas opciones de tours disponibles, permitiéndoles contactar con la agencia mediante email o WhatsApp. Además, los usuarios pueden registrarse para crear una lista de favoritos con sus tours preferidos. Los administradores tienen la capacidad de gestionar (agregar, modificar y eliminar) tours y destinos dentro de la plataforma.
Tecnologías Utilizadas:

Frontend:

    React + Vite
    Chakra UI para el diseño de la interfaz
    Cloudinary para la gestión de imágenes

Backend:

    Express (Node.js)
    MongoDB para la base de datos
    Cloudinary para la gestión de imágenes
    Nodemailer para el envío de correos electrónicos

Dependencias del Frontend:

json

"dependencies": {
  "@chakra-ui/icons": "^2.1.1",
  "@chakra-ui/react": "^2.8.2",
  "@emotion/react": "^11.11.4",
  "@emotion/styled": "^11.11.5",
  "@hookform/resolvers": "^3.6.0",
  "framer-motion": "^11.2.10",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.51.5",
  "react-icons": "^5.2.1",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^6.23.1",
  "swiper": "^11.1.14",
  "uvcanvas": "^0.2.1",
  "yup": "^1.4.0"
}

Dependencias del Backend:

json

"dependencies": {
  "bcrypt": "^5.1.1",
  "cloudinary": "^1.41.3",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.7.0",
  "mongoose": "^8.4.1",
  "multer": "^1.4.5-lts.1",
  "multer-storage-cloudinary": "^4.0.0",
  "nodemailer": "^6.9.14"
}

Configuración del Proyecto:
Variables de Entorno:

Solo el backend utiliza un archivo .env con las siguientes variables de entorno:

    DB_URL: La URL de la base de datos MongoDB
    JWT_SECRET: Clave secreta para la autenticación con JWT
    CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME: Para la configuración de Cloudinary para la gestión de imágenes
    EMAIL_USER: Correo electrónico para Nodemailer
    EMAIL_PASS: Contraseña del correo electrónico para Nodemailer
    EMAIL_HOST, EMAIL_PORT: Para la configuración de nodemailer

El frontend no necesita un archivo .env.
Estructura del Proyecto:

src
├── components
├── customHooks
├── pages
├── providers
├── resources
├── services
├── skeletonLoaders
└── utils

Instalación y Configuración Local:
1. Clonar el repositorio:

bash

git clone https://github.com/tu-repositorio.git

2. Instalar dependencias del frontend:

bash

cd frontend
npm install

3. Instalar dependencias del backend:

bash

cd backend
npm install

4. Configurar las variables de entorno en el backend:

Crea un archivo .env en la raíz del backend con las variables descritas anteriormente.
5. Ejecutar la aplicación:

Frontend:

bash

npm run dev

Backend:

bash

npm run start

Comandos Disponibles:

    Desarrollo:

    bash

npm run dev

Build para producción:

bash

npm run build

Vista previa de producción:

bash

npm run preview

Linting y formato:

bash

    npm run lint
    npm run lintfix
    npm run format

Despliegue:

El despliegue de la aplicación se realiza en el hosting de WNPower, utilizando cPanel. El procedimiento es el siguiente:

    Ejecuta npm run build para generar la carpeta dist.
    Comprime el contenido de dist y súbelo a la carpeta public_html del hosting.
    Asegúrate de tener un archivo .htaccess con las siguientes reglas para manejar las rutas de la app:

bash

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule .* /index.html [L]

Herramientas de Desarrollo:

El proyecto utiliza ESLint y Prettier para el control del estilo de código y linting. La configuración está en el archivo .eslintrc.cjs:

js

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
};

Contribuciones:

Actualmente, el proyecto no está abierto a contribuciones externas.
Desarrolladores:

    Alexis Mamais - Desarrollo Full Stack

Licencia:

Este proyecto no está licenciado públicamente.
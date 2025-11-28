#  Frontend - My Front App

Este proyecto corresponde al **frontend** de la aplicación *E-Comerse*, desarrollado en **React + Vite**.  
Su función principal es consumir la API del backend [`api-productos`](https://github.com/fraperrone/api-productos), alojada en el puerto **8080**.

##  Requisitos previos

- **Node.js** (versión 18 o superior recomendada)
- **npm** (gestor de paquetes)

##  Dependencias principales

El proyecto utiliza las siguientes dependencias:

- **React** → librería principal para la UI
- **Vite** → herramienta de build y servidor de desarrollo
- **React Router DOM** → manejo de rutas y roles (Admin / Cliente)
- **Axios o Fetch API** → para las llamadas a la API
- **Bootstrap / Tailwind (opcional)** → estilos y componentes

Instalación de dependencias:

```bash
npm install
```

 Ejecución en entorno de prueba
Para levantar el frontend en modo desarrollo:
```bash
npm run dev
```

Esto abrirá la aplicación en el puerto 5173 (por defecto de Vite).
La aplicación realizará los fetch hacia la API en http://localhost:8080.

 Credenciales y roles
El sistema de login tiene restricciones por Router, según el rol del usuario:
- Admin → acceso completo a las funcionalidades de administracion de productos (No a carrito y pedidos del usuario)
- Cliente → acceso limitado según permisos (sin acceso a la seccion de administracion de productos)

 IMPORTANTE:
Por defecto, en la pantalla de login se muestra:
- Usuario Admin → credenciales escritas automáticamente en el formulario.
- Usuario Cliente → credenciales visibles en un párrafo debajo del login.
Esto facilita la validación de roles en entornos de prueba.

 Base de datos
La API (api-productos) crea automáticamente la base de datos e-comerse en MySQL al ejecutarse.
El frontend depende de esta API para funcionar correctamente.

 Estructura del proyecto
- src/ → código fuente del frontend
- components/ → componentes reutilizables
- pages/ → vistas principales
- router/ → configuración de rutas y roles
- public/ → archivos estáticos
- package.json → dependencias y scripts

 Relación con el backend
Este frontend está diseñado para interactuar con el backend .
Asegúrate de tener el backend corriendo en http://localhost:8080 antes de iniciar el frontend.





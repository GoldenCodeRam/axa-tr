# Prueba Técnica, Distribuciones AXA SAS

Este es el proyecto realizado para el cumplimiento de la prueba técnica ofrecida por la empresa Distribuciones AXA SAS. El proyecto es una aplicación web escalable para una tienda online, que haga uso de las tecnologías de [Laravel](https://laravel.com/), [JavaScript](https://www.javascript.com/), [React.js](https://react.dev/), Roles y Permisos.

A continuación se muestra una lista de requerimientos y su estado actual de desarrollo:

 - [x] Servidor web: [Nginx](https://www.nginx.com/)
     - [x] Nginx con despliegue para un posible balanceo de cargas.
     - [ ] Balanceo de cargas probado con más de una aplicación.
 - [ ] API REST:
     - [ ]  Productos.
         - [x] Crear producto.
         - [ ] Actualizar producto.
         - [ ] Editar producto.
         - [ ] Eliminar producto.
     - [ ]  Categorías.
         - [ ] Crear categoría.
         - [ ] Actualizar categoría.
         - [ ] Editar categoría.
         - [ ] Eliminar categoría.
     - [ ]  Usuarios.
         - [ ]  Crear usuario.
         - [ ]  Actualizar usuario.
         - [ ]  Editar usuario.
         - [ ]  Eliminar usuario.
 - [x]  Sistema de autenticación con JWT.
 - [x]  Sistema de autorización con JWT.
 - [ ]  Sistema de roles y permisos.
 - [x]  Almacenar imágenes subidas con el producto en el servidor local.
 - [x]  Mostrar una lista de productos con imágenes, categorías y precios.
 - [ ]  Permitir a los usuarios buscar productos por nombre, categoría o precio.
 - [ ]  Permitir a los usuarios usar un carrito de compra.
 - [ ]  Permitir a los usuarios realizar pedidos.
 - [ ]  Mostrar historial de pedidos.
 - [ ]  Pruebas.
     - [x]  Pruebas unitarias.
     - [ ]  Pruebas funcionales.

Por otra parte, se explican diversas partes del proyecto, como:

 - [Arquitectura General](#arquitectura-general)
 - [Casos de Uso](#casos-de-uso)
 - [Diagrama Entidad/Relación](#diagrama-entidadrelación)

## Arquitectura General

Para la arquitectura general del sistema, se busca desde un principio que sea escalable tanto vertical como horizontalmente. Para esto, se hace uso de [Docker](https://www.docker.com/) y [Nginx](https://www.nginx.com/). Toda la configuración es realizada de manera que se pueda escalar haciendo uso de los contenedores de Docker, y del balanceo de carga de Nginx.

También se usa Docker para hacer el despliegue de la base de datos relacional [PostgreSQL](https://www.postgresql.org/), para realizar el almacenamiento de la información.

Por el momento, el proyecto solo hace uso de una (1) instancia del servicio.

<p align="center">
    <img src="https://github.com/GoldenCodeRam/axa-tr/blob/main/docs/1.png" width="600" alt="General Architecture">
    <br />
    Imagen: Arquitectura General del Sistema.
</p>

## Casos de Uso

Los casos de uso del sistema se pueden observar en la Imagen: Casos de Uso del Sistema. Se pueden observar todas las funcionalidades principales que se desean realizar en el sistema y cómo estas interactúan entre si.

<p align="center">
    <img src="https://github.com/GoldenCodeRam/axa-tr/blob/main/docs/2.png" width="800" alt="General Architecture">
    <br />
    Imagen: Casos de Uso del Sistema.
</p>
Nota: Los casos de uso marcados con el símbolo ✅, están completados.

### JWT-Auth

La autenticación a través de tokens tipo [JWT](https://jwt.io/), se hace utilizando la librería para Laravel: https://github.com/tymondesigns/jwt-auth. Los tokens son guardados como *cookies*, haciendo uso de la funcionalidad de los *cookies* encriptados de Laravel.

> Cabe resaltar que, haciendo uso de la librería, se encuentra que falta documentación que sería útil para el desarrollo del proyecto. Mientras se realizaba la prueba técnica, se encontró un problema con la librería, que ha sido documentado en el repositorio correspondiente. Si se quiere saber más sobre el estado de esta petición, referirse a: https://github.com/tymondesigns/jwt-auth/issues/1972. El problema que se encuentra en la librería imposibilita la salida del usuario del sistema invalidando el token. En la conversación se muestra una solución a este problema.

### Seeders

Se utilizaron *Seeders* para todas las funcionalidades presentes en la aplicación. Además, se hace uso de la API: https://fakestoreapi.com/, para hacer una carga inicial de diferentes productos para su prueba.

## Diagrama Entidad/Relación

El diseño de la base de datos se realizó pensando en su escalabilidad y su flexibilidad. Sin embargo, en el diagrama se encuentran unos comentarios que se tuvieron que realizar para reducir el tiempo de desarrollo de la prueba.

<p align="center">
    <img src="https://github.com/GoldenCodeRam/axa-tr/blob/main/docs/3.png" width="800" alt="General Architecture">
    <br />
    Imagen: Diagrama de Entidad Relación.
</p>

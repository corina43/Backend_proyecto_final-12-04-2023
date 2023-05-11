# Backend_proyecto_final-12-04-2023

# E_Books API project

## Back-end project for GeeksHubs Academy


Los requisitos funcionales del proyecto requieren una base de datos capaz de contener varios productos(libros), usuarios con roles distintos y los préstamos realizados por los usuarios.

Cada préstamo solo puede contener unlibro electrónico , además del ID del usuario que realiza el préstamo y las fechas de inicio y finalización de esa transacción.

 ## Diagrama BD // Database diagram

---

!['imagen-db'](/images/Screenshot_129.png)

---

## Technologias usadas

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" height="120"/><img src="https://miro.medium.com/max/560/1*hAAm71eC0mIg3RIA6S4-DQ.png" height="120"/><img src="https://thumbs.dreamstime.com/b/icono-logo-design-ui-o-ux-app-de-la-base-de-datos-sql-96841969.jpg" height="120"/><img src="https://cdn.buttercms.com/4XpulFfySpWyYTXuaVL2" height="100"/><img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" height="120"/>

## Instalación local // Local instalation

---

1. Clonamos el repositorio. // Clone repository.
2. Instalamos dependencias. // Install dependencies. (` $ npm install `)
3. Conectamos nuestro repositorio con la base de datos a través del archivo config.json. // Engage our repository wiith the database through the config.json file.
4. Para crear la base de datos en MySql Workbench. // To create the database at Workbench. (``` $ npx sequelize-cli db:create ```).
5. Ejecutamos las migraciones. // Execute migrations. (``` $ npx sequelize-cli db:migrate ```) 
6. Poblamos la base de datos. // Populate data base. (``` $ npx sequelize-cli db:seed:all ```) 
7. Levantamos el servidor. // Run the server. (``` $ npm run dev ```)

8. Creamos los endpoint en el Postman (o similar) para empezar a hacer las primeras consultas. 
## Endpoints

---

!['imagen-db'](/images/ezgif-1-832880d820.gif)

---
## Explicación del proyecto CRUD


Este proyecto incluye 23 endpoints, tanto públicos como privados, con un sistema de autenticación basado en JSON Web Tokens.


### AuthController


*  POST /registro: Permite a un usuario registrarse en el sistema. Se validan los campos obligatorios y se crea un nuevo usuario en la base de datos.

 * POST /login: Permite a un usuario iniciar sesión. Se verifica la existencia del usuario y la coincidencia de las credenciales proporcionadas. Se genera un token JWT para la autenticación.

 ### UsuariosController

  * En general, estos endpoints se utilizan para obtener, actualizar y eliminar información de los usuarios.


 * getAll : Devuelve una lista de todos los usuarios registrados.
 * verUsuarios: Devuelve una lista de todos los usuarios registrados, junto con un mensaje de éxito o error.
  * verUsuariosPerfil : Devuelve la información de un usuario en particular, según su ID.
  * getInformation : Devuelve la información de un usuario en particular, según su correo electrónico.
  * editarPerfil : Actualiza la información de un usuario en particular, según su ID.
   * getAllActiveUsers : Devuelve una lista de todos los usuarios activos.
   * getAllDeletedUsers : Devuelve una lista de todos los usuarios eliminados.
   * getAllPrestamos : Devuelve una lista de todos los préstamos registrados.
   * EliminarUsuario : Elimina un usuario en particular, según su ID. 

    ### ProductosController

* Estos endpoints permiten obtener, filtrar, actualizar y eliminar información de los productos.

    * getAll : Devuelve una lista de todos los productos registrados.
    * getByGenero : Devuelve una lista de productos filtrados por género.
    * getByTitulo : Devuelve una lista de productos filtrados por título.
    * getProductById : Devuelve la información de un producto en particular, según su ID.
    * updateProduct : Actualiza la información de un producto en particular, según su ID.
    * deleteProduct : Elimina un producto en particular, según su ID.
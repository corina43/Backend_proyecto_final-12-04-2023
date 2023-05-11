# Backend_proyecto_final-12-04-2023

<em> # Bienvenido a la aplicación Backend Api E_books</em>



![image](https://user-images.githubusercontent.com/113507322/205169800-ae8aeff3-2afc-467c-8c53-6c1637671770.png)


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


Este proyecto incluye 20 endpoints, tanto públicos como privados, con un sistema de autenticación basado en JSON Web Tokens.


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

 Estos endpoints permiten obtener, filtrar, actualizar y eliminar información de los productos.

  * getAll : Devuelve una lista de todos los productos registrados.
  * getByGenero : Devuelve una lista de productos filtrados por género.
  * getByTitulo : Devuelve una lista de productos filtrados por título.
  * getProductById : Devuelve la información de un producto en particular, según su ID.
  * updateProduct : Actualiza la información de un producto en particular, según su ID.
  * deleteProduct : Elimina un producto en particular, según su ID.


  ### PrestamosController

  Estos endpoints permiten obtener los préstamos de un usuario y crear nuevos préstamos asociados a un usuario y un producto.

  * getPrestamos : Devuelve una lista de todos los préstamos asociados a un usuario específico. Esta información incluye los detalles del préstamo y los datos del producto relacionado.
  * CreatePrestamo : Crea un nuevo préstamo asociado a un usuario y un producto específico. Se proporciona la información necesaria, como el ID del usuario, el ID del producto, las fechas de inicio y fin del préstamo, la puntuación y los comentarios del producto.


  ### Estructura del proyecto
El proyecto está dividido en carpetas y archivos de la siguiente manera:

  * config
Contiene la información de conexión a la base de datos. No se encuentra en el repositorio.
  * controllers
Contiene todas las funciones responsables de devolver una respuesta al usuario.
  * AuthController.js > para iniciar sesión y registrar nuevos usuarios.
  * Prestam0sController.js > CRUD de préstamos
  * ProductosController.js > CRUD de productos
  * UsuariosControllers.js > obtener y actualizar información de usuario, eliminar información de usuario para administradores
  * db
Acceso a la base de datos.
  * middlewares
Gestiona los tokens para la autenticación y autorización de usuarios en la página, autenticación de admin mediante isAdmin.
  * migrations
Archivos que permiten realizar una migración completa de la base de datos.
  * models
index.js > gestiona todos los modelos y se conecta a la base de datos
prestamos.js > información y estructura de la tabla de préstamos
productos.js > información y estructura de la tabla de productos
roles.js > información sobre los roles disponibles para los usuarios
usuarios.js > información y estructura de la tabla que almacena todos los usuarios registrados en nuestro sitio web
  * node_modules
Carpeta que contiene todos los archivos que NodeJS y sus dependencias necesitan para ejecutarse.
  * seeders
Archivos con todos los productos y prestamos disponibles en la base de datos.
services
Funciones utilizadas por los controladores para ejecutar la lógica necesaria para proporcionar la respuesta adecuada al usuario.
views
Archivos con las rutas individuales para cada punto final.
.env
Archivo con el secreto del JSON Web Token y la información necesaria para conectarse a la base de datos.
app.js
Archivo principal donde llamamos e instanciamos Express y hacemos que la aplicación escuche en el puerto que elegimos para nuestro entorno local.
package.json
Archivo con información sobre el proyecto Node, dependencias y metadatos.
router.js
Archivo con rutas generales para cada modelo.
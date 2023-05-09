# Backend_proyecto_final-12-04-2023

# E_Books API project

## Back-end project for GeeksHubs Academy


Los requisitos funcionales del proyecto requieren una base de datos capaz de contener varios productos(libros), usuarios con roles distintos y los préstamos realizados por los usuarios.

Cada préstamo solo puede contener unlibro electrónico , además del ID del usuario que realiza el préstamo y las fechas de inicio y finalización de esa transacción.

 ## Diagrama BD // Database diagram

---

!['imagen-db'](/img/Screenshot_129.png)

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

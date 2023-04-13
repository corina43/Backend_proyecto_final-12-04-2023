'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Corina',
        apellido: 'Ciorpac',
        email: 'corina@example.com',
        password: bcrypt.hashSync('corina123', 10),
        fecha_registro: new Date(),
        id_rol: 1, // Administradora
        fecha_nacimiento: '1985-03-12',
        ciudad: 'Bucarest',
        pais: 'Rumania',
        generos_preferidos: 'Literatura Clásica, Poesía',
        biografia: 'Administradora de la plataforma y amante de la lectura.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Alyna',
        apellido: 'Doe',
        email: 'alyna@example.com',
        password: bcrypt.hashSync('alyna123', 10),
        fecha_registro: new Date(),
        id_rol: 2,
        fecha_nacimiento: '1998-08-10',
        ciudad: 'Budapest',
        pais: 'Hungría',
        generos_preferidos: 'Ciencia Ficción, Fantasía',
        biografia: 'Estudiante de literatura y escritora aficionada.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Laura',
        apellido: 'Smith',
        email: 'laura@example.com',
        password: bcrypt.hashSync('laura123', 10),
        fecha_registro: new Date(),
        id_rol: 2,
        fecha_nacimiento: '1992-11-23',
        ciudad: 'Londres',
        pais: 'Reino Unido',
        generos_preferidos: 'Misterio, Thriller',
        biografia: 'Editora y crítica literaria.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Mara',
        apellido: 'Scampini',
        email: 'mara.scampini@example.com',
        password: bcrypt.hashSync('mara123', 10),
        fecha_registro: new Date(),
        id_rol: 2,
        fecha_nacimiento: '1999-04-17',
        ciudad: 'Roma',
        pais: 'Italia',
        generos_preferidos: 'Historia, Biografías',
        biografia: 'Profesora de historia y apasionada de la lectura.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nombre: 'Juan',
        apellido: 'Pérez',
        email: 'juan.perez@example.com',
        password: bcrypt.hashSync('juan123', 10),
        fecha_registro: new Date(),
        id_rol: 1,
        fecha_nacimiento: '1990-01-01',
        ciudad: 'Madrid',
        pais: 'España',
        generos_preferidos: 'Misterio, Ciencia Ficción',
        biografia: 'Amante de la lectura y escritor en mis tiempos libres.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Ana',
        apellido: 'García',
        email: 'ana@example.com',
        password: bcrypt.hashSync('ana123', 10),
        fecha_registro: new Date(),
        id_rol: 2,
        fecha_nacimiento: '1995-06-15',
        ciudad: 'Barcelona',
        pais: 'España',
        generos_preferidos: 'Romance, Aventuras',
        biografia: 'Me encanta leer y compartir mis opiniones sobre libros.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};


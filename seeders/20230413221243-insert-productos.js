'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Productos', [
	{
  titulo: 'En los zapatos de Valeria',
  autor: 'Elísabet Benavent',
  descripcion: 'Una novela que narra la vida de Valeria y sus amigas, explorando sus relaciones amorosas y la amistad.',
  fecha_publicacion: '2013-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Romance',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  titulo: 'La saga de Valeria',
  autor: 'Elísabet Benavent',
  descripcion: 'Una serie de novelas románticas que narran la vida de Valeria y sus amigas en la ciudad de Madrid.',
  fecha_publicacion: '2013-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Romance',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  titulo: 'The Sandman',
  autor: 'Neil Gaiman',
  descripcion: 'Una serie de cómics que relata las aventuras de Morfeo, el señor de los sueños, y otros personajes de la mitología y el folclore.',
  fecha_publicacion: '1989-01-01',
  tipo: 'Cómic',
  categoria: 'libro',
  genero: 'Fantasía',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  titulo: 'El amor en los tiempos del cólera (Audiolibro)',
  autor: 'Gabriel García Márquez',
  descripcion: 'Una novela que narra la historia de amor entre Florentino Ariza y Fermina Daza a lo largo de más de cincuenta años.',
  fecha_publicacion: '1985-01-01',
  tipo: 'Novela',
  categoria: 'audiolibro',
  genero: 'Romance',
  duracion: '09:30:00',
  formato: 'mp3',
  createdAt: new Date(),
  updatedAt: new Date(),
},



{
  titulo: 'Un mundo feliz',
  autor: 'Aldous Huxley',
  descripcion: 'Una novela distópica que presenta una sociedad futurista basada en la ingeniería genética y la tecnología.',
  fecha_publicacion: '1932-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Ciencia ficción',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  titulo: 'Orgullo y prejuicio',
  autor: 'Jane Austen',
  descripcion: 'Una novela romántica que retrata las costumbres de la sociedad inglesa del siglo XIX.',
  fecha_publicacion: '1813-01-28',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Romance',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  titulo: 'El principito',
  autor: 'Antoine de Saint-Exupéry',
  descripcion: 'Un cuento filosófico que narra las aventuras de un niño que viaja por diferentes planetas.',
  fecha_publicacion: '1943-04-06',
  tipo: 'Cuento',
  categoria: 'audiolibro',
  genero: 'Filosófico',
  duracion: '03:10:00',
  formato: 'mp3',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  titulo: 'La sombra del viento',
  autor: 'Carlos Ruiz Zafón',
  descripcion: 'Una novela que combina el misterio, el romance y la historia en una trama ambientada en la Barcelona de mediados del siglo XX.',
  fecha_publicacion: '2001-01-01',
  tipo: 'Novela',
  categoria: 'libro',
  genero: 'Misterio',
  createdAt: new Date(),
  updatedAt: new Date(),
},


      {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        descripcion: 'Una de las obras más representativas del realismo mágico latinoamericano.',
        fecha_publicacion: '1967-05-30',
        tipo: 'Novela',
        categoria: 'libro',
        genero: 'Realismo mágico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: '1984',
        autor: 'George Orwell',
        descripcion: 'Una distopía que explora la vida bajo un régimen totalitario.',
        fecha_publicacion: '1949-06-08',
        tipo: 'Novela',
        categoria: 'libro',
        genero: 'Ciencia ficción',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'El amor en los tiempos del cólera',
        autor: 'Gabriel García Márquez',
        descripcion: 'Una historia de amor que se desarrolla en un contexto histórico de Colombia.',
        fecha_publicacion: '1985-09-01',
        tipo: 'Novela',
        categoria: 'audiolibro',
        genero: 'Realismo mágico',
        duracion: '12:30:00',
        formato: 'mp3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Productos', null, {});
  },
};





'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Prestamos', [
      {
        id_usuario: 1,
        id_producto: 1,
        fecha_inicio: '2023-01-15',
        fecha_fin: '2023-02-15',
        puntuacion: 5,
        comentario_producto: 'Excelente libro, lo disfruté mucho.',
      },
      {
        id_usuario: 2,
        id_producto: 2,
        fecha_inicio: '2023-02-10',
        fecha_fin: '2023-03-10',
        puntuacion: 4,
        comentario_producto: 'Buen audiolibro, pero la narración podría mejorar.',
      },
      {
        id_usuario: 3,
        id_producto: 3,
        fecha_inicio: '2023-01-20',
        fecha_fin: '2023-02-20',
        puntuacion: 3,
        comentario_producto: 'Interesante, pero un poco lento al principio.',
      },
      {
        id_usuario: 4,
        id_producto: 4,
        fecha_inicio: '2023-03-01',
        fecha_fin: '2023-04-01',
        puntuacion: 4,
        comentario_producto: 'Me encantó la trama, pero el final fue predecible.',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Prestamos', null, {});
  },
};


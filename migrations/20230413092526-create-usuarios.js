'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_registro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
      fecha_nacimiento: {
        type: Sequelize.DATE,
      },
      ciudad: {
        type: Sequelize.STRING,
      },
      pais: {
        type: Sequelize.STRING,
      },
      generos_preferidos: {
        type: Sequelize.STRING,
      },
      biografia: {
        type: Sequelize.TEXT,
      },
    
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  },
};

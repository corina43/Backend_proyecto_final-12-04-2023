'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:  async(queryInterface, Sequelize) =>{
   await queryInterface.createTable('Prestamos',{
    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:Sequelize.INTEGER,

    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:'Usuarios',
        key:'id',
      },
    },
    id_producto: {
      type:Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Productos',
        key: 'id',
      },
    },
    fecha_inicio: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    fecha_fin: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    puntuacion: {
      type:Sequelize.INTEGER,
    },
    comentario_producto: {
      type: Sequelize.TEXT,
    },
    createdAt:{
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateAt:{
      allowNull:false,
      type:Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
   });
  },

   down: async(queryInterface, Sequelize) => {
  await queryInterface.dropTable('Prestamos')
  },
};

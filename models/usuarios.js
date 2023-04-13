'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.belongsTo(models.Roles, {
        foreignKey: 'id_rol',
      });
      Usuarios.hasMany(models.Prestamos, {
        foreignKey: 'id_usuario',
      });
    }
  }

  Usuarios.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_rol: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
      },
      fecha_nacimiento: {
        type: DataTypes.DATE,
      },
      ciudad: {
        type: DataTypes.STRING,
      },
      pais: {
        type: DataTypes.STRING,
      },
      generos_preferidos: {
        type: DataTypes.STRING,
      },
      biografia: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Usuarios',
      timestamps: false,
    }
  );

  return Usuarios;
};

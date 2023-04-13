
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    static associate(models) {
      Productos.hasMany(models.Prestamos, {
        foreignKey: 'id_producto',
      });
    }
  }

  Productos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.ENUM('libro', 'audiolibro'),
        allowNull: false,
      },
      genero: {
        type: DataTypes.STRING,
      },
      duracion: {
        type: DataTypes.TIME,
      },
      formato: {
        type: DataTypes.ENUM('mp3', 'wav', 'm4a', 'flac', 'aac'),
      },
    },
    {
      sequelize,
      modelName: 'Productos',
      timestamps: false,
    }
  );

  return Productos;
};

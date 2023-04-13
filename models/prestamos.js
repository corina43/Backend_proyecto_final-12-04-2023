
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Prestamos extends Model {
    static associate(models) {
      Prestamos.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario',
      });
      Prestamos.belongsTo(models.Productos, {
        foreignKey: 'id_producto',
      });
    }
  }

  Prestamos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id',
        },
      },
      id_producto: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Productos',
          key: 'id',
        },
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      puntuacion: {
        type: DataTypes.INTEGER,
      },
      comentario_producto: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Prestamos',
      timestamps: false,
    }
  );

  return Prestamos;
};

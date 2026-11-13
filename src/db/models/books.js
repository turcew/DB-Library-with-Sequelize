"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Books.init(
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shelf_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Books",
      tableName: "books",
      timestamps: true,
    },
  );
  return Books;
};

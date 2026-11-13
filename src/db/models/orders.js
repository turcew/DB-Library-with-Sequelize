"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      order_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Orders",
      tableName: "orders",
      timestamps: true,
    },
  );
  return Orders;
};

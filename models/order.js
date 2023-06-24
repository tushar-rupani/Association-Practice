"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.hasOne(models.Payment, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("DELIVERED", "PENDING"),
        allowNull: false,
        defaultValue: "PENDING",
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Order;
};

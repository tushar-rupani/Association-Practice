const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Order, { foreignKey: "order_id" });
    }
  }
  Payment.init(
    {
      order_id: { type: DataTypes.NUMBER, allowNull: false },
      status: {
        type: DataTypes.ENUM("PAID", "PENDING"),
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "payment",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Payment;
};

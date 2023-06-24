"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {}
  }
  Address.init(
    {
      entity_type: {
        type: DataTypes.ENUM("USER", "RESTAURANT"),
        allowNull: false,
      },
      entity_id: { type: DataTypes.INTEGER, allowNull: false },
      street: { type: DataTypes.STRING, allowNull: false },
      landmark: { type: DataTypes.STRING, allowNull: false },
      house_no: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      zip: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "address",
      modelName: "Address",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  );
  return Address;
};

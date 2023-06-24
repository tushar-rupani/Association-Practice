"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Address, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "User",
      tableName: "users",
      createdAt: "created_at",
      deletedAt: "deleted_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};

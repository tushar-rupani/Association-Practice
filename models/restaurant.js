"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.hasMany(models.Favourites, { foreignKey: "restaurant_id" });
    }
  }
  Restaurant.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      owner: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Restaurant",
      tableName: "restaurants",
      createdAt: "created_at",
      deletedAt: "deleted_at",
      updatedAt: "updated_at",
    }
  );
  return Restaurant;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.belongsToMany(models.Tag, { through: models.RestaurantTag });
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

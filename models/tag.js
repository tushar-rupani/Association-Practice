"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsToMany(models.Restaurant, {
        through: models.RestaurantTag,
      });
    }
  }
  Tag.init(
    {
      name: { type: DataTypes.STRING },
    },
    {
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
      modelName: "Tag",
      tableName: "tags",
    }
  );
  return Tag;
};

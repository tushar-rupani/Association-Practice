const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RestaurantTag extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  RestaurantTag.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "RestaurantTag",
      tableName: "restaurant_tags",
      underscored: true,
    }
  );

  return RestaurantTag;
};

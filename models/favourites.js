const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    static associate(models) {
      Favourites.belongsTo(models.User, { foreignKey: "user_id" });
      Favourites.belongsTo(models.Restaurant, { foreignKey: "restaurant_id" });
    }
  }
  Favourites.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Favourites",
      tableName: "favourites",
      paranoid: true,
      createdAt: "created_at",
      deletedAt: "deleted_at",
      updatedAt: "updated_at",
    }
  );
  return Favourites;
};

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    static associate(models) {
      Favourites.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Favourites.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      favourite_id: { type: DataTypes.INTEGER, allowNull: false },
      favourite_type: { type: DataTypes.STRING, allowNull: false },
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

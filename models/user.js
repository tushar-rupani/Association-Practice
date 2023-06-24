const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Favourites, { foreignKey: "user_id" });
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
      hooks: {
        beforeCreate: (user) => {
          // Here we can write the code to check if the user with given email exists in database or not.
        },
        afterCreate: (user) => {
          // Once the account has been created, we can send greeting email to user. We can write code for that here
        },
      },
    }
  );
  return User;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("restaurant_tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "restaurants",
          key: "id",
        },
      },
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tags",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("restaurant_tags");
  },
};

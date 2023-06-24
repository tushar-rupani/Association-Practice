module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payment", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM("PAID", "PENDING"),
        allowNull: false,
        defaultValue: "PENDING",
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
    await queryInterface.dropTable("payment");
  },
};

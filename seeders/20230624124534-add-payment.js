module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("payment", [
      {
        order_id: 2,
        status: "PAID",
        created_at: new Date(),
      },
      {
        order_id: 3,
        status: "PENDING",
        created_at: new Date(),
      },
      {
        order_id: 4,
        status: "PAID",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payment", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orders", [
      {
        user_id: 3,
        price: 400,
        created_at: new Date(),
      },
      {
        user_id: 3,
        price: 500,
        status: "DELIVERED",
        created_at: new Date(),
      },
      {
        user_id: 4,
        price: 200,
        status: "DELIVERED",
        created_at: new Date(),
      },
      {
        user_id: 4,
        price: 300,
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};

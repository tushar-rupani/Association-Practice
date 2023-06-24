"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("users", [
      {
        username: "tushar2408",
        email: "tushar24081@gmail.com",
        password: "anyrandomhashstring1",
        created_at: new Date(),
      },
      {
        username: "jay2408",
        email: "jay24081@gmail.com",
        password: "anyrandomhashstring2",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

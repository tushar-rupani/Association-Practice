"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("users", "address_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "address",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("users", "address_id", {});
  },
};

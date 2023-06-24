module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("tags", [
      {
        name: "Fast Food",
        created_at: new Date(),
      },
      {
        name: "Italian Cuisine",
        created_at: new Date(),
      },
      {
        name: "Fine Dining",
        created_at: new Date(),
      },
      {
        name: "Asian Fusion",
        created_at: new Date(),
      },
      {
        name: "Burgers",
        created_at: new Date(),
      },
      {
        name: "Steakhouse",
        created_at: new Date(),
      },
      {
        name: "Desserts",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};

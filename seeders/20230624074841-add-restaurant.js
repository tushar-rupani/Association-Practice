module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("restaurants", [
      {
        name: "Pizzerial",
        owner: "Bakul Joshi",
        created_at: new Date(),
      },
      {
        name: "Starbucks",
        owner: "Pankaj Tripathi",
        created_at: new Date(),
      },
      {
        name: "KFC",
        owner: "Tushar Rupani",
        created_at: new Date(),
      },
      {
        name: "Planet Restaurant",
        owner: "Haribhai Patel",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("restaurant_tags", [
      {
        restaurant_id: 1,
        tag_id: 1,
        created_at: new Date(),
      },
      {
        restaurant_id: 1,
        tag_id: 2,
        created_at: new Date(),
      },
      {
        restaurant_id: 2,
        tag_id: 2,
        created_at: new Date(),
      },
      {
        restaurant_id: 3,
        tag_id: 2,
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurant_tags", null, {});
  },
};

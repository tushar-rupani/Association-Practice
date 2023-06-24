module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("favourites", [
      {
        user_id: 3,
        restaurant_id: 1,
        created_at: new Date(),
      },
      {
        user_id: 4,
        restaurant_id: 1,
        created_at: new Date(),
      },
      {
        user_id: 3,
        restaurant_id: 3,
        created_at: new Date(),
      },
      {
        user_id: 4,
        restaurant_id: 2,
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("favourites", null, {});
  },
};

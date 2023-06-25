module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("favourites", [
      {
        user_id: 3,
        favourite_id: 1,
        favourite_type: "ORDER",
        created_at: new Date(),
      },
      {
        user_id: 4,
        favourite_id: 2,
        favourite_type: "ORDER",
        created_at: new Date(),
      },
      {
        user_id: 3,
        favourite_id: 2,
        favourite_type: "ORDER",
        created_at: new Date(),
      },
      {
        user_id: 4,
        favourite_id: 2,
        favourite_type: "RESTAURANT",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("favourites", null, {});
  },
};

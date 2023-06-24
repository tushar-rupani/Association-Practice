module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("address", [
      {
        entity_type: "USER",
        entity_id: 1,
        street: "Sindhunagar Society",
        landmark: "Near Jio Petrol Pump",
        house_no: "17B",
        city: "Anand",
        zip: "388001",
        created_at: new Date(),
      },
      {
        entity_type: "USER",
        entity_id: 1,
        street: "Science City Road, eSparkBiz",
        landmark: "Science City Road, Shukan Mall",
        house_no: "1001",
        city: "Ahmedabad",
        zip: "380021",
        created_at: new Date(),
      },
      {
        entity_type: "RESTAURANT",
        entity_id: 1,
        street: "lorem ipsum",
        landmark: "etc etc etc",
        house_no: "19B",
        city: "Turkey",
        zip: "388002",
        created_at: new Date(),
      },
      {
        entity_type: "RESTAURANT",
        entity_id: 2,
        street: "Chirstian Bale Society",
        landmark: "etxt",
        house_no: "1002",
        city: "Patan",
        zip: "380021",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("address", null, {});
  },
};

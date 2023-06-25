const db = require("../models/index");
const { Favourites, User } = db;
const manyToManyPolymorphic = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (page == 0) {
      page = 1;
    }
    const { count, rows } = await Favourites.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    return res.status(200).json({ order: rows, count });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { manyToManyPolymorphic };

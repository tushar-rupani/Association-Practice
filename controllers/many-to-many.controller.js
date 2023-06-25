const db = require("../models/index");
const { Restaurant, Tag } = db;

const manyToManyController = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (page == 0) {
      page = 1;
    }
    const { count, rows } = await Restaurant.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      include: {
        model: Tag,
        attributes: ["name"],
      },
    });
    return res.status(200).json({ restaurants: rows, count });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const manyToManyTagsController = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (page == 0) {
      page = 1;
    }
    const { count, rows } = await Tag.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      include: {
        model: Restaurant,
        attributes: ["name"],
      },
    });
    return res.status(200).json({ restaurants: rows, count });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { manyToManyController, manyToManyTagsController };

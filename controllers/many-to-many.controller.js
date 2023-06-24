const db = require("../models/index");
const { Restaurant, Tag } = db;

const manyToManyController = async (req, res) => {
  try {
    const restaurantWithTags = await Restaurant.findOne({
      where: { id: parseInt(req.params.id) },
      include: {
        model: Tag,
        attributes: ["name"],
      },
    });
    return res.status(200).json({ restaurantWithTags });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
module.exports = { manyToManyController };

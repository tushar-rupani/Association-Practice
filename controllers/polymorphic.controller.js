const db = require("../models/index");
const Address = db.Address;

const polymorphicController = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (page == 0) {
      page = 1;
    }
    const { rows, count } = await Address.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
    return res.status(200).json({ address: rows, count });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { polymorphicController };

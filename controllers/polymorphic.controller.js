const db = require("../models/index");
const Address = db.Address;

const polymorphicController = async (req, res) => {
  try {
    const address = await Address.findOne({
      where: {
        entity_type: req.body.type,
        entity_id: req.body.id,
      },
    });
    if (address) {
      return res.status(200).json({ address });
    } else {
      return res.status(200).json({ message: "No Data Found!" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Server Crash" });
  }
};

module.exports = { polymorphicController };

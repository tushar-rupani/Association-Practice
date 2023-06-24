const db = require("../models/index");
const { Order, Payment } = db;

const oneToOneController = async (req, res) => {
  try {
    const order = await Order.findOne({
      include: Payment,
      where: {
        id: parseInt(req.params.id),
      },
    });
    return res.status(200).json({ order });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { oneToOneController };

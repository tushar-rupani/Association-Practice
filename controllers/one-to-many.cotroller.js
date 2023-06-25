const db = require("../models/index");

const { User, Favourites, Restaurant, Order } = db;

const oneToManyEagerController = async (req, res) => {
  const favourites = await Favourites.findAll({
    where: {
      user_id: parseInt(req.params.id),
    },
    attributes: ["id", "user_id"],
    include: {
      model: Restaurant,
    },
  });
  return res.status(200).json({
    favourites,
    message: `Favourites for user ${req.params.id} fetched!`,
  });
};

const oneToManyLazyController = async (req, res) => {
  const user = await User.findByPk(parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const favourites = await user.getFavourites({
    include: [Restaurant],
    attributes: ["id", "user_id"],
  });

  return res.status(200).json({
    favourites,
    message: `Favourites for user ${req.params.id} fetched!`,
  });
};

const oneToManyForOrders = async (req, res) => {
  // Here, we are following lazy fetching approach to get data.
  try {
    const user = await User.findByPk(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const orders = await user.getOrders();
    return res.status(200).json({ orders });
  } catch (err) {
    return res.status(500).json({ error: "Something Went Wrong!" });
  }
};

const getUsers = async (req, res) => {
  try {
    let { page, pageSize } = req.query;
    if (page == 0) {
      page = 1;
    }
    const { count, rows } = await User.findAndCountAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      attributes: ["id", "username", "email"],
    });
    return res.status(200).json({ users: rows, count });
  } catch (err) {
    return res.status(500).json({ error: "Something Went Wrong!" });
  }
};
module.exports = {
  oneToManyEagerController,
  oneToManyLazyController,
  oneToManyForOrders,
  getUsers,
};

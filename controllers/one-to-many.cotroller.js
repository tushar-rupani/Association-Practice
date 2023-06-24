const db = require("../models/index");

const { User, Favourites, Restaurant } = db;

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

module.exports = { oneToManyEagerController, oneToManyLazyController };

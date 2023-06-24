const db = require("../models/index");
const User = db.User;
const Address = db.Address;

const oneToManyLazyController = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: 5,
    },
  });
  let userAddresses = [];
  if (user) {
    userAddresses = await user.getAddresses();
  }
  const finalResponse = { ...user, ["addresses"]: userAddresses };
  return res.status(200).json({ finalResponse });
};

const oneToManyEagerController = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: 5,
    },
    include: [Address],
  });
  if (user) {
    const userAddresses = await user.getAddresses();
  }
  return res.status(200).json({ user });
};
module.exports = { oneToManyEagerController, oneToManyLazyController };

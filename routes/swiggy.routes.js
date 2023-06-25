const express = require("express");
const router = express.Router();
const {
  oneToManyEagerController,
  oneToManyLazyController,
  oneToManyForOrders,
  getUsers,
} = require("../controllers/one-to-many.cotroller");
const {
  polymorphicController,
} = require("../controllers/polymorphic.controller");
const {
  manyToManyController,
  manyToManyTagsController,
} = require("../controllers/many-to-many.controller");
const { oneToOneController } = require("../controllers/one-to-one.controller");

router.get("/one-to-many-eager/:id", oneToManyEagerController);
router.get("/one-to-many-lazy/:id", oneToManyLazyController);
router.get("/many-to-many", manyToManyController);
router.get("/many-to-many-tags", manyToManyTagsController);
router.get("/one-to-many-orders/:id", oneToManyForOrders);
router.get("/one-to-one-order/", oneToOneController);
router.get("/get-users", getUsers);
router.post("/polymorphic", polymorphicController);

module.exports = router;

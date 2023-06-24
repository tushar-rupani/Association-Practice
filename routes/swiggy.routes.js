const express = require("express");
const router = express.Router();
const {
  oneToManyEagerController,
  oneToManyLazyController,
  oneToManyForOrders,
} = require("../controllers/one-to-many.cotroller");
const {
  polymorphicController,
} = require("../controllers/polymorphic.controller");
const {
  manyToManyController,
} = require("../controllers/many-to-many.controller");
const { oneToOneController } = require("../controllers/one-to-one.controller");

router.get("/one-to-many-eager/:id", oneToManyEagerController);
router.get("/one-to-many-lazy/:id", oneToManyLazyController);
router.get("/many-to-many/:id", manyToManyController);
router.get("/one-to-many-orders/:id", oneToManyForOrders);
router.get("/one-to-one-order/:id", oneToOneController);
router.post("/polymorphic", polymorphicController);

module.exports = router;

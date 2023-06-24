const express = require("express");
const router = express.Router();
const {
  oneToManyEagerController,
  oneToManyLazyController,
} = require("../controllers/one-to-many.cotroller");
const {
  polymorphicController,
} = require("../controllers/polymorphic.controller");

router.get("/one-to-many-eager/:id", oneToManyEagerController);
router.get("/one-to-many-lazy/:id", oneToManyLazyController);
router.post("/polymorphic", polymorphicController);

module.exports = router;

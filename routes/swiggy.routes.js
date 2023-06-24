const express = require("express");
const router = express.Router();
const {
  oneToManyEagerController,
  oneToManyLazyController,
} = require("../controllers/associations.cotroller");

router.get("/one-to-many-lazy", oneToManyLazyController);
router.get("/one-to-many-eager", oneToManyEagerController);

module.exports = router;

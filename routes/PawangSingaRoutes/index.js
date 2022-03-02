const router = require("express").Router();
const commentRoutes = require("./comment");
const restaurantRoutes = require("./restaurant");
const userRoutes = require("../user");

router.use("/comment", commentRoutes);
router.use("/rest", restaurantRoutes);
router.use("/user", userRoutes);

router.get("/*", (req, res) => {
  res.send("Hello From pawang singa app !!");
});

module.exports = router;

const router = require("express").Router();
const commentRoutes = require("./comment");
const restaurantRoutes = require("./restaurant");
const wishlistRoutes = require("./wishlist")
const userRoutes = require("../user");

router.use("/cmnt", commentRoutes);
router.use("/rst", restaurantRoutes);
router.use("/wl", wishlistRoutes);
router.use("/usr", userRoutes);

router.get("/*", (req, res) => {
  res.send("Hello From pawang singa app !!");
});

module.exports = router;
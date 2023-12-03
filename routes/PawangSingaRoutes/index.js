const router = require("express").Router();
const commentRoutes = require("./comment");
const restaurantRoutes = require("./restaurant");
const wishlistRoutes = require("./wishlist")
const userRoutes = require("../user");

router.use("/comments", commentRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/wishlist", wishlistRoutes);


module.exports = router;
const router = require("express").Router();
const WishlistController = require("../../controllers/PawangSinga/wishlistController");

// READ
router.get("/", WishlistController.findAll);
router.get("/:id", WishlistController.findById);

// CREATE
router.post("/", WishlistController.create);

// DELETE
router.delete("/:id", WishlistController.delete);

// UPDATE
router.put("/:id", WishlistController.update);

module.exports = router;

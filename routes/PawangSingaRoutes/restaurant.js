const router = require("express").Router();
const RestaurantController = require("../../controllers/PawangSinga/restaurantController");

// READ
router.get("/", RestaurantController.findAll);
router.get("/search", RestaurantController.search)
router.get("/random", RestaurantController.randomRest)
router.get("/:id", RestaurantController.findById);
// CREATE
router.post("/", RestaurantController.create);
router.post("/bulk", RestaurantController.bulkAdd)
// DELETE
router.delete("/:id", RestaurantController.unlist);
// UPDATE
router.put("/:id",RestaurantController.update);

module.exports = router;

const router = require("express").Router();
const UserController = require("../controllers/userController");
const User = require("../models/UserModel");

// READ
router.get("/", UserController.findAll);
router.get("/:id", UserController.findById);
// CREATE
router.post("/create", UserController.create);
// DELETE
router.delete("/:id");
// UPDATE
router.put("/:id", UserController.update);

module.exports = router;

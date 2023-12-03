const router = require("express").Router();
const CommentControler = require("../../controllers/PawangSinga/commentController");

// READ
router.get("/res/:id", CommentControler.findByRestauranId);
router.get("/user/:id", CommentControler.findByUserId);
router.get("/:id", CommentControler.findById);
// CREATE
router.post("/create");
// DELETE
router.delete("/:id");
// UPDATE
router.put("/:id");

module.exports = router;

const router = require("express").Router();
const LibController = require("../../controllers/LibraryApp/LibraryController");

router.get("/get-lib", LibController.findAllData);
router.post("/add-lib", LibController.create);
router.put("/up-lib", LibController.update);
router.delete("/del-lib", LibController.delete);

router.get("/get-div", LibController.findAllData);
router.post("/add-div", LibController.create);
router.put("/up-div", LibController.update);
router.delete("/del-div", LibController.delete);

router.get("/get-kepustakaan", LibController.findAllData);
router.post("/add-kepustakaan", LibController.create);
router.put("/up-kepustakaan", LibController.update);
router.delete("/del-kepustakaan", LibController.delete);

router.get("/get-pembimbing", LibController.findAllData);
router.post("/add-pembimbing", LibController.create);
router.put("/up-pembimbing", LibController.update);
router.delete("/del-pembimbing", LibController.delete);

router.get("/*", (req, res) => {
  res.send("Hello From Library apps !!");
});

module.exports = router;

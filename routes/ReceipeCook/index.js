const router = require("express").Router();

router.get("/*", (req, res) => {
  res.send("Hello From receipe cook app !!");
});

module.exports = router;

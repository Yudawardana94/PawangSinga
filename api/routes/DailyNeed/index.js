const router = require("express").Router();

router.get("/*", (req, res) => {
  res.send("Hello From daily need app !!");
});

module.exports = router;

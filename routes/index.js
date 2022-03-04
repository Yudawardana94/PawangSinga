const router = require("express").Router();
const PawangSingaAppRouter = require("./PawangSingaRoutes");
const userRoutes = require("./user");
const GlobalController = require("../controllers/globalController");

router.use("/pawangSinga", PawangSingaAppRouter);
router.use("/receipeCook", ReceipeCookAppRouter);
router.use("/dailyNeed", DailyNeedAppRouter);

// router.get("/serverStatus", GlobalController.getServerStatus);
// router.get("/search", GlobalController.search);

router.use("/user", userRoutes);
router.use("/s22", (_, res) => {
  const object = {
    status: "Connected",
    message: "Server status active",
  }
  res.send(object)
})
router.get("/", (req, res) => {
  res.send("use localhost:3000/pawangSinga");
});

module.exports = router;

const restaurantModel = require("../../models/RestaurantModel");

class RestaurantController {
  static findAll(req, res, next) {
    res.send("find all rest");
  }
  static findById(req, res, next) {
    res.send("find by Id rest");
  }
  static create(req, res, next) {
    let payload = { ...req.body };

    payload.Status = 1;
    restaurantModel
      .create(payload)
      .then((created) => {
        res.status(201).json({ message: "Created", data: created });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
  static update(req, res, next) {
    res.send("updated");
  }
  static delete(req, res, next) {
    res.send("deleted");
  }
}

module.exports = RestaurantController;

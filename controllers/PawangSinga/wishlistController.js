const wishlistModel = require("../../models/WishlistModel");

class MenuController {
  static findAll(req, res, next) {
    res.send("find all menu");
  }
  static findById(req, res, next) {
    res.send("find by Id menu");
  }
  static create(req, res, next) {
    res.send("created");
  }
  static update(req, res, next) {
    res.send("updated");
  }
  static delete(req, res, next) {
    res.send("deleted");
  }
}

module.exports = MenuController;

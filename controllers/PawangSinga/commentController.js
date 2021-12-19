// const commentModel = require("../../models/CommentModel");

class CommentController {
  static findById(req, res, next) {
    res.send("find by Id menu");
  }
  static findByRestauranId(req, res, next) {
    res.send("find by Id menu");
  }
  static findByUserId(req, res, next) {
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

module.exports = CommentController;

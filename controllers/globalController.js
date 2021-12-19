const commentModel = require("../models/CommentModel");
const RestaurantModel = require("../models/RestaurantModel");
const UserModel = require("../models/UserModel");
const WishlistModel = require("../models/WishlistModel");

class UserController {
  static getServerStatus(req, res, next) {
    res.send({ status: "active" });
  }

  static search(req, res, next) {
    console.log(req, "---requerstx");
    res.send({ status: "hello bosswque" });
  }
}

module.exports = UserController;

const userModel = require("../models/UserModel");

class UserController {
  static findAll(req, res, next) {
    userModel
      .find()
      .then((users) => res.status(200).json(users))
      .catch((error) => res.status(400).json(error));
  }
  static findById(req, res, next) {
    const { id } = req.params;
    userModel
      .findById(id)
      .then((foundUser) => res.status(200).json(foundUser))
      .catch((error) => res.status(400).json(error));
  }

  static async create(req, res, next) {
    const { username, email, password, role } = req.body;
    let newUser = { username, email, password, role };
    userModel
      .create(newUser)
      .then((created) => {
        res.status(201).json(created);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
    // res.send('created')
  }

  static update(req, res, next) {
    const { id } = req.params;
    userModel
      .findByIdAndUpdate(id, req.body)
      .then((updated) => {
        res.status(200).json("data successfuly updated");
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
  static delete(req, res, next) {
    res.send("deleted");
  }
}

module.exports = UserController;

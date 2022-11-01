const LibraryModel = require("../../models/LibraryGroupModel/LibraryModel");
const PembimbingModel = require("../../models/LibraryGroupModel/PembimbingModel");
const KepustakaanModel = require("../../models/LibraryGroupModel/KepustakaanModel");
const DivisionModel = require("../../models/LibraryGroupModel/DivisionModel");

class LibraryAppsController {
  //Library Controller
  static async findAllData(req, res, next) {
    try {
      let data = {};
      switch (req.query.q) {
        case "library":
          data = await LibraryModel.find().populate("Kepustakaan Pembimbing Division");
          break;
        case "pembimbing":
          data = await PembimbingModel.find();
          break;
        case "kepustakaan":
          data = await KepustakaanModel.find();
          break;
        case "division":
          data = await DivisionModel.find();
          break;

        default:
          data = null;
          break;
      }
      if (!data) throw new Error();
      res.status(200).json({
        data,
        status: 200,
        message: "Ok",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res, next) {
    let payload = req.body;
    let createdData = {};

    try {
      switch (req.body.type) {
        case "library":
          delete payload.type;
          createdData = await LibraryModel.create(payload);
          break;
        case "pembimbing":
          delete payload.type;
          createdData = await PembimbingModel.create(payload);
          break;
        case "kepustakaan":
          delete payload.type;
          createdData = await KepustakaanModel.create(payload);
          break;
        case "division":
          delete payload.type;
          createdData = await DivisionModel.create(payload);
          break;

        default:
          break;
      }
      res.status(200).json(createdData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static update(req, res, next) {
    res.send("updated");
  }
  static delete(req, res, next) {
    res.send("deleted");
  }
}

module.exports = LibraryAppsController;

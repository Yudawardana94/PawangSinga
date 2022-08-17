const restaurantModel = require("../../models/RestaurantModel");

class RestaurantController {
  // GET METHOD
  static async findAll(req, res, next) {
    try {
      const restaurants = await restaurantModel.find({
        Visibility: {
          $ne: "Unlisted",
        },
      });

      res.status(200).json({
        data: restaurants,
        status: 200,
        message: "Ok",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async findById(req, res, next) {
    const restaurantId = req.params.id;

    try {
      const foundRestaurant = await restaurantModel.findById(restaurantId);
      if (foundRestaurant.Visibility === "Unlisted")
        throw { message: "data not found" };
      res.status(200).json({
        data: foundRestaurant,
        status: 200,
        message: "Ok",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async randomRest(req, res, next) {
    try {
      const randomRest = await restaurantModel.aggregate().sample(1);
      res.status(200).json({
        data: randomRest,
        status: 200,
        message: "Ok",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async search(req, res, next) {
    const searchQuery = {};
    Object.entries(req.query).forEach((el) => {
      searchQuery[el[0]] = { $regex: el[1], $options: "i" };
    });

    try {
      const searchValue = await restaurantModel.find(searchQuery);
      if (searchValue && searchValue.length === 0)
        throw { code: 404, message: "Data not found" };
      res.status(200).json({
        data: searchValue,
        status: 200,
        message: "Ok",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // POST METHOD
  static async create(req, res, next) {
    let payload = { ...req.body };
    try {
      const created = await restaurantModel.create(payload);
      res.status(201).json({ message: "Created", data: created });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async bulkAdd(req, res, next) {
    const payload = [...req.body];

    try {
      const createdData = await restaurantModel.insertMany(payload, {
        ordered: false,
      });
      res
        .status(201)
        .json({ message: "All data ssuccessfully created", data: createdData });
    } catch (error) {
      const { writeErrors, insertedDocs } = error;
      if (insertedDocs?.length === 0)
        res.status(500).json({ ...error, message: "Failed insert all data" });
      else {
        res.status(201).json({
          message: `${writeErrors.length} failed to add to database. ${insertedDocs.length} success added to database.`,
          insertedDocs: insertedDocs.map(({ _id, Name, Address }) => {
            return { _id, Name, Address };
          }),
          writeErrors: writeErrors.map(({ code, index, errmsg }) => {
            return { code, index, errmsg };
          }),
        });
      }
    }
  }

  // PUT METHOD
  static async update(req, res, next) {
    const restaurantId = req.params.id;
    const payload = req.body;

    try {
      await restaurantModel.findByIdAndUpdate(restaurantId, payload, {
        new: true,
        upsert: true,
      });

      res.status(200).json({
        data: {},
        status: 200,
        message: "Restaurant Updated",
        notes:
          "To remove some tag make unique value from client sidem then on the server side will update based on what client send",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // DELETE METHOD
  static async unlist(req, res, next) {
    const restaurantId = req.params.id;
    const payload = {
      Visibility: "unlisted",
    };

    try {
      await restaurantModel.findByIdAndUpdate(restaurantId, payload, {
        new: true,
      });

      res.status(200).json({
        data: {},
        status: 200,
        message: "Restaurant unlisted",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = RestaurantController;

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

  static async bulkAdd(req, res, next) {
    const listdata = [
      {
        Name: "Tempat Coffee",
        Address:
          "Jl. Matoa Raya No., 13, Karangasem, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57145",
        Creator: "62277f24cb1947649a456693",
        ProfilePicture: "",
        Descripton: "Tempat Coffee",
        Type: ["coffee shop"],
        PriceRange: {
          min: 10000,
          max: 100000,
        },
        Notes: "buka jam 10 tutup jam 11",
        SocialMedia: [
          {
            socmed: "instagram",
            username: "tempat coffee",
          },
        ],
      },
      {
        Name: "Snama kopi",
        Address:
          "Jl. Matoa Raya I, RT.5/RW7, Karangasem, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57145",
        Creator: "62277f24cb1947649a456693",
        ProfilePicture: "",
        Descripton: "Snama kopi",
        Type: ["coffee shop"],
        PriceRange: {
          min: 10000,
          max: 100000,
        },
        Notes: "",
        SocialMedia: [
          {
            socmed: "instagram",
            username: "snamakopi",
          },
        ],
      },
      {
        Name: "Namdwa kopi",
        Address:
          "Jl. Duwet Raya, Mendungan, Pabelan, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57169",
        Creator: "62277f24cb1947649a456693",
        ProfilePicture: "",
        Descripton: "Namdwa kopi",
        Type: ["coffee shop"],
        PriceRange: {
          min: 10000,
          max: 100000,
        },
        Notes: "",
        SocialMedia: [
          {
            socmed: "instagram",
            username: "namdwakopi",
          },
        ],
      },
    ];

    /**
     * Logic flow
     * - check if any bulk data is duplicate by data inside the server
     * - take out duplicate data / make sure that data crated must not be duplicate
     * - create data
     * - return number of created data and name of the restaurant
     */
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

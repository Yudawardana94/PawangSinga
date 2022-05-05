const wishlistModel = require("../../models/WishlistModel");

class MenuController {
  static async findAll(req, res, next) {
    try {
      const wishlists = await wishlistModel.find().populate('CreatorId', "userName firstName lastName email role")
      res.status(200).json({
        data: wishlists,
        status: 200,
        message: "Ok"
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }
  static async findById(req, res, next) {
    const CreatorId = req.params.id

    try {
      const userWishlist = await wishlistModel
      .find({CreatorId, Status: {$ne: "Unlisted"}})
      .populate('CreatorId', "userName firstName lastName email role")

      res.status(200).json({
        data: userWishlist,
        status: 200,
        message: "Ok"
      })
    } catch (error) {
    }

  }
  static async create(req, res, next) {
    const payload = {...req.body}

    try {
      const foundDuplicate = await wishlistModel.findOne({
        Name: payload.Name,
        CreatorId: payload.CreatorId
      })

      if(foundDuplicate && foundDuplicate?.length !== 0) throw {errors: {message: "Duplicate input"}, status: 403, name: "Duplicate input"}
      const createdWishlist = await wishlistModel.create(payload)
      
      res.status(200).json({
        data: createdWishlist,
        status: 200,
        message: "Ok"
      })
    } catch (error) {
      if(error.name.includes("ValidationError")) res.status(400).json(error.errors)
      if(error.name.includes("Duplicate")) res.status(403).json(error.errors)
      else res.status(500).json(error)
    }
  }
  static async update(req, res, next) {
    const CreatorId = req.params.id
    const payload = {...req.body}

    try {
      const updatedData = await wishlistModel.findByIdAndUpdate(CreatorId, payload, {new: true})

      res.status(200).json({
        data: updatedData,
        status: 200,
        message: "Data Updated."
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }
  static async delete(req, res, next) {
    const wishlistId = req.params.id

    try {
      await wishlistModel.findByIdAndDelete(wishlistId)

      res.status(200).json({
        data: {},
        status: 200,
        message: "User wishlist successfully deleted."
      })
    } catch (error) {
      res.status(500).json(error)
    } 
  }
}

module.exports = MenuController;

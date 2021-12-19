const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { hash } = require("../helpers/bcrypt");

let wishlistSchema = new Schema(
  {
    Title: String,
    RestaurantId: String,
    CreatorId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    Tags: [
      {
        type: String,
      },
    ],
    Address: String,
    Status: Boolean,
  },
  {
    timestamps: true,
  }
);

let Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;

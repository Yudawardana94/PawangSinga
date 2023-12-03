const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let wishlistSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    RestaurantId: String,
    CreatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Tags: [
      {
        type: String,
      },
    ],
    Address: {
      type: String,
      required: true
    },
    Status: {
      type: String,
      enum: ["listed", "conquered", "unlisted"],
      default: "listed",
    },
  },
  {
    timestamps: true,
  }
);

let Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;

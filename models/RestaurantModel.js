const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { hash } = require("../helpers/bcrypt");

let restaurantSchema = new Schema(
  {
    Name: String,
    Address: String,
    Creator: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Photos: [
      {
        type: Schema.Types.String,
      },
    ],
    ProfilePicture: String,
    Status: Boolean,
    Reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    Menu: [
      {
        type: Schema.Types.String,
      },
    ],
    Description: String,
    Type: [String],
    PriceRange: Object,
    Notes: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
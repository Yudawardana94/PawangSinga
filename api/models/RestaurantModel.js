const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { hash } = require("../helpers/bcrypt");

let restaurantSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'name required.'],
    },
    address: String,
    region: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    photos: [
      {
        type: Schema.Types.String,
      },
    ],
    status: {
      type: Boolean,
      default: true,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comment',
      },
    ],
    menus: [
      {
        type: Schema.Types.String,
      },
    ],
    description: String,
    type: [String], // it has to be reference to restaurant type collection
    tags: [String], // it has to be reference to tags collection
    priceRange: Object,
    notes: String,
    isListed: {
      type: String,
      enum: ['listed', 'unlisted'],
      default: 'listed',
    },
    socialMedia: [
      {
        type: String,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

restaurantSchema.index({ '$**': 'text' });
restaurantSchema.path('name').index({ unique: true });


const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;

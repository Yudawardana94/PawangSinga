const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PembimbingSchema = new Schema(
  {
    Name: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let Pembimbing = mongoose.model("Pembimbing", PembimbingSchema);

module.exports = Pembimbing;

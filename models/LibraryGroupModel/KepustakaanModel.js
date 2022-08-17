const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let KepustakaanSchema = new Schema(
  {
    Title: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let Kepustakaan = mongoose.model("Kepustakaan", KepustakaanSchema);

module.exports = Kepustakaan;

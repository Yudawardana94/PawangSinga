const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DivisionSchema = new Schema(
  {
    Name: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let Division = mongoose.model("Division", DivisionSchema);

module.exports = Division;

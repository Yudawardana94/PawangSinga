const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let LibrarySchema = new Schema(
  {
    Writer: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Kepustakaan: {
      type: Schema.Types.ObjectId,
      ref: "Kepustakaan",
      required: true,
    },
    Pembimbing: {
      type: Schema.Types.ObjectId,
      ref: "Pembimbing",
    },
    Division: {
      type: Schema.Types.ObjectId,
      ref: "Division",
      required: true,
    },
    DateSubmit: {
      type: Date,
      required: true,
    },
    DatePresenting: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;

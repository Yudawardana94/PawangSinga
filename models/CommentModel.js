const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { hash } = require("../helpers/bcrypt");

let commentModel = new Schema(
    {
        Creator: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        Restaurant: {
            type: Schema.Types.ObjectId,
            ref: "restaurant",
            required: true
        },
        Title: {
            type: String,
        },
        Comment: {
            type: String,
        },
        shown: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
);

let Comment = mongoose.model("Comment", commentModel);

module.exports = Comment;

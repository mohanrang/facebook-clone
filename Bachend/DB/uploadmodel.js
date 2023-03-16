const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    text: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

const Upload = mongoose.model("Upload", userSchema);

module.exports = Upload;

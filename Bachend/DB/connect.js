const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://mohanrangajagarapu:13146c220@cluster0.husjvxt.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("connecting to Mongoose");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connect;

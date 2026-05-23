const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect(
      "mongodb+srv://studybot:Reddy54321@cluster0.gwct7lq.mongodb.net/?appName=Cluster0"
    );

    console.log("MongoDB Connected 🚀");

  } catch (error) {

    console.log(error);

  }
};

module.exports = connectDB;
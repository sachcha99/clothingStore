const mongoose = require("mongoose");

const URI = "mongodb+srv://abcssd:admin@cluster0.lk4uxej.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    console.log("Database Connected");
}

module.exports = connectDB;
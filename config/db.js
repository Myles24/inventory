const express = require("express")
const mongoose = require('mongoose');

const app = express();

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected")
}

module.exports = connectDB;
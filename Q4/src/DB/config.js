const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/StudentDBaa").then(() => {
    console.log("connection successfully");
}).catch((err) => {
    console.log("connectio failed ");
})
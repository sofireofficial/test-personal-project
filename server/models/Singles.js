const mongoose = require("mongoose");
const { Schema } = mongoose;

const singleSchema = new Schema({
    first_name: String,
    last_name: String,
    location: String,
    age: String,
    height: String,
    gender: String, 
    seeking: String,
});

mongoose.model("singles", singleSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    location: String,
    age: String,
    height: String,
    gender: String, 
    seeking: String,
});

mongoose.model("userDatabase", userSchema);

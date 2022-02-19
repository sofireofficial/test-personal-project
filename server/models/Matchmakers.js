const mongoose = require("mongoose");
const { Schema } = mongoose;

const matchmakersSchema = new Schema({
  matchmaker_num: String,
  matchmaker_name: String,
  location: String,
});

mongoose.model("matchmakers", matchmakersSchema);

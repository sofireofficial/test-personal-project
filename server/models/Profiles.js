const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  team_name: String,
  location: String,
});

mongoose.model("profiles", profileSchema);

const mongoose = require("mongoose");
const User = mongoose.model("users");

const usersRoutes = (app) => {

  app.get(`/api/user`, async (req, res) => {
    const users = await User.find();
    console.log('visiting "/api/user" endpoint');
    console.log(users);
    return res.status(200).send(users);
  });

// : to avoid repeting locations (with same end point)
app.get(`/api/user/:location`, async (req, res) => {
  const locationParam = req.params.location
  const users = await User.find({location:locationParam});
  console.log('visiting "/api/user/:location" endpoint');
  return res.status(200).send(users);
});
};

module.exports = usersRoutes;

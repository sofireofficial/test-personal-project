const mongoose = require("mongoose");
const User = mongoose.model("userDatabase");

const usersRoutes = (app) => {

  app.get(`/api/user`, async (req, res) => {
    const users = await User.find();
    console.log('visiting "/api/user" endpoint')
    return res.status(200).send(users);
  });
};

module.exports = usersRoutes;

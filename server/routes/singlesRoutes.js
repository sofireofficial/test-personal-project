const mongoose = require("mongoose");
const Single = mongoose.model("singles");

const singlesRoutes = (app) => {

  app.get(`/api/single`, async (req, res) => {
    const singles = await Single.find();
    console.log('visiting "/api/single" endpoint');
    console.log(singles);
    return res.status(200).send(singles);
  });

// : to avoid repeting locations (with same end point)
app.get(`/api/single/:location`, async (req, res) => {
  const locationParam = req.params.location
  const singles = await Single.find({location:locationParam});
  console.log('visiting "/api/single/:location" endpoint');
  return res.status(200).send(singles);
});
};

module.exports = singlesRoutes;

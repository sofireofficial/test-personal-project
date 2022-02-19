const mongoose = require("mongoose");
const Matchmaker = mongoose.model("matchmakers");

const matchmakersRoutes = (app) => {

  app.get(`/`, async (req, res) => {
    console.log('visiting "/" endpoint')
    return res.status(200).send('Test different endpoints');

  });

  app.get(`/api/matchmaker`, async (req, res) => {
    const matchmakers = await Matchmaker.find();
    console.log('visiting "/api/matchmaker" endpoint')
    return res.status(200).send(matchmakers);
  });

  app.post(`/api/matchmaker`, async (req, res) => {
    const matchmaker = await Matchmaker.create(req.body);

    return res.status(201).send({
      error: false,
      matchmaker,
    });
  });

  app.put(`/api/matchmaker/:id`, async (req, res) => {
    const { id } = req.params;

    const matchmaker = await Matchmaker.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      matchmaker,
    });
  });

  app.delete(`/api/matchmaker/:id`, async (req, res) => {
    const { id } = req.params;

    const matchmaker = await Matchmaker.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      matchmaker,
    });
  });
};

module.exports = matchmakersRoutes;

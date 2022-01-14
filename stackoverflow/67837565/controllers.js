const services = require('./services');

exports.fetchSamples = async (req, res) => {
  const data = await services.fetchSamplesFromDb(req.query.params);
  res.status(200).json(data);
};

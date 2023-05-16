const UserModel = require('./models/user');
const mongoose = require('mongoose');

exports.findUserById = (req, res) => {
  const id = req.params?.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "not valid id" });
    return;
  }

  UserModel.findById(id, function (err, doc) {
    if (err) {
      res.status(500).send({ message: err.message, });
    } else if (!doc) {
      res.status(404).send({ message: ` user with id: ${id} not found`, });
    } else {
      res.status(200).send(doc);
    }
  });
}
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('user', UserSchema);
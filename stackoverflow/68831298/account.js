const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({ name: String, user_id: Number });
const Account = mongoose.model('Account', AccountSchema);

module.exports = {
  Account,
};

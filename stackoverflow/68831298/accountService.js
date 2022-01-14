const { Account } = require('./account');

async function createAccount(data) {
  const account = new Account({ user_id: data.user_id });
  await account.save();
}

module.exports = { createAccount };

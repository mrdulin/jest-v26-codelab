const { createApiInstance } = require("./api");

const api = createApiInstance()

async function findFoo(name) {
  console.log({ api });
  return api({
    method: "GET",
    url: `/bar`,
  })
}

module.exports = { findFoo }
// Dogs with getFromRequest interface
const Dogs = {
  getFromRequest(req, res, next) {
    console.log('your real implementation');
  },
};

module.exports = Dogs;

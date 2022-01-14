const testFunction = (uint8arr, callback) => {
  const bb = new Blob([uint8arr]);
  const f = new FileReader();
  f.onload = function (e) {
    callback(e.target.result);
  };

  f.readAsText(bb);
};

module.exports = { testFunction };

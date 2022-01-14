module.exports = (string, blockSizeInBits = 32) => {
  if (string === undefined) {
    return new Error('String not defined.');
  }

  const pad = blockSizeInBits - (string.length % blockSizeInBits);
  const result = string + String.fromCharCode(0).repeat(pad - 1) + String.fromCharCode(pad);

  return result;
};

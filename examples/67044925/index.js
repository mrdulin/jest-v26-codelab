let dictionary = {
  there: 'there',
};

function sayHi(word) {
  if (dictionary.hasOwnProperty(word)) {
    return 'hello ' + dictionary[word];
  }
}

module.exports = { sayHi };

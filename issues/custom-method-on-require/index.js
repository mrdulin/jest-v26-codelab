function main() {
  return require.resolveWeak('./components/about');
}

module.exports = { main };

// require.resolveWeak = function (path) {
//   return true;
// };

// console.log(require.resolveWeak('./'));

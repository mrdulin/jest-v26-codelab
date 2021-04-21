async function originalFunc(params) {
  await exports.anotherFunc(params.arg1, params.arg2);
}

async function anotherFunc(arg1, arg2) {
  console.log('real anotherFunc implementation');
}

exports.originalFunc = originalFunc;
exports.anotherFunc = anotherFunc;

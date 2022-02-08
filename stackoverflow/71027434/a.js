const AWS = require('aws-sdk');

exports.getParameter = async function (parameterName) {
  const params = {
    Name: parameterName,
    WithDecryption: true,
  };
  const ssm = new AWS.SSM();
  try {
    const paramValue = await ssm.getParameter(params).promise();
    return paramValue.Parameter.Value;
  } catch (e) {
    console.log(e);
    throw new Error('Error while retrieving parameter value from pstore.\n' + e);
  }
};

exports.AWS = AWS;

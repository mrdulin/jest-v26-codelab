const AWS = require('aws-sdk');

const s3 = new AWS.S3({ apiVersion: '2012-11-05 ' });

function getS3Object(bucket, file) {
  return new Promise((resolve, reject) => {
    console.log('Checkpoint 1');
    const parameters = {
      Bucket: bucket,
      Key: file,
    };
    s3.getObject(parameters, (error, data) => {
      console.log('checkpoint 2');
      if (error) {
        console.log('error');
        reject(error);
      } else {
        console.log('success');
        resolve(data);
      }
    });
    console.log('Checkpoint 3');
  });
}

module.exports = { getS3Object };

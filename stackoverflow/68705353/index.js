'use strict';

const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const createPresignedPost = ({ key, contentType }) => {
  const s3 = new AWS.S3();
  const params = {
    Expires: 60,
    Bucket: process.env.AWS_BUCKET_NAME,
    Conditions: [['content-length-range', 100, 10000000]], // 100Byte - 10MB
    Fields: {
      'Content-Type': contentType,
      'Cache-Control': 'max-age=31536000',
      'Access-Control-Allow-Origin': '*',
      key,
    },
  };

  return new Promise((resolve, reject) => {
    s3.createPresignedPost(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = createPresignedPost;

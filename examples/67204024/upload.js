import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export async function uploadToS3(body, bucket, key) {
  console.log(`Uploading data to s3://${bucket}${key}`);
  await s3
    .upload({
      Body: body,
      Bucket: bucket,
      Key: key,
    })
    .promise()
    .then((data) => {
      console.log(`Successfully uploaded data to ${data.Location}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

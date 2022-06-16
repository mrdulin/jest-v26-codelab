import AWS from 'aws-sdk';

var sqs = new AWS.SQS();

export function main() {
  sqs.changeMessageVisibility(
    {
      QueueUrl: 'STRING_VALUE',
      ReceiptHandle: 'STRING_VALUE',
      VisibilityTimeout: 1000,
    },
    (err, data) => {
      if (err) console.log(err, err.stack);
      else console.log(data);
    }
  );
}

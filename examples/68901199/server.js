const AWS = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json());
app.post('/anon-ops/convert', async (req, res) => {
  const urlId = 123;
  const { longUrl } = req.body;
  const originalUrl = longUrl;
  const userType = 'anonymous';
  const tableName = 'xxxxxxxxxxxxx';

  const anonymousUrlCheckParams = {
    TableName: tableName,
    Key: { userId: userType, originalUrl },
  };

  dynamoDb.get(anonymousUrlCheckParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Unknown Server Error, Please Trimify Again!' });
    } else if (Object.keys(data).length === 0 && data.constructor === Object) {
      const paramsForTransaction = {
        TransactItems: [
          {
            Put: {
              TableName: tableName,
              Item: { userId: userType, originalUrl, convertedUrl: `https://xxxxxxxxxxxxxxxx/${urlId}` },
            },
          },
          {
            Put: {
              TableName: tableName,
              Item: { userId: urlId, originalUrl },
              ConditionExpression: 'attribute_not_exists(userId)',
            },
          },
        ],
      };
      dynamoDb.transactWrite(paramsForTransaction, (error) => {
        if (error) {
          res.status(500).json({ error: 'Unknown Server Error, Please trimify again. ' });
        } else {
          res.status(201).json({ convertedUrl: `https://xxxxxxxxxxxx/${urlId}` });
        }
      });
    } else {
      res.status(201).json({ convertedUrl: data.Item.convertedUrl });
    }
  });
});

module.exports = app;

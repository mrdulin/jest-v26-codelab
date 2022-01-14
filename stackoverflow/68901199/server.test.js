const request = require('supertest');

describe('68901199', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('should send converted url', (done) => {
    const mockedDocumentClient = {
      get: jest.fn(),
      transactWrite: jest.fn(),
    };

    const mockedDynamoDB = {
      DocumentClient: jest.fn(() => mockedDocumentClient),
    };
    jest.doMock('aws-sdk', () => {
      return { DynamoDB: mockedDynamoDB };
    });

    mockedDocumentClient.get.mockImplementation((params, callback) => {
      callback(null, {});
    });
    mockedDocumentClient.transactWrite.mockImplementation((params, callback) => {
      callback(null);
    });
    const app = require('./server');
    request(app)
      .post('/anon-ops/convert')
      .send({ longUrl: 'https://google.com' })
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({ convertedUrl: `https://xxxxxxxxxxxx/123` });
        done();
      });
  });
});

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server')
const UserModel = require('./models/user');
const express = require('express');
const request = require('supertest');

const app = express();

const { findUserById } = require('./findUserById');

describe('first', () => {
  let con;
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  })
  afterAll(async () => {
    // if (con) {
    //   await con.close();
    // }
    // if (mongoServer) {
    //   await mongoServer.stop();
    // }
    await mongoose.disconnect();
  })

  test('should find user by id', async () => {
    const user = new UserModel({ name: 'teresa teng' })
    await user.save()

    app.get('/:id', findUserById);

    const response = await request(app).get(`/${user._id}`)
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('teresa teng')
  })
})
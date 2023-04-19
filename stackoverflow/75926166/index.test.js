const app = require('./');
const supertest = require('supertest');
const request = supertest(app);

it('Positive flow', (done) => {
  const reqObj = { name: 'Qwerty', class: 2 };
  const resObj = { success: 'yes', message: 'done' };

  request
    .post('/calculation')
    .send(reqObj)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).toEqual(200);
      console.log('res.body:', res.body);
      expect(res.body).toEqual(expect.objectContaining(resObj));
      done();
    });
});

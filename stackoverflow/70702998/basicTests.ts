import request from 'supertest';

export function basicTests(app, route) {
  describe('basic test suites', () => {
    let res;
    beforeAll(async () => {
      const response = await request(app).get(route);
      res = { ...response };
    });
    test('should respond with a 200 status code', () => {
      expect(res.statusCode).toBe(200);
    });

    test('should specify json in the content type header', () => {
      expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    test('should return an ok property', () => {
      expect(res.body.ok).toBeDefined();
    });

    test('should return a description property', () => {
      expect(res.body.description).toBeDefined();
    });
  });
}

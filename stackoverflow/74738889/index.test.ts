import axios from 'axios';
import nock from 'nock';

axios.defaults.adapter = require('axios/lib/adapters/http')

describe('74738889', () => {
  test('should pass', async () => {
    const query = { id: 1 };
    const details = { id: 1, name: 'teresa teng' };
    const scope = nock('http://localhost', {
      reqheaders: {
        authorization: `Bearer <token>`
      }
    })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true'
      })
      .get('/v1/service')
      .query(query)
      .reply(200, details)


    const res = await axios.get('http://localhost/v1/service', {
      params: query,
      headers: {
        authorization: `Bearer <token>`
      }
    });
    console.log('res.data: ', res.data);
    console.log('res.headers', res.headers)
    expect(res.data).toEqual(details);

    scope.done()
  })
})
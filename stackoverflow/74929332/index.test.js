import axios from "axios";

jest.mock('axios');

describe('74929332', () => {
  test('should pass', async () => {
    axios.get.mockImplementation((url) => {
      return Promise.resolve({ status: 200, data: 'claim_response_276' });
    });
    const result = await axios.get('http://localhost:3000/api')
    expect(result).toEqual({ status: 200, data: 'claim_response_276' })
  })
})
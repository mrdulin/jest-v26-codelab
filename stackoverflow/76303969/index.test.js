import { server } from './mocks/server';
import { fetchFavorites } from './utils'

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('76303969', () => {
  test('should pass', async () => {
    const result = await fetchFavorites()
    expect(result).toEqual([1])
  })
})
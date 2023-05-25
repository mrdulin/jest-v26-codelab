import request from 'supertest'
import { app } from './app';
import GanbLib from './ganblib'

jest.mock('./ganblib');

describe('POST /api/endpoint', () => {
  const endpoint = '/api/endpoint'

  test('refresh token', async () => {
    const mockRefreshTokens = jest.fn().mockResolvedValue({
      access_token: 'fake token',
      refresh_token: null,
    });
    GanbLib.mockImplementation(() => {
      return { refreshTokens: mockRefreshTokens }
    })

    const res = await request(app).post(endpoint)
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      access_token: 'fake token',
      refresh_token: null,
    })
  })
})
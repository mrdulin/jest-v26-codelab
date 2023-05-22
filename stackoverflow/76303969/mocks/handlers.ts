import { graphql } from 'msw';

export const handlers = [
  graphql.query('Favorites', (req, res, ctx) => {
    return res(
      ctx.data({
        favorites: [1],
      }),
    )
  })
]

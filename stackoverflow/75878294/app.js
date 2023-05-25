import express from 'express'
import GanbLib from './ganblib'

const app = express();
const controller = express.Router()

controller.post('/api/endpoint', async (req, res) => {
  const clientOptions = {
    clientID: 'client_id',
    clientSecret: 'secrete_id',
    nonceCallbacks: [() => { }, () => { }],
  }
  const ganbLib = new GanbLib(clientOptions)

  ganbLib
    .refreshTokens('refresh_token')
    .then((result) => {
      res.status(200).json(result)
    })
})

app.use(controller)

export { app }
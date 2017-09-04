const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const apiRouter = require('./api-router')

function createApp(database) {
  const app = express()

  app.use(express.static(path.join(__dirname, 'public')))
  app.use(bodyParser.json())
  app.use('/api', apiRouter(database))
  app.use('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'))
  })

  return app
}

module.exports = createApp

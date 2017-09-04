const express = require('express')
const MongoClient = require('mongodb').MongoClient
const createApp = require('./create-app')

require('dotenv').config()

MongoClient.connect(process.env.DB_CONNECTION, (err, db) => {
  console.log('connected to mongodb...')

  createApp(db)
    .listen(process.env.PORT || 3000, () => {
      console.log('server started...')
    })
})

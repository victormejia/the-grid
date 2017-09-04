const express = require('express')

function apiRouter(database) {
  const router = express.Router()

  router.get('/hackers', (req, res) => {
    const contactsCollection = database.collection('hackers')

    contactsCollection.find({}).toArray((err, docs) => {
      return res.json(docs)
    })
  })

  return router
}

module.exports = apiRouter

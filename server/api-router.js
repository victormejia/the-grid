const express = require('express')

function apiRouter(database) {
  const router = express.Router()

  router.get('/hackers', (req, res) => {
    const { term } = req.query

    const contactsCollection = database.collection('hackers')

    contactsCollection
      .find({'name': {'$regex': term || ''}})
      .toArray((err, docs) => {
        return res.json(docs)
      })
  })

  return router
}

module.exports = apiRouter

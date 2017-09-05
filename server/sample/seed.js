require('dotenv').config()

const MongoClient = require('mongodb').MongoClient
const hackers = require('./hackers')

function seedCollection(collectionName, initialRecords) {

  MongoClient.connect(process.env.DB_CONNECTION, (err, db) => {
    console.log('connected to mongodb...')

    const collection = db.collection(collectionName)

    collection.remove()

    console.log('inserting records...')

    collection.insertMany(initialRecords, (err, result) => {
      console.log(`${result.insertedCount} records inserted.`)
      console.log('closing connection...')
      db.close()
      console.log('done.')
    })

  })
}


seedCollection('hackers', hackers)

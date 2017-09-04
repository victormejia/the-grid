const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.get('/dummy', (req, res) => {
  res.json({ data: 'it works!' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server started...')
})

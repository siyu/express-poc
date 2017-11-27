console.log('hello3')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()
app.use(morgan('combined')) // logging
app.use(bodyParser.json())
app.use(cors()) // cross origin resource sharing - may be security risk

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.post('/register', (req, res) => {
  var msg = `hello ${req.body.email}! Your user is registered!`
  console.log(msg)
  res.send({
    message: msg
  })
})

app.listen(process.env.PORT || 8081)

console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // logging
app.use(bodyParser.json())
app.use(cors()) // may be security risk

app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email}! Your user is registered!`
  })
})

app.listen(process.env.PORT || 8081)

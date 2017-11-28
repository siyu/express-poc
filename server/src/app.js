console.log('hello3')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()
app.use(morgan('combined')) // logging
app.use(bodyParser.json())
app.use(cors()) // cross origin resource sharing - use for dev, may be security risk if deployed to prod

app.use(express.static(path.join(__dirname, 'dist'))) // serve front end files

require('./routes')(app) // handle routes

app.listen(process.env.PORT || 8081)

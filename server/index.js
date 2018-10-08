const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

// initialize app
const app = express()

// setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
)

// setup json parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// setup environment variables
require('dotenv').config()

// serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')))

// serve api
require('./routes')(app)

// set port
const PORT = process.env.PORT || 8000

// set up s3
// require('./aws/s3-config.js')

// setup listener
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

// export app
module.exports = app

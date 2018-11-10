const express = require('express')
const morgan = require('morgan')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')

require('dotenv').config()

const app = express()

process.env.NODE_ENV === 'development'
  ? app.use(morgan('dev'))
  : app.use(
      morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
      )
    )

app.use(express.json())
app.use(helmet())
app.use(cors())

// serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')))

// serve api
require('./routes')(app)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

module.exports = app

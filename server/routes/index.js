const filesRouter = require('./filesRouter.js')
const foldersRouter = require('./foldersRouter.js')

module.exports = app => {
  app.use('/api/folders', foldersRouter)
  app.use('/api/files', filesRouter)

  // testing route to check of server is live
  app.get('/test', (req, res) => {
    res.status(200).json({ message: 'server is live' })
  })
}

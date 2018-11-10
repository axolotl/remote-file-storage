const filesRouter = require('./filesRouter.js')
const foldersRouter = require('./foldersRouter.js')

module.exports = app => {
  app.use('/api/folders', foldersRouter)
  app.use('/api/files', filesRouter)
}

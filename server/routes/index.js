const itemsController = require('../controllers').items
let mockData = require('../mockData/mockData')

module.exports = app => {
  app.get('/api/folders/:folderId', itemsController.list)

  app.post('/api/files', itemsController.createFile)
  app.post('/api/folders', itemsController.createFolder)

  app.delete('/api/files/:fileId', itemsController.destroy)
  app.delete('/api/folders/:folderId', itemsController.destroy)
}

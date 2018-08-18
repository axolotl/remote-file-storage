const itemsController = require('../controllers').items
let mockData = require('../mockData/mockData')

module.exports = app => {
  // app.get('/api/folders/', itemsController.list)
  // app.get('/api/folders/:folderId', itemsController.list)

  // app.post('/api/files', itemsController.createFile)
  // app.post('/api/folders', itemsController.createFolder)

  // app.post('/api/files/:itemId', itemsController.rename)
  // app.post('/api/folders/:itemId', itemsController.rename)

  // app.delete('/api/files/:itemId', itemsController.destroy)
  // app.delete('/api/folders/:itemId', itemsController.destroy)

  // better routes

  // get root level items (initial api call)
  app.get('/api/items/', itemsController.list)

  // get items nested inside folders
  app.get('/api/items/:folderId', itemsController.list)

  // create folders and files served from same route
  // controller will each seperately based on type
  app.post('/api/items', itemsController.create)

  // rename items
  app.post('/api/items/:itemId', itemsController.rename)

  // delete items
  app.delete('/api/items/:itemId', itemsController.destroy)
}

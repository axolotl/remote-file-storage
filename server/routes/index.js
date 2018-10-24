const multer = require('multer')
const itemsController = require('../controllers').items
const FormData = require('form-data')
const S3 = require('../aws/S3')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })

module.exports = app => {
  // get root level items (initial api call)
  app.get('/api/items/', itemsController.list)

  // get items nested inside folders
  app.get('/api/items/:folderId', itemsController.list)

  // create new folder
  app.post('/api/items', itemsController.createFolder)

  // rename items
  app.post('/api/items/:itemId', itemsController.rename)

  // delete items
  app.delete('/api/items/:itemId', itemsController.destroy)

  // upload file
  app.post(
    '/api/uploadfile',
    upload.single('file'),
    S3.upload,
    itemsController.uploadFile
  )

  // download file
  app.get('/api/download/:itemId', itemsController.downloadFile)
}

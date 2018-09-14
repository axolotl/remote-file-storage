const multer = require('multer')
const itemsController = require('../controllers').items

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './')
  },
  filename: (req, file, cb) => {
    cb(null, req.name)
  }
})

const upload = multer({ storage: storage })

module.exports = app => {
  // get root level items (initial api call)
  app.get('/api/items/', itemsController.list)

  // get items nested inside folders
  app.get('/api/items/:folderId', itemsController.list)

  // create folders and files served from same route
  // controller will handle each separately based on type
  app.post('/api/items', itemsController.create)

  // rename items
  app.post('/api/items/:itemId', itemsController.rename)

  // delete items
  app.delete('/api/items/:itemId', itemsController.destroy)

  // multer route
  // app.post('/api/uploadfile', upload.single('file'), (req, res) => {
  app.post('/api/uploadfile', upload.single('file'), (req, res) => {
    console.log(req.body.file)
    console.log(Object.entries(req.body.file))
    for (let entry of Object.entries(req.body.file)) {
      console.log(entry)
    }
    console.log(req.body.file.toString())
    console.log(JSON.stringify(req.body.file))
    res.send({ message: 'attempt made' })
  })
}

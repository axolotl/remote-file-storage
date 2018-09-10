const multer = require('multer')
const itemsController = require('../controllers').items

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/home/theofeau/')
  },
  filename: (req, file, cb) => {
    cb(null, req.name)
  }
})

//const upload = multer({ dest: './' })

const upload = multer({ storage: storage })

module.exports = app => {
  // get root level items (initial api call)
  app.get('/api/items/', itemsController.list)

  // get items nested inside folders
  app.get('/api/items/:folderId', itemsController.list)

  // create folders and files served from same route
  // controller will each separately based on type
  app.post('/api/items', itemsController.create)

  // rename items
  app.post('/api/items/:itemId', itemsController.rename)

  // delete items
  app.delete('/api/items/:itemId', itemsController.destroy)

  // multer route
  app.post('/api/uploadfile', upload.single('file'), (req, res) => {
    console.log(typeof(req.body.file))
    res.send({ message: 'attempt made' })
  }
  )

  // alternate upload route
  // app.post('/api/uploadfile', (req, res, next) => {
  //   console.log(req);
  //   let imageFile = req.files.file;

  //   imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
  //     if (err) {
  //       return res.status(500).send(err);
  //     }

  //     res.json({file: `public/${req.body.filename}.jpg`});
  //   });

  // })
}




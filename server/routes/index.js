let mockData = require('../mockData/mockData')

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send('Welcome to the /api paaaaaaaaaaath')
  )

  /*

  we need a method for returning an array of itme (the inside of a folder)
  we have root -> returns an array of files and folders
  then for each folder we can request its contents separately

  as for files, all of the requesite info is there in the array already ...
  what instead will happen (later) is that the GET method for a file will return a stream 
  to download the fle

  so for now what do we need? 
  get root items, get contents by id

  rename item by id
  delete item by id

  add item by parent id (push to array/table)

  */

  app.get('/api/folders/:folderId', (req, res) => {
    res.status(200).send(mockData[req.params.folderId])
  })

  app.get('/api/files/:fileId', (req, res) => {
    res.status(200).send('file found')
  })

  app.post('/api/folders/:folderId') // post mutation
  app.post('/api/files/:fileId') // post mutation

  app.post('/api/folders') // create new folder from body data
  app.post('/api/files') // open up new stream?

  app.delete('/api/folders/:folderId') // delete folder
  app.delete('/api/files/:fileId') // delete file
}

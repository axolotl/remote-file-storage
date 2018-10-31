const Item = require('../models').Item

module.exports = {
  createFolder(req, res) {
    return Item.create({
      name: req.body.name,
      type: 'folder',
      belongsTo: req.body.belongsTo || ''
    })
      .then(score => res.status(201).send(score))
      .catch(error => res.status(400).send(error))
  },

  uploadFile(req, res) {
    return Item.create({
      name: req.body.name,
      type: 'file',
      belongsTo: req.body.belongsTo,
      location: req.file.path,
      locationAWS: req.locationAWS
    })
      .then(score => res.status(201).send(score))
      .catch(error => res.status(400).send(error))
  },

  rename(req, res) {
    return Item.findById(req.params.itemId).then(item => {
      if (!item) {
        return res.status(400).send('item not found')
      }
      return item
        .update({
          name: req.body.name
        })
        .then(() => res.status(200).send(item))
        .catch(error => res.status(400).send(error))
    })
  },

  destroy(req, res) {
    return Item.findById(req.params.itemId)
      .then(item => {
        if (!item) {
          return res.status(400).send('item not found')
        }
        return item
          .destroy()
          .then(() => res.status(204).send('deleted'))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    return Item.findAll({
      where: { belongsTo: req.params.folderId || '' }
    })
      .then(scores => res.status(200).send(scores))
      .catch(error => res.status(400).send(error))
  },

  downloadFile(req, res) {
    return Item.findById(req.params.itemId)
      .then(item => {
        if (!item) {
          return res.status(400).send('No database record found for that file')
        } else if (!item.location.length) {
          return res.status(400).send('No file found for that database record')
        }

        res.download(item.location)
      })
      .catch(error => res.status(400).send(error))
  },

  getLocationAWS(req, res, next) {
    console.log(req.params.itemId)
    return Item.findById(req.params.itemId)
      .then(item => {
        if (!item) {
          return res.status(400).send('No database record found for that file')
        } else if (!item.location.length) {
          return res.status(400).send('No file found for that database record')
        }

        req.locationAWS = item.locationAWS
        next()
      })
      .catch(error => res.status(400).send(error))
  }
}

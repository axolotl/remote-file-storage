const Item = require('../models').Item

module.exports = {
  createFolder(req, res) {
    return Item.create({
      name: req.body.name,
      type: 'folder',
      belongsTo: req.body.belongsTo || 'base'
    })
      .then(score => res.status(201).send(score))
      .catch(error => res.status(400).send(error))
  },

  createFile(req, res) {
    return Item.create({
      name: req.body.name,
      type: 'file',
      belongsTo: req.body.belongsTo || 'base',
      location: req.body.location
    })
      .then(score => res.status(201).send(score))
      .catch(error => res.status(400).send(error))
  },

  destroy(req, res) {
    return Item.findById(req.params.itemId)
      .then(item => {
        if (!item) {
          return res.status(400).send('not found')
        }
        return item
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  },

  list(req, res) {
    return Item.findAll({ where: { belongsTo: req.body.folder } })
      .then(scores => res.status(200).send(scores))
      .catch(error => res.status(400).send(error))
  }
}

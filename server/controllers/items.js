const Item = require('../models').Item

module.exports = {
  create(req, res) {
    if (req.body.type === 'folder') {
      return Item.create({
        name: req.body.name,
        type: 'folder',
        belongsTo: req.body.belongsTo || ''
      })
        .then(score => res.status(201).send(score))
        .catch(error => res.status(400).send(error))
    } else if (req.body.type === 'file') {
      return Item.create({
        name: req.body.name,
        type: 'file',
        belongsTo: req.body.belongsTo || '',
        location: req.body.location
      })
        .then(score => res.status(201).send(score))
        .catch(error => res.status(400).send(error))
    } else {
      return res.status(400).send('something went wrong')
    }
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
          .then(() => res.status(204).send())
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
  }
}

const Item = require('../models').Item

function createFolder(req, res) {
  console.log('in create folder')
  return Item.create({
    name: req.body.name,
    type: 'folder',
    belongsTo: req.body.belongsTo || ''
  })
    .then(score => res.status(201).send(score))
    .catch(error => res.status(400).send(error))
}

module.exports = createFolder

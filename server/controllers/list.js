const Item = require('../models').Item

function list(req, res) {
  return Item.findAll({
    where: { belongsTo: req.params.id || '' }
  })
    .then(items => res.status(200).send(items))
    .catch(error => res.status(400).send(error))
}

module.exports = list

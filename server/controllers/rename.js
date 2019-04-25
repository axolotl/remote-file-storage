const Item = require('../models').Item

function rename(req, res) {
  return Item.findById(req.params.id).then(item => {
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
}

module.exports = rename

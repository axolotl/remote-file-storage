const Item = require('../models').Item

function destroy(req, res) {
  return Item.findById(req.params.id)
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
}

module.exports = destroy

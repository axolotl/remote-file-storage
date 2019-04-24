const Item = require('../models').Item

function downloadFile(req, res) {
  return Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(400).send('No database record found for that file')
      } else if (!item.location.length) {
        return res.status(400).send('No file found for that database record')
      }

      res.download(item.location)
    })
    .catch(error => res.status(400).send(error))
}

module.exports = downloadFile

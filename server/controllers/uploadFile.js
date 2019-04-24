const Item = require('../models').Item

async function uploadFile(req, res) {
  try {
    const item = await Item.create({
      name: req.body.name,
      type: 'file',
      belongsTo: req.body.belongsTo,
      location: 'aws', // this is temporary --> with only s3 storage this goes away
      locationAWS: req.locationAWS,
      size: req.size
    })

    // update parent folder entry in database
    const update_recursively = item => {
      Item.findById(item).then(item => {
        if (item) {
          item.update({
            size: (item.size += req.size)
          })
          update_recursively(item.belongsTo)
        }
      })
    }

    await update_recursively(req.body.belongsTo)

    res.status(200).send(item)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = uploadFile

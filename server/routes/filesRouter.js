const express = require('express')
const itemsController = require('../controllers').items
const S3 = require('../aws/S3')

const router = express.Router()

router.get('/:id', itemsController.getLocationAWS, S3.download)
router.post('/', S3.upload, itemsController.uploadFile)
router.put('/:id', itemsController.rename)
router.delete('/:id', S3.delete, itemsController.destroy)

module.exports = router

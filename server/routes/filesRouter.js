const express = require('express')
const controllers = require('../controllers')
const S3 = require('../aws/S3')

const router = express.Router()

router.get('/:id', controllers.getLocationAWS, S3.download)
router.post('/', S3.upload, controllers.uploadFile)
router.put('/:id', controllers.rename)
router.delete('/:id', S3.delete, controllers.destroy)

module.exports = router

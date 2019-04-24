const express = require('express')
const controllers = require('../controllers')

const router = express.Router()

router.get('/', controllers.list)
router.get('/:id', controllers.list)
router.post('/', controllers.createFolder)
router.put('/:id', controllers.rename)
router.delete('/:id', controllers.destroy)

module.exports = router

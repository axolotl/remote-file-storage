const express = require('express')
const itemsController = require('../controllers').items

const router = express.Router()

router.get('/', itemsController.list)
router.get('/:id', itemsController.list)
router.post('/', itemsController.createFolder)
router.put('/:id', itemsController.rename)
router.delete('/:id', itemsController.destroy)

module.exports = router

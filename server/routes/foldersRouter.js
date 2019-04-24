const express = require('express')
const controllers = require('../controllers')

const router = express.Router()

// console.log(controllers.creatFolder())
// console.log(JSON.stringify(controllers.creatFolder()))

router.get('/', controllers.list)
router.get('/:id', controllers.list)
router.post('/', (req, res) => controllers.createFolder(req, res))
router.put('/:id', controllers.rename)
router.delete('/:id', controllers.destroy)

module.exports = router

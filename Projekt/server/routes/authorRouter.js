const express = require('express')
const router = express.Router()

const authorController = require('../controllers/authorController')

router.get('/', authorController.get_Author)
router.post('/', authorController.create_Author)


module.exports = router

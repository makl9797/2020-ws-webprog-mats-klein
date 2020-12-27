const express = require('express')
const router = express.Router()

const mediaController = require('../controllers/mediaController')

router.get('/', mediaController.get_Media)
router.post('/', mediaController.create_Media)


module.exports = router

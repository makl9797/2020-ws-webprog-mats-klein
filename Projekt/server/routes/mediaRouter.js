const express = require('express')
const router = express.Router()

const mediaController = require('../controllers/mediaController')

router.use(mediaController.create_Media)

router.get('/', mediaController.get_Media)


module.exports = router

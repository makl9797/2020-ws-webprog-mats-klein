const express = require('express')
const router = express.Router()

const mediaController = require('../controllers/mediaController')

router.use(mediaController.create_Media)

module.exports = router

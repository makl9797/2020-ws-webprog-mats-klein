const express = require('express')
const router = express.Router()

const authorController = require('../controllers/authorController')

router.use(authorController.create_Author)

module.exports = router

const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CourseController')

router.get('/:slug', courseController.detail)
router.get('/', courseController.index)

module.exports = router

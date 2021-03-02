const express = require('express')
const router = express.Router()

const meController = require('../controllers/MeController')

router.get('/stored/courses', meController.storedCourses)
router.get('/deleted/courses', meController.deletedCourses)

module.exports = router

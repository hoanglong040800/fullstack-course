const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CourseController')

// OTHER
router.post('/store', courseController.store)
router.delete('/:id/force', courseController.forceDelete)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.delete)
router.put('/:id', courseController.update)

// GET
router.get('/create', courseController.create)
router.get('/:id/edit', courseController.edit)
router.get('/:slug', courseController.detail)
router.get('/', courseController.index)

module.exports = router

const router = require('express').Router()
const MenuController = require('../../controllers/PawangSinga/menuController')

// READ
router.get('/', MenuController.findAll )
router.get('/:id', MenuController.findById )
// CREATE
router.post('/create')
// DELETE
router.delete('/:id')
// UPDATE
router.put('/:id')

module.exports = router
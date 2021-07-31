const router = require('express').Router()
const RestaurantController = require('../../controllers/PawangSinga/restaurantController')

// READ
router.get('/', RestaurantController.findAll )
router.get('/:id', RestaurantController.findById )
// CREATE
router.post('/create')
// DELETE
router.delete('/:id')
// UPDATE
router.put('/:id')

module.exports = router
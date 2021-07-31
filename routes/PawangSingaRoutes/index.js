const router = require('express').Router()
const menuRoutes = require('./menu')
const restaurantRoutes = require('./restaurant')
const userRoutes = require('../user')

router.use('/menu', menuRoutes)
router.use('/rest', restaurantRoutes)
router.use('/user', userRoutes)

router.get('/*',(req,res)=> {
    res.send("Hello From pawang singa app !!")
})

module.exports = router
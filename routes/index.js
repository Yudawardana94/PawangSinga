const router = require('express').Router()
const PawangSingaAppRouter = require('./PawangSingaRoutes')
const userRoutes = require('./user')
const GlobalController = require('../controllers/globalController')

router.use('/pawangSinga', PawangSingaAppRouter)
router.get('/serverStatus', GlobalController.getServerStatus)
router.use('/user', userRoutes)
router.get('/',(req,res)=> {
    res.send("use localhost:3000/pawangSinga")
})

module.exports = router
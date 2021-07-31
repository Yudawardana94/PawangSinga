class UserController {
    static getServerStatus (req,res, next) {
        res.send({status: 'active'})
    }
}

module.exports = UserController
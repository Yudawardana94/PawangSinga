const userModel = require("../models/UserModel")

class UserController {
    static findAll(req,res,next) {res.send('find all user')}
    static findById(req,res,next) {res.send('find by Id user')}
    
    static async create(req,res,next) {
        console.log(req.body)
        const { userName, firstName, lastName, email, password, role } = req.body;
        let newUser = { userName, firstName, lastName, email, password, role }
        // try {
        //     // const created = await usertModel.reate(req.body);
        //     const created = await usertModel.reate(newUser)
        //     console.log(created, 'created')
        //     res.status(201).json(created)
        // } catch (error) {
        //     res.send(error)
        // }
        userModel
            .create(newUser)
            .then(created => {
                res.status(201).json(created)
            })
            .catch(error => {
                res.status(400).json(error)
            })
        // res.send('created')
    };

    static update(req,res,next) {res.send('updated')}
    static delete(req,res,next) {res.send('deleted')}
}

module.exports = UserController